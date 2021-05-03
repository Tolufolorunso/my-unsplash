import styled from 'styled-components'

const Button = styled.button`
  display: inline-block;
  border-radius: 6px;
  background: ${(props) => (props.cancel ? 'transparent' : '#3db46d')};
  border: none;
  outline: none;
  cursor: pointer;
  color: ${(props) => (props.cancel ? '#BDBDBD' : '#fff')};
  padding: 16px;
  filter: drop-shadow(0px 4px 10px rgba(61, 180, 109, 0.2));
`

export { Button }
