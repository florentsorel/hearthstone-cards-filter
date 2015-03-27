angular.module('Hearthstone', [
    'ngScrollSpy',
    'Hearthstone.controllers',
    'Hearthstone.services',
    'ngRoute',
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {templateUrl: "partials/cards.html", controller: 'HearthstoneController'}).
        otherwise({redirectTo: '/'});
}]);