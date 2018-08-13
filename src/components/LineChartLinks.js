import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import { shuffle } from 'lodash/collection'
import {countDomains, convertToRechartArray} from '../Util'


const LINKS_LIMIT = 10

const LineChartLinks = ({posts}) => {

  let domains = posts.map((post) => post.domain)

  let temp = countDomains(domains)
  temp = convertToRechartArray(temp,domains)


  let res = []
  for (let i = 0; i < LINKS_LIMIT && i < temp.length; i++) {

    res.push(temp[i])
  }

  for (let i = 0; i < res.length; i++) {
    if(res[i].domain.toString().startsWith("self."))
      res[i].domain = 'no link'
  }

  res = shuffle(res)


  return (
    <BarChart width={1900} height={300} data={res}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3"/>
      <XAxis dataKey="domain"/>
      <YAxis/>
      <Tooltip/>
      <Legend/>
      <Bar dataKey="value" fill="#8884d8"/>
    </BarChart>
  )
};

export default LineChartLinks;
