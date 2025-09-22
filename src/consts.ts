export const ALLOWED_LANGUAGES = {
  es: 'Spanish',
  en: 'English',
  de: 'Deutsch'
} as const

export const AUTO_LANGUAGE = 'auto'

export const ACTIONTYPE_LANGUAGE = {
  SET_FROM_LANGUAGE: 'SET_FROM_LANGUAGE',
  SET_TO_LANGUAGE: 'SET_TO_LANGUAGE'
} as const

export const ACTIONTYPE_LANGUAGE_TEXT = {
  SET_FROM_TEXT: 'SET_FROM_TEXT',
  SET_TO_TEXT: 'SET_TO_TEXT'
} as const

export const ACTIONTYPEEXTENDED = {
  EXCHANGE_LANGUAGE: 'EXCHANGE_LANGUAGE'
} as const

export const TYPE_TEXT = {
  FROM: 'from',
  TO: 'to'
} as const
