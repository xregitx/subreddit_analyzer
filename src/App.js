import React, { Component } from 'react'
import './index.css'
import PageInput from './components/PageInput'
import Posts from './components/Posts'
import {connect} from 'react-redux';
import { getRandomSubrredit } from './RandomSubreddit'
import PropTypes from 'prop-types'


class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <PageInput/>
        <Posts />
      </React.Fragment>
    )
  }

}

export default App

