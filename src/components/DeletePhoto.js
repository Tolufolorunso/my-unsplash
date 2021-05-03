import React from 'react'
import { Button } from './Button.style'
import { LoadingSpinner, Modal } from './index'

const DeletePhoto = ({ cancelHandler, deleteImageHandler, loading }) => {
  const [password, setPassword] = React.useState('')
  const onChangeHandler = (e) => {
    setPassword(e.target.value)
  }
  return (
    <Modal title='Are you sure?'>
      <form>
        <div className='form-control'>
          <label htmlFor='label'>Password(tolulope)</label>
          <input
            type='password'
            id='label'
            className='form-input'
            placeholder='************'
            value={password}
            onChange={onChangeHandler}
            name='password'
          />
        </div>

        <div className='modalBtns'>
          <Button cancel onClick={cancelHandler}>
            Cancel
          </Button>

          {loading ? (
            <LoadingSpinner />
          ) : (
            <Button
              onClick={(e) => {
                e.preventDefault()
                deleteImageHandler(password)
              }}
            >
              Delete
            </Button>
          )}
        </div>
      </form>
    </Modal>
  )
}

export default DeletePhoto
