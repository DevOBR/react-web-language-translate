import { type Language, type FromLanguage } from './types.d'

export const getLanguageSelector = <T extends FromLanguage | Language>(
  value: string
) => value as T
