import React from 'react'
import ReactWordCloud from 'react-d3-cloud'

const fontSizeMapper = word => Math.log2(word.value) * 20
const rotate = word => word.value % 360

const WordCloud = ({ wordCount }) => {
  return (
    <ReactWordCloud
      data={wordCount}
      fontSizeMapper={fontSizeMapper}
      rotate={rotate}
    />
  )
}

export default WordCloud
