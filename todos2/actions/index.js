import {
    GET_COUNT,
} from '../Define'

export const getCount = () => {
    return (dispatch, getState) => {
        fetch('https://run.mocky.io/v3/a3abda6f-3098-41f4-876b-7d371da08d74')
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
