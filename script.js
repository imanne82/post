const $ = document
let arrayUser = []
let modalShow = $.querySelector('#show-post')
let anonymous = $.querySelector('.ana')
anonymous.addEventListener('click', function (e) {
    e.preventDefault()
    let randomId = Math.floor(1 + Math.random() * 5)
    let userAnonymous = {
        id: randomId,
        name: 'anonymous'
    }
    let isTrue = arrayUser.some(function (user) {
        return user.id === userAnonymous.id
    })
    if (!isTrue) {
        localStorage.setItem('user', JSON.stringify(userAnonymous))
        location.href = 'http://localhost:63342/site%205/userPage.html?id=' + userAnonymous.id + ''
        console.log(location.href)
        arrayUser.push(userAnonymous)
    }
    console.log(isTrue)
})
window.addEventListener('load', function () {
    modalShow.style.top = '10rem'
    let checkAccount = JSON.parse(localStorage.getItem('user'))
    if (checkAccount) {
        location.href = 'http://localhost:63342/site%205/userPage.html?id=' + checkAccount.id + ''
    }
})

