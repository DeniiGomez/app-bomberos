import {
  CREATE_EMERGENCY, 
  DELETED_EMERGENCY, 
  GET_EMERGENCIES, 
  GET_EMERGENCY, 
  UPDATED_EMERGENCY,
  SET_EMERGENCY
} from '../Types'

export default function (state, action) {
  const { payload, type } = action

  switch(type) {
    case GET_EMERGENCIES: {
      return {
        ...state,
        emergencies: payload
      }
    }
    case GET_EMERGENCY: {
      return {
        ...state,
        emergency: payload
      }
    }
    case SET_EMERGENCY: {
      return {
        ...state,
        emergency: payload
      }
    }
    case CREATE_EMERGENCY: {
      return {
        ...state,
        emergencies: payload
      }
    }
    case UPDATED_EMERGENCY: {
      return {
        ...state,
        emergencies: payload
      }
    }
    case DELETED_EMERGENCY: {
      return {
        ...state,
        emergencies: payload
      }
    }
    default: {
      return state
    }
  }
}
