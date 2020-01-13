import { NOTES_STATUS, USER_STATUS } from '../actionTypes'

export default function(state = {}, { type, payload }) {
    switch (type) {
        case NOTES_STATUS:
            return {
                ...state,
                notes: payload
            }

        case USER_STATUS:
            return {
                ...state,
                user: payload
            }

        default:
            return state
    }
}