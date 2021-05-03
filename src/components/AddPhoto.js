import React from 'react'
import { Button } from './Button.style'
import { LoadingSpinner, Modal } from './index'

const AddPhoto = ({
  cancelHandler,
  addImageSubmitHandler,
  onChangeHandler,
  label,
  photoUrl,
  loading,
}) => {
  return (
    <Modal title='Add New Photo'>
      <form>
        <div className='form-control'>
          <label htmlFor='label'>Label</label>
          <input
            type='text'
            id='label'
            className='form-input'
            placeholder='Photo Name'
            value={label}
            onChange={onChangeHandler}
            name='label'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='photo-url'>Photo URL</label>
          <input
            type='url'
            id='photo-url'
            className='form-input'
            placeholder='https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r...'
            value={photoUrl}
            onChange={onChangeHandler}
            name='photo-url'
          />
        </div>
        <div className='modalBtns'>
          <Button cancel onClick={cancelHandler} type='button'>
            Cancel
          </Button>

          {loading ? (
            <LoadingSpinner />
          ) : (
            <Button onClick={addImageSubmitHandler}>Add image</Button>
          )}
        </div>
      </form>
    </Modal>
  )
}

export default AddPhoto
