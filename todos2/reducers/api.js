import { GET_COUNT } from '../Define'

const api = (state = 0, action) => {
  let { type, count } = action
  switch (type) {
    case GET_COUNT:
      return count
    default:
      return state
  }
}

export default api
