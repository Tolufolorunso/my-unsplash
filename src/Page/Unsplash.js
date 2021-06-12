import axios from 'axios'
import React, { useState, useEffect } from 'react'

import {
  AddPhoto,
  Gallery,
  Header,
  LoadingSpinner,
  DeletePhoto,
} from '../components'

import { customError } from '../utils/customError.js'



// import imagesArr from '../data'

const Unsplash = () => {
  const [isModalShow, setIsModalShow] = useState('')
  const [label, setLabel] = useState('')
  const [photoUrl, setPhotoUrl] = useState('')
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [photoID, setPhotoID] = useState('')

  const cancelHandler = () => {
    setLabel('')
    setPhotoUrl('')
    setIsModalShow('')
  }

  // Add photo to the NodeJs server and also add the photo to UI
  const addImageSubmitHandler = async (e) => {
    e.preventDefault()
    if (!label || !photoUrl) {
      alert('Fields must not be empty')
      return
    }
    try {
      const response = await axios.post(
        'https://unsplash-be.herokuapp.com/api/v1/image',
        {
          label,
          photoUrl
        }
      )
      setLoading(false)
      images.unshift(response.data.data)
      setImages(images)
      setLabel('')
      setPhotoUrl('')
      setIsModalShow('')
    } catch (error) {
      customError(error, setLoading)
    }
  }

  const addPhotoHandle = (e) => {
    e.preventDefault()
    setIsModalShow('add')
  }

  const onChangeHandler = (e) => {
    if (e.target.name === 'label') {
      setLabel(e.target.value)
    }
    if (e.target.name === 'photo-url') {
      setPhotoUrl(e.target.value)
    }
  }

  const deleteHandler = async (id) => {
    setIsModalShow('delete')
    setPhotoID(id)
  }

  // Get all photos from the NodeJs server
  const getPhotos = async () => {
    try {
      const photos = await axios.get(
        'https://unsplash-be.herokuapp.com/api/v1/image'
      )
      setImages(photos.data.data)
      // setImages(imagesArr)
      setLoading(false)
    } catch (error) {
      customError(error, setLoading)
    }
  }

  // Delete a photo from the NodeJs server
  const deleteImageHandler = async (password) => {
    if (!password || !photoID) {
      alert('Enter password or no image to delete')
      return
    }
    if (password.trim().toLowerCase() !== 'tolulope') {
      alert('Password is tolulope')
      return
    }
    try {
      const deletedPhoto = await axios.delete(
        `https://unsplash-be.herokuapp.com/api/v1/image/${photoID}`
      )

      if (deletedPhoto.data.status === 'success') {
        const newPhotoArr = images.filter((image) => {
          return image._id !== photoID
        })
        setImages(newPhotoArr)
        setIsModalShow('')
      }
    } catch (error) {
      customError(error, setLoading)
    }
  }

  const onChangeFilterHandler = async (e) => {
    setLoading(true)
    let searchText = e.target.value.trim().toLowerCase()
    try {
      const photos = await axios.get(
        `https://unsplash-be.herokuapp.com/api/v1/image?label=${searchText}`
      )
      setImages(photos.data.data)
      setLoading(false)
    } catch (error) {
      customError(error, setLoading)
    }
  }

  useEffect(() => {
    getPhotos()
  }, [])
  return (
    <>
      {isModalShow === 'add' ? (
        <AddPhoto
          cancelHandler={cancelHandler}
          addImageSubmitHandler={addImageSubmitHandler}
          onChangeHandler={onChangeHandler}
          label={label}
          photoUrl={photoUrl}
          loading={loading}
        />
      ) : null}
      {isModalShow === 'delete' ? (
        <DeletePhoto
          loading={loading}
          cancelHandler={cancelHandler}
          deleteImageHandler={deleteImageHandler}
        />
      ) : null}
      <div className='main-page'>
        <Header
          addPhotoHandle={addPhotoHandle}
          onChangeFilterHandler={onChangeFilterHandler}
        />
        {loading ? (
          <LoadingSpinner large />
        ) : (
          <Gallery images={images} deleteHandler={deleteHandler} />
        )}
      </div>
    </>
  )
}

export default Unsplash
