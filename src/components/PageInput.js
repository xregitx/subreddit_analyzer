import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Input, Icon} from 'antd'
import 'antd/dist/antd.css'
import {getRandomSubrredit} from '../RandomSubreddit'
import {connect} from "react-redux";
import {selectSubreddit, invalidateSubreddit, fetchPosts} from '.././actions'
import Posts from '../components/Posts'

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
        const {dispatch, selectedSubreddit} = this.props
        dispatch(fetchPosts(selectedSubreddit))
        this.state.getSubredditPlaceholder = getRandomSubrredit()
        this.interval = setInterval(() => {
            this.setState({getSubredditPlaceholder: getRandomSubrredit()})
        }, 2500);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
            const { dispatch, selectedSubreddit } = nextProps
            dispatch(fetchPosts(selectedSubreddit))
        }
    }

    emitEmpty = () => {
        this.userInput.focus()
        this.setState({currentInput: ''})
    }

    onChangeUserName = e => {
        this.setState({currentInput: e.target.value})
    }

    handleChange = input => {
        if (input === '')
            this.props.dispatch(selectSubreddit(this.state.getSubredditPlaceholder))
        else
            this.props.dispatch(selectSubreddit(input))
    }

    render() {
        const {selectedSubreddit, posts, isFetching, lastUpdated} = this.props
        const isEmpty = posts.length === 0;
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
                {isEmpty && <h1>Invalid</h1>}
            </div>

        )
    }

    static propTypes = {
        selectedSubreddit: PropTypes.string.isRequired,
        posts: PropTypes.array.isRequired,
        isFetching: PropTypes.bool.isRequired,
        lastUpdated: PropTypes.number,
        dispatch: PropTypes.func.isRequired
    }

}



const mapStateToProps = state => {
    const {selectedSubreddit, postsBySubreddit} = state
    const {
        isFetching,
        lastUpdated,
        items: posts
    } = postsBySubreddit[selectedSubreddit] || {
        isFetching: true,
        items: []
    }

    return {
        selectedSubreddit,
        posts,
        isFetching,
        lastUpdated
    }
}
export default connect(mapStateToProps)(PageInput)

