import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import connect from 'react-redux/es/connect/connect'
import WordCloud from "./WordCloud";
import _ from "lodash"
import TopWords from './TopWords'


class Posts extends PureComponent {

    constructor(props) {
        super(props)

    }

    static countWords(count, str) {
        for (let i = 0; i < str.length; i++) {
            let words = str[i].split(' ')
            for (let j = 0; j < words.length; j++) {
                let lc = words[j].toLowerCase()

                lc = lc.replace(/[^\w\s]/gi, '')

                if (count[lc] == null)
                    count[lc] = 1
                else
                    count[lc] += 1
            }
        }
    }


    render() {



        const {posts} = this.props
        let titles = posts.map((post) => post.title)
        let wordCount = []

        let temp = {}
        Posts.countWords(temp, titles)


        for (const key of Object.keys(temp)) {
            // console.log(key, temp[key])
            let obj = {text: key, value: temp[key]}
            wordCount.push(obj)
        }

        let sortedWordCount = _.sortBy(wordCount, 'value').reverse()
        // console.log(sortedWordCount)
        let wordCountData = []
        for (let i = 0; i < 150 && i < wordCount.length; i++) {
            console.log(sortedWordCount[i])
            wordCountData.push(sortedWordCount[i])
        }

        // console.log(wordCount)


        //   this.state.wordsCount = temp;

        // console.log('rs')
        return (
            <ul>
                {/*{posts.map((post, i) => <li key={i}>{post.title}</li>)}*/}
                <WordCloud wordCount={wordCountData}/>
                <TopWords topwords={wordCountData}/>
            </ul>
        )
    }

    static propTypes = {
        posts: PropTypes.array.isRequired
    }
}


export default Posts
