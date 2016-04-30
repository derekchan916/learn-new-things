var Store = require('flux/utils').Store;
var _benches = {};
var BenchConstants = require('../constants/bench_constants');
var AppDispatcher = require('../dispatcher/dispatcher');
var BenchStore = window.BenchStore = new Store(AppDispatcher);

BenchStore.all = function () {
  return Object.assign({}, _benches);
};

BenchStore.find = function(id){
  return Object.assign({}, _benches[id]);
};

BenchStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case BenchConstants.BENCHES_RECEIVED:
      _benches = payload.benches;
      BenchStore.__emitChange();
      break;
    case BenchConstants.BENCH_RECEIVED:
      var bench_id = payload.bench.id;
      _benches[bench_id] = payload.bench;
      BenchStore.__emitChange();
      break;
  }
};

module.exports = BenchStore;
