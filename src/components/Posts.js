import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import connect from 'react-redux/es/connect/connect'
import WordCloud from "./WordCloud";
import _ from "lodash"
import TopWords from './TopWords'
import LineChartTopWords from './LineChartTopWords'
import LineChartLinks from './LineChartLinks'
import {countWords} from '../Util'


const MAX_WORDS = 150
class Posts extends PureComponent {

    constructor(props) {
        super(props)

    }




  render() {



        const {posts} = this.props
        let titles = posts.map((post) => post.title)

        // let selftext = posts.map((post) => post.selftext)
        // Posts.countWords(temp, selftext)

        let wordCount = []

        let temp = {}
        countWords(temp, titles)



        for (const key of Object.keys(temp)) {
            // console.log(key, temp[key])
            let obj = {text: key, value: temp[key]}
            wordCount.push(obj)
        }

        //remove white-space in the array.
        wordCount = wordCount.filter( item => item.text !== "")

        let sortedWordCount = _.sortBy(wordCount, 'value').reverse()
        // console.log(sortedWordCount)
        let wordCountData = []
        for (let i = 0; i < MAX_WORDS && i < wordCount.length; i++) {
            wordCountData.push(sortedWordCount[i])
        }

        // console.log(wordCount)


        //   this.state.wordsCount = temp;

        // console.log('rs')
        return (
            <ul>
                <WordCloud wordCount={wordCountData}/>
                {/*<TopWords topwords={wordCountData}/>*/}
                <LineChartTopWords wordCountData = {wordCountData}/>
                <LineChartLinks posts = {posts}/>


            </ul>
        )
    }

    static propTypes = {
        posts: PropTypes.array.isRequired
    }
}


export default Posts
