﻿'use strict'
angular.module('fyviapp').service('IConstants', function ($translate) {
    var self = this;
    self.IP_ADDRESS = "http://localhost:8082";
    self.CHECK_ACCOUNT_EXIST_URL = self.IP_ADDRESS + "/fyvi-ws/fyvi/account/check-account-exist";
    self.REGIST_ACCOUNT = self.IP_ADDRESS + "/fyvi-ws/fyvi/account/regist-account";
});


