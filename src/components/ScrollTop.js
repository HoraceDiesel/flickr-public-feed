import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'

import { scrollToTop } from '../utils'

export default () => {
  return (
    <button className={'my-scroll-top-container'} onClick={scrollToTop}>
      <FontAwesomeIcon icon={faAngleDoubleUp} className={'my-scroll-top-icon'} />
      <small>Back To Top</small>
    </button>
  )
}