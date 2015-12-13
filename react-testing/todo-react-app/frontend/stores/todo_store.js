var _todos = [];
var _callbacks = [];

TodoStore = {
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
    });
  },

  create: function(object) {
    var that = this;
    $.ajax({
      method: 'POST',
      url: 'api/todos',
      data: {todo: object},
      success: function(response) {
        _todos.push(response);
        that.changed();
      }
    });
  },

  destroy: function(id) {
    var that = this;
    var idx = this.find(id);
    var todo = _todos[id];

    if (todo) {
      $.ajax({
        method: 'DELETE',
        url: 'api/todos/' + id,
        success: function(response) {
          _todos.splice(idx, 1);
          that.changed();
        }
      });
    }
  },

  find: function(id) {
    var idx = -1;
    for (var i = 0; i < _todos.length; i++) {
      if (_todos[i].id === id) {
        idx = i;
        break;
      }
    }

    return idx;
  },

  toggleDone: function(id) {
    var that = this;
    var todo = _todos[this.find(id)];
    var done = !todo.done;
    $.ajax({
      method: 'PATCH',
      url: 'api/todos/' + id,
      data: { todo: { done: done }},
      success: function(response) {
        todo.done = done;
        that.changed();
      }
    });
  }
}

module.exports = TodoStore;
