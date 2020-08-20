import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  GET_COUNT,
} from '../Define'

let nextTodoId = 0

export const addTodo = text => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text,
})

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id,
})

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter,
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
}
