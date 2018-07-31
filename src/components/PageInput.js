import React, {Component} from 'react'
import {Input, Icon} from 'antd'
import 'antd/dist/antd.css'
import {selectSubreddit} from '.././actions/'
import {getRandomSubrredit} from '../RandomSubreddit'

const Search = Input.Search

class PageInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentInput: '',
            getSubredditPlaceholder: getRandomSubrredit()
        }

    }

    componentDidMount() {
        // this.state.getSubredditPlaceholder = getRandomSubrredit()
        this.interval = setInterval(() => {
            this.setState({getSubredditPlaceholder: getRandomSubrredit()})
        }, 2500);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    emitEmpty = () => {
        this.userInput.focus()
        this.setState({currentInput: ''})
    }

    onChangeUserName = e => {
        this.setState({currentInput: e.target.value})
    }

    handleChange = inputReddit => {
        if (inputReddit === '')
            console.log(this.state.getSubredditPlaceholder)
        else
            console.log(inputReddit)
    }

    render() {
        const {currentInput} = this.state
        const suffix = currentInput ? (
            <Icon type="close-circle" onClick={this.emitEmpty}/>
        ) : null
        return (
            <div className="center">
                <Search
                    placeholder={this.state.getSubredditPlaceholder}
                    style={{width: 500}}
                    suffix={suffix}
                    value={currentInput}
                    onSearch={this.handleChange}
                    onChange={this.onChangeUserName}
                    ref={node => (this.userInput = node)}
                    size="large"
                    enterButton="/r/"
                />
            </div>
        )
    }
}

export default PageInput
