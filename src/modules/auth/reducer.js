import {AUTH, REQUEST, SUCCESS, FAILURE} from '../../actions';

const initialState = {
  userName: {
    firstName: null,
    lastName: null,
  },
  email: null,
  accessToken: null,
  accessTokenExpiration: null,
  refreshToken: null,
  refreshTokenExpiration: null,
  role: null,
  isLoading: false,
  isSuccess: false,
  error: null
}

function authReducer(state=initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case AUTH[REQUEST]:
      return {...state, isLoading: true}
    case AUTH[SUCCESS]:
      return {...payload, isLoading: false, isSuccess: true, error: null}
    case AUTH[FAILURE]:
      return {...initialState, isLoading: false, isSuccess: false, error: payload}
    default:
      return state;
  }
}

export default authReducer;