import React from 'react'
import { render } from '@testing-library/react'
import TestCom from './components/test'

test('renders learn react link', () => {
  const { getByText } = render(<TestCom />)
  const linkElement = getByText(/react/i)
  expect(linkElement).toBeInTheDocument()
})
