import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import WordCloud from './WordCloud'
import _ from 'lodash'
import TopWords from './TopWords'
import LineChartTopWords from './LineChartTopWords'
import LineChartLinks from './LineChartLinks'
import { countWords } from '../Util'
import { Tabs } from 'antd'
const TabPane = Tabs.TabPane

function callback(key) {
  console.log(key)
}

const MAX_WORDS = 150
class Posts extends PureComponent {

  render() {
    const { posts } = this.props
    let titles = posts.map(post => post.title)

    let wordCount = []

    let temp = {}
    countWords(temp, titles)

    for (const key of Object.keys(temp)) {
      // console.log(key, temp[key])
      let obj = { text: key, value: temp[key] }
      wordCount.push(obj)
    }

    //remove white-space in the array.
    wordCount = wordCount.filter(item => item.text !== '')

    let sortedWordCount = _.sortBy(wordCount, 'value').reverse()

    let wordCountData = []
    for (let i = 0; i < MAX_WORDS && i < wordCount.length; i++) {
      wordCountData.push(sortedWordCount[i])
    }

    return (
      <ul>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Word Cloud" key="1">
            <WordCloud wordCount={wordCountData} />
          </TabPane>
          <TabPane tab="Top Words Line Chart" key="2">
            <LineChartTopWords wordCountData={wordCountData} />
          </TabPane>
          <TabPane tab="Reference Links Line Chart" key="3">
            <LineChartLinks posts={posts} />
          </TabPane>
        </Tabs>
      </ul>
    )
  }

  static propTypes = {
    posts: PropTypes.array.isRequired
  }
}

export default Posts
