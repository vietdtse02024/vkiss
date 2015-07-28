angular.module('starter.translation', ['ionic', 'pascalprecht.translate'])

.config(function ($translateProvider) {
    $translateProvider.translations('en', {
        LOGIN_TITLE: 'REGIST ACCOUNT'
    });
    $translateProvider.translations('vi', {
        LOGIN_TITLE: 'Đăng ký tài khoản' 
    });
    $translateProvider.preferredLanguage('vi');
});