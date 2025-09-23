import { type Action, type IState } from '../types'
import {
  ACTIONTYPE_LANGUAGE,
  ACTIONTYPE_LANGUAGE_TEXT,
  ACTIONTYPEEXTENDED
} from '../consts'

export function translatorReducer(state: IState, action: Action) {
  const { type } = action
  const { fromLanguage, toLanguage, toText } = state

  if (type === ACTIONTYPE_LANGUAGE.SET_FROM_LANGUAGE) {
    const { payload } = action

    const loading =
      payload.toLowerCase() !== fromLanguage.toLowerCase() && payload.length > 0

    if (!loading) return state

    return {
      ...state,
      fromLanguage: payload,
      toText: '',
      loading: loading,
      disabled: payload === toLanguage
    }
  }

  if (type === ACTIONTYPE_LANGUAGE.SET_TO_LANGUAGE) {
    const { payload } = action
    const { toText } = state

    const loading =
      payload !== 'auto' && payload.toLowerCase() !== toLanguage.toLowerCase()

    if (payload === 'auto') return state

    return {
      ...state,
      toLanguage: payload,
      toText: '',
      loading: loading && toText.length > 0,
      disabled: payload === fromLanguage
    }
  }

  if (type === ACTIONTYPE_LANGUAGE_TEXT.SET_FROM_TEXT) {
    const { payload } = action
    const { fromText } = state

    const loading = payload.toLowerCase() !== fromText.toLowerCase()

    if (!loading) return state

    return {
      ...state,
      fromText: payload,
      toText: '',
      loading: loading && payload.length > 0
    }
  }

  if (type === ACTIONTYPE_LANGUAGE_TEXT.SET_TO_TEXT) {
    const { payload } = action
    const { toText } = state
    const loading = toText.toLowerCase() !== payload.toLowerCase()

    if (!loading) return state

    return {
      ...state,
      toText: payload,
      loading: loading && payload.length > 0
    }
  }

  if (type === ACTIONTYPEEXTENDED.EXCHANGE_LANGUAGE) {
    const loading = fromLanguage === 'auto'
    if (loading) return state

    return {
      ...state,
      fromLanguage: toLanguage,
      toLanguage: fromLanguage,
      fromText: toText,
      toText: '',
      loading: !loading
    }
  }

  return state
}
