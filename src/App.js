import React, { Component } from 'react'
import './index.css'
import PageInput from './components/PageInput'
import Posts from './components/Posts'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { isFetching, posts } = this.props
    return (
      <React.Fragment>
        <PageInput />
        {!isFetching && <Posts posts={posts} />}
      </React.Fragment>
    )
  }
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    posts: PropTypes.array.isRequired
  }
}

const mapStateToProps = state => {
  const { selectedSubreddit, postsBySubreddit } = state
  const { isFetching, items: posts } = postsBySubreddit[selectedSubreddit] || {
    items: [],
    isFetching: true
  }

  return {
    posts,
    isFetching
  }
}
export default connect(mapStateToProps)(App)
