let users = [];
function addUser() {
    let User =
        {   email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            full_name: document.getElementById('full_name').value,
            country: document.getElementById('country').value,
            birthdate: document.getElementById('birthdate').value
        }
    users.push(User)
    login_page()
}
function login_page() {
    document.getElementById('form_reg').remove()
    let divForm = document.createElement('div')
    divForm.id='login_form'
    divForm.className = 'form'
    divForm.innerHTML = "<div>\n" +
        "          <p>EMAIL :</p>\n" +
        "          <input type=\"text\" id=\"email_log\">\n" +
        "        </div>\n" +
        "        <div>\n" +
        "          <p>PASSWORD :</p>\n" +
        "          <input type=\"text\" id=\"password_log\">\n" +
        "        </div>\n" +
        "        <button class=\"reg_but\" onclick=\"login()\">SIGN IN</button>"
    document.body.append(divForm)
}
function login() {
    let User =
        {   email: document.getElementById('email_log').value,
            password: document.getElementById('password_log').value
        }
    let result = 0
    for (let u of users) {
        if (u.email === User.email && u.password === User.password) {
            result = 1
            localStorage.user = JSON.stringify(u)
            alert("Перезагрузите страницу для отображения профиля")
            init_page()
        }
    }
    if (result === 0) {
        alert("Не найдено пользователя с таким email или паролем. Проверьте вводные данные")
    }
}

function init_page() {
    if (localStorage.user!=null) {
        users = JSON.parse(localStorage.user)
        console.log(users)
        document.getElementById('login').innerText = users.full_name
        document.getElementById('register').innerHTML="<a href=\"#\" onclick=\"removeUsers()\">Logout</a>"
        let divInit = document.createElement('div')
        divInit.className = "profile"
        divInit.id = "profile"
        divInit.innerHTML = "<div>\n" +
            "    <h1>Welcome "+users.full_name+"</h1>\n" +
            "</div>\n" +
            "<div>\n" +
            "    <p>EMAIL :</p>\n" +
            "    <p>"+users.email+"</p>\n" +
            "</div>\n" +
            "<div>\n" +
            "    <p>FULL NAME :</p>\n" +
            "    <p>"+users.full_name+"</p>\n" +
            "</div>\n" +
            "<div>\n" +
            "    <p>COUNTRY :</p>\n" +
            "    <p>"+users.country+"</p>\n" +
            "</div>\n" +
            "<div>\n" +
            "    <p>BIRTHDATE :</p>\n" +
            "    <p>"+users.birthdate+"</p>\n" +
            "</div>"
        let rem = document.getElementById('form_reg')
        rem.remove()
        document.body.append(divInit)
    }
}

function removeUsers() {
    localStorage.clear()
    init_page()
    alert("Перезагрузите страницу для выхода из профиля")
}