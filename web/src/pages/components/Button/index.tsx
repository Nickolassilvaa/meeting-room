import { HTMLProps } from 'react'
import { Button } from './styles'

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  text?: string | 'Default'
  height: 'lg' | 'default'
  fontSize: 'lg' | 'default'
}

export function DefaultButton({ text, height, fontSize }: ButtonProps) {
  return (
    <Button height={height} fontSize={fontSize}>
      {text}
    </Button>
  )
}
