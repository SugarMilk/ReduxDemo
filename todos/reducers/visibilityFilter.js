import { SET_VISIBILITY_FILTER } from '../Define'
import { VisibilityFilters } from '../actions'

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  let { type, filter } = action

  switch (type) {
    case SET_VISIBILITY_FILTER:
      return filter
    default:
      return state
  }
}

export default visibilityFilter
