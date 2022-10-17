import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 2rem;
  color: ${(props) => props.theme['gray-800']};
  font-weight: ${(props) => props.theme.font.bold};
`

export const LoginDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: flex-start;

  gap: 12px;
  margin: 16px 0 32px 0;
`

export const Login = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 3.875rem;

  background: ${(props) => props.theme['dark-green']};
  text-decoration: none;
  border-radius: 4px;

  font-size: 1.25rem;
  font-weight: ${(props) => props.theme.font.regular};
  color: ${(props) => props.theme['gray-100']};

  transition: background-color 0.2s;

  &:hover {
    background: ${(props) => props.theme['light-green']};
  }

  &:focus {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.5);
  }
`

export const CreateAccount = styled(Link)`
  color: ${(props) => props.theme['gray-700']};
  text-decoration-color: ${(props) => props.theme['gray-700']};
  font-size: 0.75rem;
  border: 1px solid transparent;
  border-radius: 4px;

  &:focus {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.5);
  }
`

export const EnterCodeDiv = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: center;

  gap: 4px;
`

export const TextEnterCode = styled.label`
  color: ${(props) => props.theme['gray-800']};
  font-weight: ${(props) => props.theme.font['semi-bold']};
  font-size: 1.25rem;
`

export const DisplayInputAndButton = styled.div`
  display: flex;
  width: 100%;
  gap: 0.25rem;
`

export const InputCode = styled.input`
  flex: 1;
  height: 62px;

  border-radius: 8px;
  background: transparent;

  text-align: center;
  font-size: 1.25rem;
  font-weight: ${(props) => props.theme.font['semi-bold']};
  color: ${(props) => props.theme['gray-700']};

  border: 3px solid ${(props) => props.theme['dark-green']};

  &::placeholder {
    color: ${(props) => props.theme['gray-200']};
  }

  &:focus {
    border: 3px solid ${(props) => props.theme['light-green']};
  }
`

export const Button = styled.button`
  background: ${(props) => props.theme['dark-green']};
  color: ${(props) => props.theme['gray-100']};
  font-size: 1rem;
  font-weight: ${(props) => props.theme.font.medium};

  border: none;
  border-radius: 8px;

  cursor: pointer;
  padding: 0 1rem;
`
