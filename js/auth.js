function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'ourteam' && password === '12345678') {
         
        // تسجيل الدخول بنجاح
        alert('LOG_IN SUCCESSFULLY!');
        window.location.href='inx.html';
        // قم بتوجيه المستخدم إلى صفحة أخرى هنا
    } else {
        // اسم المستخدم أو كلمة المرور غير صحيحة
        alert('The Username Or Password Is Incorrect!');
    }
}