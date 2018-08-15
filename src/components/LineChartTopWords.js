import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts'
import { shuffle } from 'lodash/collection'

const TOP_WORDS_LIMIT = 20

const LineChartTopWords = ({ wordCountData }) => {
  let res = []

  for (let i = 0; i < TOP_WORDS_LIMIT && i < wordCountData.length; i++) {
    let obj = { name: wordCountData[i].text, appear: wordCountData[i].value }
    res.push(obj)
  }
  res = shuffle(res)

  return (
    <BarChart
      width={1400}
      height={300}
      data={res}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="appear" fill="#8884d8" />
    </BarChart>
  )
}

export default LineChartTopWords
