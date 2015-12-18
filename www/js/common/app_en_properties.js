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
        'popup.cofirm': 'Xác nhận',

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

        // friend
        'add.friend.title' : 'Thêm bạn',
        'add.friend.input.phoneno' : 'Vui lòng nhập số điện thoại',
        'search.friend.phone.not_regist' : 'Số điện thoại này chưa đăng ký FYVI',
        'search.friend.phone.not_valid' : 'Số điện thoại không hợp lệ',
        'start.direction' : 'Bắt đầu tìm đường',
        'last.time.position' : 'Lần cập nhật cuối',
        
        // btn
        'btn.regist': 'Đăng ký',
        'btn.delete': 'Xóa',
        'btn.back': 'Quay lại',
        'btn.search_friend': 'Tìm bạn',
        'btn.add_friend': 'Kết bạn',
        'btn.edit_profile': 'Sửa thông tin',
        
        // menu
        'menu.item.logout' : 'Thoát tài khoản',
        'menu.item.dashboard' : 'Nhật ký',
        'menu.item.sys_setting' : 'Cài đặt hệ thống',
        'menu.item.account_setting' : 'Cài đặt tài khoản',
        
        // setting

    });
    $translateProvider.preferredLanguage('vi');
});