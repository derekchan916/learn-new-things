var _todos = [];
var _callbacks = [];

var TodoStore = {
  changed: function() {
    _callbacks.forEach(function(cb) {
      cb();
    })
  },

  addChangedHandler: function(cb) {
    _callbacks.push(cb);
  },

  removeChangedHandler: function(cb) {
    _callbacks.splice(_callbacks.indexOf(cb), 1)
  },

  all: function() {
    return _todos;
  },

  fetch: function() {
    var that = this;
    $.ajax({
      method: 'GET',
      url: 'api/todos',
      datatype: 'json',
      success: function(response){
        _todos = response;
        that.changed();
      }
    })
  }
}

module.exports = TodoStore;
