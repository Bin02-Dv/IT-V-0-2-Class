const form = document.getElementById('login');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const username = document.getElementById('username').value;
    const usernameBorder = document.getElementById('username');

    const password = document.getElementById('password').value;
    const passwordBorder = document.getElementById('password');

    if (username === ""){
        usernameBorder.style = 'border: 2px solid red;';
    }else{
        usernameBorder.style = 'border: 2px solid green;';
    }

    if (password === ""){
        passwordBorder.style = 'border: 2px solid red;';
    }else{
        passwordBorder.style = 'border: 2px solid green;';
    }
})