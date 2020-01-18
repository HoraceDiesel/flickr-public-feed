import React, { useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'

import SearchBar from './components/SearchBar'
import FeedList from './components/FeedList'

const App = () => {
  const [ feeds, setFeeds ] = useState([])

  return (
    <Container>
      <header className="d-flex justify-content-center">
        <h1>Flickr Public Feed</h1>
      </header>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <SearchBar updateFeeds={setFeeds} />
        </Col>
      </Row>
      <FeedList feeds={feeds} />
    </Container>
  );
}

export default App
