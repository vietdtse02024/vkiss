'use strict'
angular.module('fyviapp')

.config(function ($translateProvider) {
    $translateProvider.translations('en', {
        'login.title': 'Login',
        'regist.title': 'Registration',
    });
    $translateProvider.translations('vi', {
        'login.title': 'Đăng nhập',
        'popup.error.happen': 'Có lỗi xảy ra',

        // regist
        'regist.title': 'Đăng ký tài khoản',
        'regist.phone_no': 'Số điện thoại',
        'regist.account_name': 'Tên tài khoản',
        'regist.full_name': 'Họ tên',
        'regist.birtday': 'Tên tài khoản',
        'regist.password': 'Mật khẩu',
        'regist.phoneno.exist': 'Số điện thoại đã được đăng ký',
        'regist.phoneno.required': 'Hãy nhập số điện thoại',
        'regist.password.required': 'Hãy nhập mật khẩu',
        'regist.info.required': 'Hãy nhập thông tin',

        // home
        'home.diary': 'Nhật ký',
        'home.friends': 'Bạn bè',
        'home.request': 'Yêu cầu',
        'home.friends.title': 'Danh sách bạn bè',
        'last.update.location': 'Mới cập nhật vị trí',

        // btn
        'btn.regist': 'Đăng ký',
        'btn.delete': 'Xóa',

    });
    $translateProvider.preferredLanguage('vi');
});