(function(){
  function HomeCtrl(Room, $uibModal){
    this.rooms = Room.all;
    this.addRoom = function(){
      console.log('yay');
      var modalInstance = $uibModal.open({
        templateUrl: 'templates/modal.html',
        size: 'sm',
        controller: 'ModalCtrl as modal'
      });
      modalInstance.result.then(function (newRoom){
        Room.add(newRoom);
        console.log('submit');
      }, function (){
        console.log('cancel');
      });
    }
  };

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
