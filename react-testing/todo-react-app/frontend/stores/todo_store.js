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
    });
  },

  create: function(todo) {
    var that = this;
    $.ajax({
      method: 'POST',
      url: 'api/todos',
      data: (todo: todo),
      success: function(response) {
        _todos.push(response);
        that.changed();
      }
    });
  },

  destroy: function(id) {
    var that = this;
    $.ajax({
      method: 'DELETE',
      url: 'api/todos',
      data: (id: id),
      success: function(response) {
        _todos.splice(_todos.indexOf(response), 1);
        that.changed();
      }
    });
  }
}

module.exports = TodoStore;
