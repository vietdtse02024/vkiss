'use strict'
angular.module('fyviapp').service('IConstants', function ($translate) {
    var self = this;
    self.IP_ADDRESS = "http://localhost:8082";
    self.CHECK_ACCOUNT_EXIST_URL = self.IP_ADDRESS + "/fyvi-ws/fyvi/account/check-device-exist";
    self.REGIST_ACCOUNT = self.IP_ADDRESS + "/fyvi-ws/fyvi/account/regist-account";
    self.GET_LIST_FRIENDS = self.IP_ADDRESS + "/fyvi-ws/fyvi/home/get-list-friends";
    self.REMOVE_FRIENDS = self.IP_ADDRESS + "/fyvi-ws/fyvi/home/remove-friends";
    self.SEARCH_FRIEND_BY_PHONE = self.IP_ADDRESS + "/fyvi-ws/fyvi/home/find-friends";
    self.GET_LOCATION = self.IP_ADDRESS + "/fyvi-ws/fyvi/account/get-location";
    self.GET_ACCOUNT_BY_ID = self.IP_ADDRESS + "/fyvi-ws/fyvi/account/get-account-by-id";
    self.ADD_FRIEND = self.IP_ADDRESS + "/fyvi-ws/fyvi/account/get-account-by-id";
});


