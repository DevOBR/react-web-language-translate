import { useReducer } from 'react'
import { translatorReducer } from '../Reducers/translatorReducer'
import { type Language, type IState } from '../types.d'
import {
  ACTIONTYPE_LANGUAGE,
  ACTIONTYPE_LANGUAGE_TEXT,
  ACTIONTYPEEXTENDED
} from '../consts'

const getDefaultLanguage = <T extends Language>(lang: string) => lang as T

const fromLanguage: Language = 'auto'
const toLanguage: Language = getDefaultLanguage<Language>(
  new Intl.Locale(navigator.languages[0] ?? 'es').language
)
const initialState: IState = {
  fromLanguage,
  toLanguage,
  toText: '',
  fromText: '',
  loading: false,
  disabled: false
}

export function useTranslator() {
  const [
    { fromLanguage, toLanguage, toText, fromText, loading, disabled },
    dispatch
  ] = useReducer(translatorReducer, initialState)

  const setFromLanguage = (payload: Language) =>
    dispatch({
      type: ACTIONTYPE_LANGUAGE.SET_FROM_LANGUAGE,
      payload
    })

  const setToLanguage = (payload: Language) =>
    dispatch({
      type: ACTIONTYPE_LANGUAGE.SET_TO_LANGUAGE,
      payload
    })

  const setFromText = (payload: string) =>
    dispatch({
      type: ACTIONTYPE_LANGUAGE_TEXT.SET_FROM_TEXT,
      payload
    })

  const setToText = (payload: string) =>
    dispatch({
      type: ACTIONTYPE_LANGUAGE_TEXT.SET_TO_TEXT,
      payload
    })

  const setExchangeLanguage = () =>
    dispatch({
      type: ACTIONTYPEEXTENDED.EXCHANGE_LANGUAGE
    })

  return {
    fromLanguage,
    toLanguage,
    toText,
    fromText,
    loading,
    disabled,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setToText,
    setExchangeLanguage
  }
}
