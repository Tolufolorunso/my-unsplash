import React from 'react'
import styled, { keyframes } from 'styled-components'
import { wobble } from 'react-animations'

const Modal = ({ title, children }) => {
  return (
    <ModalWrapper>
      <div className='form-wrapper'>
        <h2>{title}</h2>
        {children}
      </div>
    </ModalWrapper>
  )
}

const bounceAnimation = keyframes`${wobble}`
const ModalWrapper = styled.div`
  position: fixed;
  overflow: hidden;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.384);
  height: 100%;
  z-index: 2000;

  .form-wrapper {
    animation: 1s ${bounceAnimation};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background: #ffffff;
    border-radius: 12px;
    padding: 1.3rem 2rem;
    width: 100%;
    max-width: 550px;
  }

  h2 {
    color: #333333;
    margin-bottom: 20px;
    /* padding-left: 23px; */
  }

  .modalBtns {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .modalBtns:first-child {
    margin-right: 50px;
  }
`

export default Modal
