import styled from 'styled-components'
import * as Checkbox from '@radix-ui/react-checkbox'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  max-width: 400px;
  width: 100%;
`

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: ${(props) => props.theme.font.bold};
  color: ${(props) => props.theme['gray-800']};
  margin-bottom: 2rem;
`

export const ContentForm = styled.form`
  width: 100%;
`

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`

export const LoginDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;

  label {
    font-size: 1rem;
    font-weight: ${(props) => props.theme.font['semi-bold']};
    color: ${(props) => props.theme['gray-800']};
  }
`

export const InputDiv = styled.div`
  width: 100%;
  height: 48px;
  padding: 0 0.5rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  border: 1px solid ${(props) => props.theme['gray-700']};
  border-radius: 4px;
  gap: 0.75rem;

  &:focus-within {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2);
  }

  input {
    height: 48px;
    flex: 1;
    font-size: 1rem;
    color: ${(props) => props.theme['gray-800']};
    font-weight: ${(props) => props.theme.font.regular};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${(props) => props.theme['gray-700']};
    }
  }
`

export const PasswordDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;

  label {
    font-size: 1rem;
    font-weight: ${(props) => props.theme.font['semi-bold']};
    color: ${(props) => props.theme['gray-800']};
  }
`

export const Remember = styled.div`
  margin: 2rem 0 1rem 0;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  gap: 0.75rem;

  label {
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-800']};
  }
`

export const Root = styled(Checkbox.Root)`
  width: 25px;
  height: 25px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 4px;
  border: none;
  background: ${(props) => props.theme['gray-200']};

  cursor: pointer;

  &:focus {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2);
  }
`

export const Indicator = styled(Checkbox.Indicator)`
  color: ${(props) => props.theme['dark-green']};
  font-weight: ${(props) => props.theme.font.bold};
`

export const LinkText = styled(Link)`
  color: ${(props) => props.theme['gray-700']};
  font-weight: ${(props) => props.theme.font['semi-bold']};
  font-size: 0.75rem;

  &:focus {
    color: ${(props) => props.theme['gray-800']};
  }
`

export const Informations = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Button = styled.button`
  width: 100%;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 2rem;

  border: none;
  border-radius: 4px;
  background: ${(props) => props.theme['dark-green']};
  color: ${(props) => props.theme['gray-100']};
  font-size: 0.875rem;
  font-weight: ${(props) => props.theme.font['semi-bold']};

  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['light-green']};
  }

  &:focus {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2);
    background: ${(props) => props.theme['light-green']};
  }
`
