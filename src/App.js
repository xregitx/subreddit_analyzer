import React, { Component } from 'react'
import './index.css'
import { Input } from 'antd'
import 'antd/dist/antd.css'

const Search = Input.Search

class App extends Component {


  render() {
    return (
      <div>
        <center>
        <Search
          placeholder="input search text"
          style={{ width: 500 }}
          onSearch={value => console.log(value)}
          size="large"
          enterButton
        />
        </center>
      </div>
    )
  }
}

export default App
