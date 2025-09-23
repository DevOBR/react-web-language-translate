import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Stack } from 'react-bootstrap'
import { SelectLanguage } from './Components/SelectLanguage'
import { TextArea } from './Components/TextArea'
import { ExchangeIcon } from './SvgIcons/ExchangeIcon'
import { useTranslator } from './Hooks/useTranslator'
import { TYPE_TEXT, NONE_LANGUAGE, ALLOWED_LANGUAGES } from './consts'
import { useEffect, useState } from 'react'
import { useDebounce } from './Hooks/useDebounce'
import { TranslateAsync } from './Services/translateService'
import {
  type AllowedLanguages,
  type AllowedLanguagesName,
  type TranslatePayload,
  type TranslateResponse
} from './types'

const initialAllowedLanguageName: AllowedLanguagesName = NONE_LANGUAGE

function App() {
  const {
    disabled,
    loading,
    fromLanguage,
    toLanguage,
    fromText,
    toText,
    setFromLanguage,
    setToLanguage,
    setExchangeLanguage,
    setFromText,
    setToText
  } = useTranslator()

  const douncedVal = useDebounce(fromText, 500)
  const [realTranslation, setRealTranslation] = useState(
    initialAllowedLanguageName
  )

  useEffect(() => {
    if (douncedVal === '') {
      setRealTranslation(initialAllowedLanguageName)
      return
    }

    const getTranslateAsync = async ({
      fromLanguage,
      fromText,
      toLanguage
    }: TranslatePayload) => {
      return await TranslateAsync({ fromLanguage, fromText, toLanguage })
    }

    getTranslateAsync({
      fromText,
      fromLanguage,
      toLanguage
    }).then((response: TranslateResponse) => {
      if (!response.success) return
      setRealTranslation(
        ALLOWED_LANGUAGES[response.from.lang as AllowedLanguages]
      )

      setToLanguage(response.to.lang)
      setToText(response.to.text)
    })
  }, [douncedVal, fromLanguage, toLanguage])

  function handleClick() {
    setExchangeLanguage()
  }

  return (
    <Container fluid>
      <Stack gap={2}>
        <Row>
          <h1>My transaltor</h1>
        </Row>
        <Row>
          <Col>
            <Stack gap={2}>
              <SelectLanguage
                selectedLanguage={fromLanguage}
                realTranslation={realTranslation}
                type={TYPE_TEXT.FROM}
                onChange={setFromLanguage}
              />
              <TextArea
                type={TYPE_TEXT.FROM}
                textValue={fromText}
                loading={loading}
                onChange={setFromText}
              />
            </Stack>
          </Col>
          <Col xs='auto'>
            <ExchangeIcon onClick={handleClick} disabled={disabled} />
          </Col>
          <Col>
            <Stack gap={2}>
              <SelectLanguage
                type={TYPE_TEXT.TO}
                selectedLanguage={toLanguage}
                onChange={setToLanguage}
              />
              <TextArea
                type={TYPE_TEXT.TO}
                textValue={toText}
                loading={loading}
              />
            </Stack>
          </Col>
        </Row>
      </Stack>
    </Container>
  )
}

export default App
