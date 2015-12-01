﻿'use strict'
angular.module('fyviapp').service('IConstants', function ($translate) {
    var self = this;
    self.IP_ADDRESS = "http://10.1.1.128:8082";
    self.CHECK_ACCOUNT_EXIST_URL = self.IP_ADDRESS + "/fyvi-ws/fyvi/account/check-device-exist";
    self.REGIST_ACCOUNT = self.IP_ADDRESS + "/fyvi-ws/fyvi/account/regist-account";
    self.GET_LIST_FRIENDS = self.IP_ADDRESS + "/fyvi-ws/fyvi/home/get-list-friends";
    self.REMOVE_FRIENDS = self.IP_ADDRESS + "/fyvi-ws/fyvi/home/remove-friends";
    self.SEARCH_FRIEND_BY_PHONE = self.IP_ADDRESS + "/fyvi-ws/fyvi/home/find-friends";
    self.GET_LOCATION = self.IP_ADDRESS + "/fyvi-ws/fyvi/account/get-location";
});


