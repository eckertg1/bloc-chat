(function(){
  function RoomCtrl(Room, Message, $uibModal){
    this.rooms = Room.all;
    this.currentRoom = null;
    this.roomHeader = "Select a Room!";
    this.messages = Message;
    this.roomMessages = null;

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

    this.changeRoom = function(roomChoice){
      this.currentRoom = roomChoice.$id;
      this.roomHeader = roomChoice.$value;
      console.log(this.currentRoom);
      this.roomMessages = Message.getByRoomId(roomChoice.$id);
      console.log(this.roomMessages);
    };

  };

  angular
    .module('blocChat')
    .controller('RoomCtrl', ['Room', 'Message', '$uibModal', RoomCtrl]);
})();
