import { GET_USER } from './../actionTypes'

export default function(state = {}, { type, payload }) {
    switch (type) {
        case GET_USER:
            return payload
        default:
            return state
    }
}