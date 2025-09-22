import './SelectLanguage.css'
import { Form } from 'react-bootstrap'
import {
  ALLOWED_LANGUAGES,
  AUTO_LANGUAGE,
  DETECTED_LANGUAGE,
  NONE_LANGUAGE
} from '../consts'
import { TYPE_TEXT } from '../consts'
import { type Language, type SelectProps } from '../types.d'
import { type ChangeEvent } from 'react'

export function SelectLanguage({
  type,
  onChange,
  selectedLanguage,
  realTranslation
}: SelectProps) {
  const isFromLanguage = type === TYPE_TEXT.FROM
  const isDefaultLanguage =
    !!realTranslation && realTranslation === realTranslation

  const createSelectHandler = <T extends string>(
    onSelectChange: (value: T) => void
  ) => {
    return (event: ChangeEvent<HTMLSelectElement>) =>
      onSelectChange(event.target.value as T)
  }
  const handleChange2 = createSelectHandler<Language>((lang) => onChange(lang))

  const detectLanguage = DETECTED_LANGUAGE
  const detectedLanguage =
    isDefaultLanguage &&
    selectedLanguage === AUTO_LANGUAGE &&
    realTranslation !== NONE_LANGUAGE
      ? `${realTranslation} - ${detectLanguage}`
      : detectLanguage

  return (
    <>
      <Form.Select
        aria-label='Default select example'
        className='oz-select'
        value={`${selectedLanguage}`}
        onChange={handleChange2}
      >
        {isFromLanguage && <option value='auto'>{detectedLanguage}</option>}
        {Object.entries(ALLOWED_LANGUAGES).map(([key, value]) => (
          <option key={key} value={key}>
            {value}
          </option>
        ))}
      </Form.Select>
    </>
  )
}
