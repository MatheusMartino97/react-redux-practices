const INITIAL_STATE = {
  professionsList: []
}

const listProfessionsReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'CHANGE_PROFESSIONS_LIST':
      return {
        professionsList: action.professionsList
      }

    default:
      return state;
  }
}

export default listProfessionsReducer