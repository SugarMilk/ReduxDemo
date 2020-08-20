import {
  ADD_TODO,
  TOGGLE_TODO,
} from '../Define'

const todos = (state = [], action) => {
  const { type, id, text } = action

  switch (type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: id,
          text: text,
          completed: false,
        }
      ]
    case TOGGLE_TODO:
      return state.map((item) => {
        if (item.id == id) {
          return {
            ...item,
            completed: !item.completed,
          }
        }
        return item
      })
    default:
      return state
  }
}

export default todos
