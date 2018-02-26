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
    .module('blocChat', ['ui.bootstrap', 'ui.router', 'firebase'])
    .config(config);
})();
