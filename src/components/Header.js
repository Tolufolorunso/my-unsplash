import React from 'react'
import logo from '../my_unsplash_logo.svg'
import styled from 'styled-components'
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
            <div className='input-control'>
              <input
                type='text'
                className='form-input'
                placeholder='Search by name'
                onChange={onChangeHandler}
              />
            </div>
          </form>
        </div>
      </div>
      <div className='right'>
        <Button onClick={addPhotoHandle}>Add a Photo</Button>
      </div>
    </NavContainer>
  )
}

const NavContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;

  /* @media (max-width: 768px) {
    display: column;
    columns: 2;
    gap: 1em;
  } */

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

  /* .search-bar input {
    width: 100%;
    padding: 1rem 1rem 1rem 2rem;
    font-family: Noto Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 0.84rem;
    line-height: 19px;
    color: #bdbdbd;
    border: 1px solid #bdbdbd;
    box-sizing: border-box;
    filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.1));
    border-radius: 6px;
  } */
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
