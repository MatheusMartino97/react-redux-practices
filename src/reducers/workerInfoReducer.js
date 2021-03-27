const INITIAL_STATE = {
  workerInfo: {}
}

const workerInfoReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'GET_WORKER_INFO':
      return {
        city: action.workerInfo.city,
        entity: action.workerInfo.entity,
        job: action.workerInfo.job,
        stateShort: action.workerInfo.stateShort
      }

    default:
      return state;
  }
}

export default workerInfoReducer