import React from 'react'
import Card from 'react-bootstrap/Card'

import { truncate, scrollToTop, getAuthorName } from '../utils'
import { message } from '../config/messages'

const FeedCard = ({ data = {
  author: message.unknownLabel,
  date_taken: message.unknownLabel,
  link: message.unknownLabel,
  tags: message.unknownLabel,
  media: { m: '#' },
  title: message.unknownLabel,
}, setInputValue }) => {
  const {
    author,
    date_taken,
    link,
    tags,
    media: { m },
    title,
  } = data

  const handleOpenFeed = () => {
    window.open(link, '_blank')
  }

  const handleClickTag = (evt) => {
    scrollToTop()
    setInputValue(evt.currentTarget.innerHTML.trim())
  }

  return (
    <Card>
      <div onClick={handleOpenFeed} className={'my-hover-cursor'}>
        <Card.Img variant="top" src={m} alt={title} />
        <Card.Body>
          <Card.Title>{truncate(title)}</Card.Title>
          <Card.Text className={'mb-0'}>by {getAuthorName(author)}</Card.Text>
          <small className="text-muted">on {date_taken}</small>
        </Card.Body>
      </div>
      <Card.Footer>
        <small>
          Tags:
          {
            tags.split(' ').map((tag, i) => (
              <span key={i} onClick={handleClickTag} className={'text-info my-hover-cursor'}>{tag} </span>
            ))
          }
        </small>
      </Card.Footer>
    </Card>
  )
}

export default FeedCard