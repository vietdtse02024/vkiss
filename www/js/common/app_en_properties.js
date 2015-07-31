'use strict'
angular.module('fyviapp')

.config(function ($translateProvider) {
    $translateProvider.translations('en', {
        'login.title' : 'Login',
    });
    $translateProvider.translations('vi', {
        'login.title': 'Đăng nhập',
        'regist.title': 'Đăng ký tài khoản',
    });
    $translateProvider.preferredLanguage('vi');
});