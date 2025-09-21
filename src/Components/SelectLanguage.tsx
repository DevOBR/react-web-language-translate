import { Form } from 'react-bootstrap'
import { ALLOWED_LANGUAGES } from '../consts'
import { type SelectProps } from '../types.d'
import { TYPE_TEXT } from '../consts'
import { getLanguageSelector } from '../utility'
import type { ChangeEvent } from 'react'

export function SelectLanguage({ type, onChange, language }: SelectProps) {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(getLanguageSelector(event.target.value))
  }

  return (
    <Form.Select
      aria-label='Default select example'
      style={{ fontSize: '10pt', color: 'grey' }}
      value={language}
      onChange={handleChange}
    >
      {type === TYPE_TEXT.FROM ? (
        <option value='auto'>Detect Language</option>
      ) : null}
      {Object.entries(ALLOWED_LANGUAGES).map(([key, value]) => (
        <option key={key} value={key}>
          {value}
        </option>
      ))}
    </Form.Select>
  )
}
