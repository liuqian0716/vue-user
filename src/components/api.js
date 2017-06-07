import axios from 'axios'
let config = '/'
function loading () {
}

function removeloading () {
}

//  function redirectUrl (code) {
//    if (code === 21) {
//      window.location.href = '/login'
//    }
//  }

export default {
  get: function (url, params, callback, paramCache = {}) {
    // save stora
    loading()
    if (paramCache) {
      for (let n in paramCache) {
        switch (n) {
          case 'scroll':
            let scache = this.fetchSessionStora(paramCache[n])
            if (scache && scache.currentview === paramCache[n]) {
              scache['is_scroll'] = 1
              return callback(scache)
            }
            break
          case 'get':
            let gcache = this.fetchStora(paramCache[n])
            if (gcache) {
              return callback(gcache)
            }
            break
          default:
            break
        }
      }
    }
    axios.get(config + url, {
      params: params
    })
    .then(function (response) {
      removeloading()
      let data = response.data
      return callback(data)
    })
    .catch(function (error) {
      if (!error.response) {
        return false
      }
      switch (error.response.status) {
        case 401:
          return callback(error.response.data)
        case 403:
          return callback(error.response.data)
        case 422:
          return callback(error.response.data)
        default:
          return callback(error.response)
      }
    })
  },
  post: function (url, params, callback) {
    loading()
    axios.post(config + url, params)
    .then(function (response) {
      removeloading()
      let data = response.data
      return callback(data)
    })
    .catch(function (error) {
      if (!error.response) {
        return false
      }
      switch (error.response.status) {
        case 401:
          return callback(error.response.data)
        case 403:
          return callback(error.response.data)
        case 422:
          return callback(error.response.data)
        default:
          return callback(error.response)
      }
    })
  },
  put: function (url, params, callback) {
    loading()
    axios.put(config + url, params)
    .then(function (response) {
      removeloading()
      let data = response.data
      return callback(data)
    })
    .catch(function (error) {
      if (!error.response) {
        return false
      }
      switch (error.response.status) {
        case 401:
          return callback(error.response.data)
        case 403:
          return callback(error.response.data)
        case 422:
          return callback(error.response.data)
        default:
          return callback(error.response)
      }
    })
  },
  delete: function (url, params, callback) {
    loading()
    axios.delete(config + url, params)
    .then(function (response) {
      removeloading()
      let data = response.data
      return callback(data)
    })
    .catch(function (error) {
      if (!error.response) {
        return false
      }
      switch (error.response.status) {
        case 401:
          return callback(error.response.data)
        case 403:
          return callback(error.response.data)
        case 422:
          return callback(error.response.data)
        default:
          return callback(error.response)
      }
    })
  }
}
