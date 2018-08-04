import React, {Component} from 'react'
import PropTypes from 'prop-types'
import connect from 'react-redux/es/connect/connect'

class Posts extends Component {

    constructor(props) {
        super(props)
        this.state = {
            words: {}


        }
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

    componentDidUpdate() {
        const {posts} = this.props
        let titles = posts.map((post) => post.selftext)


        let temp = {}
        Posts.countWords(temp,titles)



        for (const key of Object.keys(temp)) {
            console.log(key, temp[key]);
        }
        console.log('cwr')
    }


    render() {
        const {posts} = this.props
        // console.log('rs')
        return (
            <ul>
                {posts.map((post, i) => <li key={i}>{post.title}</li>)}
            </ul>
        )
    }

    static propTypes = {
        posts: PropTypes.array.isRequired
    }
}

const mapStateToProps = state => {
    const {selectedSubreddit, postsBySubreddit} = state
    const {
        items: posts
    } = postsBySubreddit[selectedSubreddit] || {
        items: []
    }

    return {
        posts
    }
}
export default connect(mapStateToProps)(Posts)
