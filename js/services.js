angular.module('Hearthstone.services', []).
factory('hearthstoneAPIService', function($http) {

    var hearthstoneAPI = function(data) { return data; }

    hearthstoneAPI.getCards = function(lang) {
        return $http.get('cards/' + lang + '.json').then(function(response, status) { return new hearthstoneAPI(response.data); console.log(response.data); });
    };

    return hearthstoneAPI;
});