import './TextArea.css'
import { Form } from 'react-bootstrap'
import { type TextAreaProps } from '../types.d'
import { TYPE_TEXT } from '../consts'

export function TextArea({ type, loading }: TextAreaProps) {
  const placeholder = type === TYPE_TEXT.FROM ? 'Enter Text' : 'Translation'
  return (
    <Form.Control
      className={
        type === TYPE_TEXT.FROM ? 'text-area from-text' : 'text-area to-text'
      }
      as='textarea'
      placeholder={
        loading && type === TYPE_TEXT.TO ? 'Translating...' : placeholder
      }
    />
  )
}
