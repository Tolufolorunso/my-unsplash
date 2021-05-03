import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import logo from '../my_unsplash_logo.svg'
import { Button } from './Button.style'

const Header = ({ addPhotoHandle, onChangeFilterHandler }) => {
  // Debounce function
  let timeoutId
  const onChangeHandler = (e) => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      onChangeFilterHandler(e)
    }, 1000)
  }
  return (
    <NavContainer>
      <div className='left'>
        <div className='logo-container'>
          <img src={logo} alt='site logo' />
        </div>
        <div className='search-bar'>
          <form>
            <div className='input-control search'>
              <input
                type='text'
                className='form-input'
                placeholder='Search by name'
                onChange={onChangeHandler}
              />
              <FontAwesomeIcon className='search-glass' icon={faSearch} />
            </div>
          </form>
        </div>
      </div>
      <div className='right'>
        <Button onClick={addPhotoHandle} type='button'>
          Add a Photo
        </Button>
      </div>
    </NavContainer>
  )
}

const NavContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;

  @media (max-width: 650px) {
    flex-direction: column;
    width: 100%;
    margin-bottom: 20px;
  }

  .logo-container {
    width: 138px;
    height: 26px;
  }
  .search-bar {
    width: 300px;
    margin-left: 15px;
  }

  .search {
    position: relative;
  }

  .search input {
    padding-left: 40px;
  }
  .search-glass {
    position: absolute;
    left: 15px;
    top: 19px;
  }

  .left {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: 650px) {
    .left {
      flex-direction: column;
      width: 100%;
      margin-bottom: 20px;
    }
    .logo-container {
      margin-bottom: 20px;
    }
    .search-bar {
      max-width: 100%;
    }
  }
`

export default Header
