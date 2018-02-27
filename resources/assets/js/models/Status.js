class Status {
    static all(then) {
        return axios.get('/statuses')
          .then(({data}) => (data))
    }
}

export default Status;
