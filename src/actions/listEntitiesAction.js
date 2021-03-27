const listEntitiesAction = (entitiesList) => {
  return {
    type: 'GET_LIST_ENTITIES',
    entitiesList
  }
}

export default listEntitiesAction
