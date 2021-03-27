const listProfessionsAction = (professionsList) => {
  return {
    type: 'CHANGE_PROFESSIONS_LIST',
    professionsList,
  }
}

export default listProfessionsAction