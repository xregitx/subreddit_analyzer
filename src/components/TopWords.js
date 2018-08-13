import React from 'react'
import PropTypes from 'prop-types'

const TOP_WORDS_LIMIT = 20
const TopWords = ({ topwords }) => {
  const res = []

  for (let i = 0; i < TOP_WORDS_LIMIT && i < topwords.length; i++) {
    res.push(<li>"{topwords[i].text}" appears {topwords[i].value} times</li>)
  }
  return (
    <ul>
      {res}
    </ul>

  )
}

TopWords.propTypes = {
  topwords: PropTypes.array.isRequired
}

export default TopWords
