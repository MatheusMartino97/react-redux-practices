const workerInfoAction = (workerInfo) => {
  return {
    type: 'GET_WORKER_INFO',
    workerInfo,
  }
}

export default workerInfoAction