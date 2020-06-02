


const menu = document.querySelector('.menu'),
dropDown = document.querySelectorAll('.menu__list-dropdown'),
hamburger = document.querySelector('.menu__hamburger'),
searchForm = document.querySelector('.search-form'),
searchFormInput = document.querySelector('.search-form__input')




const closeDropdown = () => {

    dropDown.forEach(item => {
        item.classList.remove('active')
    })
}


//Работа с меню
document.addEventListener('click', event => {
    if (!event.target.closest('.menu')) {
        menu.classList.remove('open-menu')
        closeDropdown()
    }
})



menu.addEventListener('click', event => {
    event.preventDefault()

    const target = event.target
    const dropdown = target.closest('.menu__list-dropdown')
    menu.classList.add('open-menu')
    if (dropdown) {
        dropdown.classList.toggle('active')

    }

})


//Поиск

searchForm.addEventListener('submit', event => {
    event.preventDefault()

    const value = searchFormInput.value.trim()

 
    dbService.getSearchResults(value)
})
