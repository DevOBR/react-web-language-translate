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
import type { AllowedLanguages, AllowedLanguagesName } from './types'

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

  const douncedVal = useDebounce(fromText)
  const [realTranslation, setRealTranslation] = useState(
    initialAllowedLanguageName
  )

  useEffect(() => {
    if (douncedVal === '') {
      setRealTranslation(initialAllowedLanguageName)
      return
    }
    const response: {
      from: { text: string; lang: AllowedLanguages }
      to: { text: string; lang: AllowedLanguages }
      success: boolean
      status: 'translated' | 'error'
    } = {
      from: {
        text: 'hola',
        lang: 'es'
      },
      to: {
        text: 'hello',
        lang: 'en'
      },
      success: true,
      status: 'translated'
    }

    setRealTranslation(ALLOWED_LANGUAGES[response.from.lang])
    setFromText(response.from.text)
    setToLanguage(response.to.lang)
    setToText(response.to.text)
  }, [douncedVal])

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
