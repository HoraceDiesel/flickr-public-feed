import React from 'react'
import Alert from 'react-bootstrap/Alert'
import { CardColumns } from 'react-bootstrap'

import FeedCard from './FeedCard'

const FeedList = ({ feeds, setInputValue }) => {
  if (feeds.length === 0) {
    return (
      <Alert variant={'danger'}>
        <h3>Oops, it seems there is no matching images found!</h3>
        <p>Please update the search terms...</p>
      </Alert>
    )
  }

  return (
    <CardColumns>
      {
        feeds.map((feed, i) => (
          <FeedCard key={i} data={feed} setInputValue={setInputValue} />
        ))
      }
    </CardColumns>
  )
}

export default FeedList