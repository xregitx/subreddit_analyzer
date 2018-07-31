export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALID_SUBREDDIT'
export const FETCH_SUBREDDIT_JSON = 'FETCH_SUBREDDIT_JSON'
export const RECEIVE_SUBREDDIT_JSON = 'RECEIVE_SUBREDDIT_JSON'

export const selectSubreddit = subreddit => ({
    type: SELECT_SUBREDDIT,
    subreddit
})
