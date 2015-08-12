'use strict'
angular.module('fyviapp')

.config(function ($translateProvider) {
    $translateProvider.translations('en', {
        'login.title': 'Login',
        'regist.title': 'Registration',
    });
    $translateProvider.translations('vi', {
        'login.title': 'Đăng nhập',

        // regist
        'regist.title': 'Đăng ký tài khoản',
        'regist.phone_no': 'Số điện thoại',
        'regist.account_name': 'Tên tài khoản',
        'regist.full_name': 'Họ tên',
        'regist.birtday': 'Tên tài khoản',
        'regist.password': 'Mật khẩu',

        // home
        'home.diary': 'Nhật ký',
        'home.friends': 'Bạn bè',
        'home.request': 'Yêu cầu',

        // btn
        'btn.regist': 'Đăng ký',

    });
    $translateProvider.preferredLanguage('vi');
});