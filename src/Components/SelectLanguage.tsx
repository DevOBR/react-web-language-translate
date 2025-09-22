import './SelectLanguage.css'
import { Form } from 'react-bootstrap'
import { ALLOWED_LANGUAGES } from '../consts'
import { TYPE_TEXT } from '../consts'
import { getLanguageSelector } from '../utility'
import { type SelectProps } from '../types.d'
import { type ChangeEvent } from 'react'

export function SelectLanguage({
  type,
  onChange,
  selectedLanguage,
  realTranslation
}: SelectProps) {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(getLanguageSelector(event.target.value))
  }
  const isFromLanguage = type === TYPE_TEXT.FROM

  return (
    <>
      <Form.Select
        aria-label='Default select example'
        className='oz-select'
        value={`${selectedLanguage}`}
        onChange={handleChange}
      >
        {isFromLanguage && (
          <option value='auto'>
            {realTranslation && `${realTranslation} -`} Detect Language
          </option>
        )}
        {Object.entries(ALLOWED_LANGUAGES).map(([key, value]) => (
          <option key={key} value={key}>
            {value}
          </option>
        ))}
      </Form.Select>
    </>
  )
}
