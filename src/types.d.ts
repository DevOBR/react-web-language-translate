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

export type SelectProps =
  | {
      type: 'from'
      onChange: (value: FromLanguage) => void
      language: FromLanguage
    }
  | {
      type: 'to'
      onChange: (value: Language) => void
      language: Language
    }

export type TextAreaProps =
  | {
      type: 'from'
      loading: boolean
      onChange: (text: string) => void
    }
  | {
      type: 'to'
      loading: boolean
      onChange: (text: string) => void
    }
