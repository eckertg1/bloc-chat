(function(){
  function LoginCtrl($uibModalInstance, $cookies){

    this.createUserName = function(userName){
      if(userName && userName !== ''){
        $cookies.blocChatCurrentUser = userName;
        $uibModalInstance.close('exit');
      }

    };

  };

  angular
    .module('blocChat')
    .controller('LoginCtrl', ['$uibModalInstance', '$cookies', LoginCtrl]);
})();
