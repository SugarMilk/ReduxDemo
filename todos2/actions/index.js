import {
  GET_COUNT,
} from '../Define'

export const getCount = () => {
  return (dispatch, getState) => {
    fetch('https://run.mocky.io/v3/2c199741-49a5-46a7-815f-437b80c0a17b')
    .then(resp => resp.json())
    .then((value) => {
      dispatch({
        type: GET_COUNT,
        count: value.count,
      })
    })
    .catch((err) => {

    })
  }
}
