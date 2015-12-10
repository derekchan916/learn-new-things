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
  }
}

module.exports = TodoStore;
