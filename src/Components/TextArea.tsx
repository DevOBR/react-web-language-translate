import './TextArea.css'
import { Form } from 'react-bootstrap'
import { type TextAreaProps } from '../types.d'
import { TYPE_TEXT } from '../consts'
import type { ChangeEvent } from 'react'

export function TextArea({
  type,
  loading,
  onChange,
  textValue
}: TextAreaProps) {
  const placeholder = type === TYPE_TEXT.FROM ? 'Enter Text' : 'Translation'

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) onChange(event.target.value)
  }

  return (
    <Form.Control
      value={textValue}
      onChange={handleChange}
      className={
        type === TYPE_TEXT.FROM ? 'text-area from-text' : 'text-area to-text'
      }
      as='textarea'
      placeholder={
        loading && type === TYPE_TEXT.TO ? 'Translating...' : placeholder
      }
      disabled={type === TYPE_TEXT.TO}
    />
  )
}
