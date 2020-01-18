import React, { useState, useEffect } from 'react'
import { Container, Col, Row } from 'react-bootstrap'

import FeedList from './components/FeedList'
import ScrollTop from './components/ScrollTop'
import SearchBar from './components/SearchBar'
import { OFFSET_Y_SHOW_SCROLL_TOP } from './config/constants'
import { message } from './config/messages'

import './styles/App.css'

const App = () => {
  const [ feeds, setFeeds ] = useState([])
  const [ error, setError ] = useState(null)
  const [ shouldEngage, setShouldEngage ] = useState(true)
  const [inputValue, setInputValue] = useState('')
  const [ shouldShowScrollTop, setShouldShowScrollTop ] = useState(false)

  const updateFeed = (feeds) => {
    setError(null)
    setFeeds(feeds)
    setShouldEngage(!feeds)
  }

  useEffect(() => {
    const windowScrollListener = () => {
      setShouldShowScrollTop(window.scrollY > OFFSET_Y_SHOW_SCROLL_TOP)
    }

    window.addEventListener('scroll', windowScrollListener)

    return () => window.removeEventListener('scroll', windowScrollListener)
  })

  return (
    <Container>
      <header className={'d-flex justify-content-center'}>
        <h1 className={'my-4'}>{message.appNameLabel}</h1>
      </header>
      <Row className={'my-4'}>
        <Col md={{ span: 6, offset: 3 }}>
          <SearchBar
            value={inputValue}
            updateFeed={updateFeed}
            setError={setError}
            setValue={setInputValue}
          />
        </Col>
      </Row>
      <Row>
        <Col>
        {
          shouldEngage ?
            <p className={'d-flex justify-content-center'}>{message.engageLabel}</p> :
            error ?
              <Errors /> :
              <FeedList feeds={feeds} setInputValue={setInputValue} />
        }
        </Col>
      </Row>
      {shouldShowScrollTop && <ScrollTop />}
    </Container>
  );
}

const Errors = () => {
  return <p>Errors</p>
}

export default App
