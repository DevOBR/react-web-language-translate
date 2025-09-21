import { type Language, type FromLanguage } from './types.d'

export function getLanguageSelector<T extends FromLanguage | Language>(
  value: string
) {
  return value as T
}
