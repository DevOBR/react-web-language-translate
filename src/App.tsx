import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Stack } from 'react-bootstrap'
import { SelectLanguage } from './Components/SelectLanguage'
import { ExchangeIcon } from './SvgIcons/ExchangeIcon'
import { TextArea } from './Components/TextArea'
import { useTranslator } from './Hooks/useTranslator'
import { TYPE_TEXT } from './consts'
function App() {
  const {
    loading,
    fromLanguage,
    toLanguage,
    setFromLanguage,
    setToLanguage,
    setExchangeLanguage
  } = useTranslator()

  const handleClick = () => {
    setExchangeLanguage()
  }

  return (
    <Container fluid>
      <Row>
        <h1>My transaltor</h1>
      </Row>
      <Row>
        <Col>
          <Stack gap={2}>
            <SelectLanguage
              type={TYPE_TEXT.FROM}
              language={fromLanguage}
              onChange={setFromLanguage}
            />
            <TextArea loading={loading} type={TYPE_TEXT.FROM} />
          </Stack>
        </Col>
        <Col xs='auto'>
          <ExchangeIcon onClick={handleClick} />
        </Col>
        <Col>
          <Stack gap={2}>
            <SelectLanguage
              type={TYPE_TEXT.TO}
              language={toLanguage}
              onChange={setToLanguage}
            />
            <TextArea loading={loading} type={TYPE_TEXT.TO} />
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default App
