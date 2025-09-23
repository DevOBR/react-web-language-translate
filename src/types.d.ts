import {
  ALLOWED_LANGUAGES,
  AUTO_LANGUAGE,
  ACTIONTYPE_LANGUAGE,
  ACTIONTYPE_LANGUAGE_TEXT,
  ACTIONTYPEEXTENDED,
  TYPE_TEXT,
  NONE_LANGUAGE
} from './consts'

export type ActionTypeLanguage = keyof typeof ACTIONTYPE_LANGUAGE
export type ActionTypeLanguageText = keyof typeof ACTIONTYPE_LANGUAGE_TEXT
export type ExtendedActionType = keyof typeof ACTIONTYPEEXTENDED
export type AutoLanguage = typeof AUTO_LANGUAGE
export type NoneLanguage = typeof NONE_LANGUAGE
export type AllowedLanguages = keyof typeof ALLOWED_LANGUAGES
export type AllowedLanguagesName =
  | (typeof ALLOWED_LANGUAGES)[keyof typeof ALLOWED_LANGUAGES]
  | NoneLanguage
export type Language = AutoLanguage | AllowedLanguages | NoneLanguage
export type FROM = typeof TYPE_TEXT.FROM
export type TO = typeof TYPE_TEXT.TO

export interface IState {
  fromLanguage: Language
  toLanguage: Language
  toText: string
  fromText: string
  loading: boolean
  disabled: boolean
}

export type Action =
  | { type: ActionTypeLanguage; payload: Language }
  | { type: ActionTypeLanguageText; payload: string }
  | { type: ExtendedActionType }

export interface ISelectLanguage<T, Type extends string> {
  type: Type
  selectedLanguage: Language
  realTranslation?: AllowedLanguagesName
  onChange: (value: T) => void
}

export type SelectProps =
  | ISelectLanguage<Language, FROM>
  | ISelectLanguage<Language, TO>

interface ITextArea<Type extends string> {
  type: Type
  loading: boolean
  textValue: string
  onChange?: (event: string) => void
}

export type TextAreaProps = ITextArea<FROM> | ITextArea<TO>

import type { AllowedLanguages, Language } from '../types'

export type TranslatePayload = {
  fromText: string
  fromLanguage: Language
  toLanguage: Language
}

export type TranslateResponse = {
  from: { text: string; lang: AllowedLanguages | NoneLanguage }
  to: { text: string; lang: AllowedLanguages | NoneLanguage }
  success: boolean
  status: 'translated' | 'error'
}
