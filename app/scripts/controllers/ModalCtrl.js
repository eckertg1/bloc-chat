(function(){
  function ModalCtrl($uibModalInstance){
    this.cancel = function(){
      $uibModalInstance.dismiss('cancel');
    };

    this.submit = function(){
      $uibModalInstance.close(this.newRoom);
    };

  };

  angular
    .module('blocChat')
    .controller('ModalCtrl', ['$uibModalInstance', ModalCtrl]);
})();
