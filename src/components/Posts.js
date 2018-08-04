import React, { Component } from 'react'
import PropTypes from 'prop-types'
import word_list from 'word-list'
import connect from 'react-redux/es/connect/connect'

class Posts extends Component {

  constructor(props) {
    super(props)
    this.state = {
      words: {}


    }
  }

  componentDidUpdate() {
    const { posts } = this.props
    let list = posts.map((post) => post.title)
    let temp = {}

    for (let i = 0; i < list.length; i++) {
      let words = list[i].split(' ')
      words.replace
      for (let j = 0; j < words.length; j++) {
        let lc =words[j].toLowerCase()
        if (temp[lc] == null)
          temp[lc] = 1
        else
          temp[lc] =temp[words[j]]+ 1
      }
    }


    console.log(temp)
    console.log('cwr')
  }


  render() {
    const { posts } = this.props
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
  const { selectedSubreddit, postsBySubreddit } = state
  const {
    items: posts
  } = postsBySubreddit[selectedSubreddit] || {
    isFetching: true,
    items: []
  }

  return {
    posts
  }
}
export default connect(mapStateToProps)(Posts)
