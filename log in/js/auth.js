function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'ourteam' && password === '12345678') {
         
        alert('LOG_IN SUCCESSFULLY!');
        window.location.href='inx.html';
    } else {
        alert('The Username Or Password Is Incorrect!');
    }
}