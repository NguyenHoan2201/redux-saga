export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
function makeRequestType(base){
  return [REQUEST, SUCCESS, FAILURE].reduce((accomodators, value) =>{
    accomodators[value] = `${base}_${value}`;
    return accomodators;
  }, {})
}

export const USER = makeRequestType('USER');

export const AUTH = makeRequestType('AUTH');

export const WORK = makeRequestType('WORK');

function makeAction(type, payload = {}){
  return {type, ...payload}
}

export const auth = {
  request: ({userName, password})=> {
    return makeAction(AUTH[REQUEST], {userName, password})
  },
  success: (response)=>makeAction(AUTH[SUCCESS], response),
  failure: (error)=>makeAction(AUTH[FAILURE], error)
}