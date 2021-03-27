const INITIAL_STATE = {
  entitiesList: []
}

const listEntitiesReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'GET_LIST_ENTITIES':
      return {
        entitiesList: action.entitiesList
      };
    
      default:
        return state;
  }
}

export default listEntitiesReducer
