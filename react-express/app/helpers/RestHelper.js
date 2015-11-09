var $ = require('jquery');

module.exports = {
  get: function(url) {
    return new Promise(function(success, error) {
      $.ajax({
        url: url,
        dataType: "json",
        success: success,
        error: error
      })
    })
  }, 
  post: function(url, data) {
    return new Promise(function(success, error) {
      $.ajax({
        url: url,
        data: data,
        method: "POST",
        dataType: "json",
        success: success,
        error: error
      })
    })
  },
  patch: function(url, data) {
    return new Promise(function(success, error) {
      $.ajax({
        url: url,
        data: data,
        method: "PATCH",
        dataType: "json",
        success: success,
        error: error
      })
    })
  },
  del: function(url) {
    return new Promise(function(success, error) {
      $.ajax({
        url: url,
        method: "DELETE",
        dataType: "json",
        success: success,
        error: error
      })
    })
  }
}