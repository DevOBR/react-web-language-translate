import {
  ALLOWED_LANGUAGES,
  AUTO_LANGUAGE,
  ACTIONTYPE_LANGUAGE,
  ACTIONTYPE_LANGUAGE_TEXT,
  ACTIONTYPEEXTENDED
} from './consts'

export type ActionTypeLanguage = keyof typeof ACTIONTYPE_LANGUAGE
export type ActionTypeLanguageText = keyof typeof ACTIONTYPE_LANGUAGE_TEXT
export type ExtendedActionType = keyof typeof ACTIONTYPEEXTENDED
export type Language = keyof typeof ALLOWED_LANGUAGES
export type AutoLanguage = typeof AUTO_LANGUAGE
export type FromLanguage = AutoLanguage | Language

export interface iState {
  fromLanguage: FromLanguage
  toLanguage: Language
  toText: string
  fromText: string
  loading: boolean
}

export type Action =
  | { type: ActionTypeLanguage; payload: FromLanguage }
  | { type: ActionTypeLanguageText; payload: string }
  | { type: ExtendedActionType }

export interface ISelectLanguage<T, Type extends string> {
  type: Type
  selectedLanguage: FromLanguage
  realTranslation?: string
  onChange: (value: T) => void
}

export type SelectProps =
  | ISelectLanguage<Language, 'from'>
  | ISelectLanguage<Language, 'to'>

interface ITextArea<Type extends string> {
  type: Type
  loading: boolean
  textValue: string
  onChange?: (event: string) => void
}

export type TextAreaProps = ITextArea<'from'> | ITextArea<'to'>
