(function(){
  function RoomCtrl(Room, Message, $uibModal, $cookies){
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
      console.log($cookies.blocChatCurrentUser);
    };

    this.postMessage = function (newMessage, currentRoom){
      Message.send(newMessage, currentRoom);
    };
  };

  angular
    .module('blocChat')
    .controller('RoomCtrl', ['Room', 'Message', '$uibModal', '$cookies', RoomCtrl]);
})();
