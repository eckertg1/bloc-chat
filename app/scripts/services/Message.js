(function() {
  function Message($firebaseArray, $cookies) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {
        // Filter the messages by their room ID.

        return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
        };

    Message.send = function(newMessage, room){
      console.log(newMessage);
      console.log(room);
      messages.$add({
        content: newMessage,
        username: $cookies.blocChatCurrentUser,
        sentAt: Date(),
        roomId: room
      });
    };

    return Message;

  }


  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();
