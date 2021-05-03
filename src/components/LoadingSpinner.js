import React from 'react'
import styled from 'styled-components'

const LoadingSpinner = () => {
  return <Wrapper className='spinner'></Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 10%; */
  &::after {
    content: '';
    width: ${(props) => (props.large ? '100px' : '20px')};
    height: ${(props) => (props.large ? '100px' : '20px')};
    border: 4px solid #f3f3f3;
    border-top: 5px solid #f25a41;
    border-bottom: 5px solid #3db46d;
    border-radius: 100%;
    will-change: transform;
    animation: spin 1s infinite linear;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`

export default LoadingSpinner
