(function(){
  function Modal($uibModalInstance){
    this.newRoom = function () {

    }
  }

  angular
    .module('blocChat')
    .factory('Modal', ['$uibModalInstance', Modal])
})();
