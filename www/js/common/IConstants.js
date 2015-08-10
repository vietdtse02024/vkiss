'use strict'
angular.module('fyviapp').service('IConstants', function($translate) {
    var self = this;
    self.CHECK_ACCOUNT_EXIST_URL = "http://192.168.3.101:8082/fyvi-ws/fyvi/account/check-account-exist";
});