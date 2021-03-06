(function () {
  function config($locationProvider, $stateProvider){
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

    $stateProvider
        .state('Hoom', {
          url: '/',
          controller: 'RoomCtrl as room',
          templateUrl: '/templates/room.html'
      });
  }

  angular
    .module('blocChat', ['ui.bootstrap', 'ui.router', 'firebase', 'ngCookies'])
    .config(config)
    .run(['$cookies', '$uibModal', function($cookies, $uibModal){
        if (!$cookies.blocChatCurrentUser || $cookies.blocChatCurrentUser === ''){
          $uibModal.open({
            templateUrl: '/templates/login.html',
            controller: 'LoginCtrl as login',
            size: 'sm',
            backdrop: 'static'
          });
        }

    }]);
})();
