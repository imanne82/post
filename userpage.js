const $ = document
let showNameUser = $.querySelector('#nameUser')
let btnAddPost = $.querySelector('#btnAddPost')
let getDataPost = $.querySelector('#getDataPost')
let containerPost = $.querySelector('.containerPost')
let closedSavePost = $.querySelector('.closed')
let savePost = $.querySelector('#savePost')
let dataPostArray = []


function saveDataPost() {
    let inputText = $.querySelector('.input-p')
    let inputColor = $.querySelector('.input-color')
    if (inputText.value !== '') {
        let dataPost = {text: inputText.value, bgColor: inputColor.value}
        dataPostArray.push(dataPost)
        saveLocalStorage(dataPostArray)
        creatTemplatePost(inputText.value, inputColor.value)
        inputText.value = ''
    }
}

function creatTemplatePost(text, color) {
    containerPost.insertAdjacentHTML('beforeend', ' <div class="post" style="background-color: ' + color + '">\n' +
        '            <div class="details"><p>' + text + '</p></div></div>')

}

function getLocalStorage() {
    let localStorageTodos = JSON.parse(localStorage.getItem('post'))
    if (localStorageTodos) {
        dataPostArray = localStorageTodos
        dataPostArray.forEach(function (post) {
            creatTemplatePost(post.text, post.bgColor)
        })

    }

}

function saveLocalStorage(listPost) {
    localStorage.setItem('post', JSON.stringify(listPost))
}

function loadPage() {
    let user = JSON.parse(localStorage.getItem('user'))
    getLocalStorage()
    console.log(user)
    showNameUser.innerHTML = user.name
}

btnAddPost.addEventListener('click', function () {
    getDataPost.style.display = 'flex'
})
closedSavePost.addEventListener('click', function () {
    getDataPost.style.display = 'none'

})
savePost.addEventListener('click', saveDataPost)
window.addEventListener('load', loadPage)



