angular.module('Hearthstone.controllers', []).
controller('HearthstoneController', function($scope, hearthstoneAPIService) {
    
    $scope.lang = null;

    // Filters
    $scope.filterClass = {};
    $scope.filterCost = {};
    $scope.filterCardType = {};
    $scope.filterRarity = {};
    $scope.filterTaunt = {};
    $scope.filterBattleCry = {};
    $scope.filterDivineShield = {};
    $scope.filterDeathrattle = {};
    $scope.filterCharge = {};
    $scope.filterWindfury = {};
    $scope.filterRace = {};


    $scope.filterByClass = function(card) {
        return $scope.filterClass[card.Tag.Class] || noFilter($scope.filterClass);
    }

    $scope.filterByCost = function(card) {
        if(card.Tag.Cost == 7) {
            return $scope.filterCost[card.Tag.Cost] || noFilter($scope.filterCost);
        }
        else {
            return $scope.filterCost[card.Tag.Cost] || noFilter($scope.filterCost);
        }
    }

    $scope.filterByCardType = function(card) {
        return $scope.filterCardType[card.Tag.CardType] || noFilter($scope.filterCardType);
    }

    $scope.filterByRarity = function(card) {
        return $scope.filterRarity[card.Tag.Rarity] || noFilter($scope.filterRarity);
    }

    $scope.filterByTaunt = function(card) {
        return $scope.filterTaunt[card.Tag.Taunt] || noFilter($scope.filterTaunt);
    }

    $scope.filterByBattleCry = function(card) {
        return $scope.filterBattleCry[card.Tag.Battlecry] || noFilter($scope.filterBattleCry);
    }

    $scope.filterByDivineShield = function(card) {
        return $scope.filterDivineShield[card.Tag['Divine Shield']] || noFilter($scope.filterDivineShield);
    }

    $scope.filterByDeathrattle = function(card) {
        return $scope.filterDeathrattle[card.Tag.Deathrattle] || noFilter($scope.filterDeathrattle);
    }

    $scope.filterByCharge = function(card) {
        return $scope.filterCharge[card.Tag.Charge] || noFilter($scope.filterCharge);
    }

    $scope.filterByWindfury = function(card) {
        return $scope.filterWindfury[card.Tag.Windfury] || noFilter($scope.filterWindfury);
    }

    $scope.filterByRace = function(card) {
        return $scope.filterRace[card.Tag.Race] || noFilter($scope.filterRace);
    }

    $scope.searchFilter = function(card) {
        var keyword = new RegExp($scope.cardsFilter, 'i');
        return !$scope.cardsFilter || keyword.test(card.Tag.CardName);
    }

    $scope.isNotCredit = function(card) {
        return card.Tag.CardSet != 16 && card.Tag.CardSet != 7 && card.Tag.CardSet != 8 && card.Tag.CardType != 6;
    }

    function noFilter(filterObj) {
        for (var key in filterObj) {
            if (filterObj[key]) {
                return false;
            }
        }
        return true;
    }

    // Lang
    $scope.updateLang = function() {
        if($scope.lang == null)
            $scope.lang = "frFR";

        hearthstoneAPIService.getCards($scope.lang).then(function(response) {
            $scope.cardsList = response.cards;
        });
    }

});