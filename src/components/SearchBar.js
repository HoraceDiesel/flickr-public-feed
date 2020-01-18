import React, { useEffect } from 'react'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import jsonp from 'browser-jsonp'

import { API_ROOT } from '../config/constants'
import { message } from '../config/messages'

const SearchBar = ({ updateFeed, setError, value, setValue }) => {
  const handleInputChange = (event) => {
    setValue(event.target.value)
  }

  window.jsonFlickrFeed = (data) => {
    updateFeed(data.items || [])
  }

  useEffect(() => {
    if (!!value) {
      const url = `${API_ROOT}/photos_public.gne`

      jsonp({
        url: url,
        data: {
          tags: value,
          format: 'json'
        },
        callbackFunc: 'jsonFlickrFeed',
        callbackName: 'jsonFlickrFeed',
        success: (data) => {
          updateFeed(data.items || [])
        },
        error: (err) => {
          setError(err)
        },
      })
    }
  }, [value])

  return (
    <InputGroup className={'mb-3'}>
      <FormControl
        value={value}
        onChange={handleInputChange}
        placeholder={message.searchBar.placeholderLabel}
        aria-label={message.searchBar.placeholderLabel}
      />
    </InputGroup>
  )
}

export default SearchBar