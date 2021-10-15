import { LOGIN, SIGNIN } from '../Types'

export default function (state, action) {
  const { payload, type } = action

  switch(type) {
    case LOGIN: {
      return {
        ...state,
        user: payload
      }
    }
    case SIGNIN: {
      return {
        ...state,
        user: payload
      }
    }
    default: {
      return state
    }
  }
}
