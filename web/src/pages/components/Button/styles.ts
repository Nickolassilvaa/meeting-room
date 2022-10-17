import styled from 'styled-components'

interface Props {
  height: string
  fontSize: string
}

export const Button = styled.button<Props>`
  max-width: 400px;
  width: 100%;
  height: ${(props) => (props.height === 'lg' ? '62px' : '48px')};
  cursor: pointer;
  border: none;
  border-radius: 4px;

  background: ${(props) => props.theme['dark-green']};
  color: ${(props) => props.theme['gray-100']};

  transition: background-color 0.2s;

  &:hover {
    background: ${(props) => props.theme['light-green']};
  }
`
