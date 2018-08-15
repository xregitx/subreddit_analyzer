import _ from 'lodash'
import recommendedSubreddits from './recommendedSubreddits'

let cloneRecommendedSubreddits = _.clone(recommendedSubreddits)
export const getRandomSubrredit = () => {
  return cloneRecommendedSubreddits[
    _.random(cloneRecommendedSubreddits.length - 1)
  ]
}
