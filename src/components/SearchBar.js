import React, { useState, useEffect } from 'react'
import jsonp from 'browser-jsonp'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBar = ({ updateFeeds }) => {
  const [value, setValue] = useState('')

  const handleInputChange = (event) => {
    const value = event.target.value
    setValue(value)
    if (!!value) {
      fetchFeedsByTags(value)
    }
  }

  const fetchFeedsByTags = (tags) => {
    const jsonFlickrFeed = (json) => {
      console.log('dsadsa')
    }

    // const callback = (err, data) => {
    //   if (err) {
    //     console.log('Error: ', err)
    //   } else {

    //     console.log(data)
    //   }
    // }

    const url = 'https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?'

    // const opts = {
    //   param: `tags=${tags}&format=json`,
    // }

    jsonp({
      url: url,
      data: {
        tags: tags,
        format: 'json'
      },
      success: (json) => { console.log('done') },
      error: (err) => { console.log('Error: ', err) },
      complete: () => { console.log('request sent') },
      callbackName: 'jsonFlickrFeed',
    })
    // jsonp(url, opts, jsonFlickrFeed)
  }

  return (
    <InputGroup className="mb-3">
      <FormControl
        value={value}
        onChange={handleInputChange}
        placeholder="Search for public feeds by tags"
        aria-label="Search for public feeds by tags"
        aria-describedby="basic-addon2"
      />
      <InputGroup.Append>
        <Button variant="outline-secondary"><FontAwesomeIcon icon={faSearch} /> Search</Button>
      </InputGroup.Append>
    </InputGroup>
  )
}

export default SearchBar