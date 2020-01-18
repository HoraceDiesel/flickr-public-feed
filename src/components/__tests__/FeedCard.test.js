import React from 'react'
import { render } from '@testing-library/react'
import FeedCard from '../FeedCard'

import { message } from '../../config/messages'

const mockData = {
  author: 'James Valentine',
  date_taken: '2020-01-17T01:31:03-08:00',
  link: 'testlink',
  tags: 'display coke',
  media: { m: 'mockMedia' },
  title: 'Mock Title',
}

describe('FeedCard', () => {
  it('renders with default props', async () => {
    const { getAllByText } = render(<FeedCard />)
    const plainTextElements = await getAllByText(message.unknownLabel)
    const defaultAuthorElement = await getAllByText(`by ${message.unknownLabel}`)
    expect(plainTextElements).toHaveLength(2)
    expect(defaultAuthorElement).toHaveLength(1)
  })

  it('renders with expected props', async () => {
    const { getAllByText } = render(<FeedCard data={mockData} />)
    const dateTakenElement = await getAllByText('on 2020-01-17T01:31:03-08:00')
    const authorElement = await getAllByText(`by ${mockData.author}`)
    expect(dateTakenElement.length).toEqual(1)
    expect(authorElement.length).toEqual(1)
  })
})
