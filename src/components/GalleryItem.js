import React from 'react'
import styled, { keyframes } from 'styled-components'
import { swing } from 'react-animations'

const GalleryItem = ({ image, deleteHandler }) => {
  return (
    <Item className='img'>
      <img src={image.photoUrl} alt='' />
      <button
        className='button btn-para'
        onClick={() => deleteHandler(image._id, image.label)}
      >
        Delete
      </button>
      <p className='label btn-para'>{image.label}</p>
    </Item>
  )
}
const bounceAnimation = keyframes`${swing}`

const Item = styled.div`
  animation: 1s ${bounceAnimation};
  position: relative;
  .button {
    position: absolute;
    top: 23px;
    right: 23px;
    width: 63px;
    height: 23px;
    background-color: transparent;
    color: #eb5757;
    font-weight: bold;
    letter-spacing: 1px;
    border: 1px solid #eb5757;
    box-sizing: border-box;
    border-radius: 38px;
    cursor: pointer;
  }
  .button:hover {
    background-color: #eb5757;
    color: #ffffff;
  }
  .btn-para {
    display: none;
  }

  .label {
    position: absolute;
    bottom: 30px;
    left: 30px;
    right: 30px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: #ffffff;
  }
`

export default GalleryItem
