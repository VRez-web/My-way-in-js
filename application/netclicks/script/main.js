//Элементы
const IMG_URL = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2'
const API_KEY = 'f74144cebf6695340f4726c27579484e'

const leftMenu = document.querySelector('.left-menu'),
    hamburger = document.querySelector('.hamburger'),
    tvShowList = document.querySelector('.tv-shows__list'),
    modal = document.querySelector('.modal')



// работа с сервером получение данных
const DBService = class {
    getData = async url => {
        const res = await fetch(url)
        if (res.ok) {
            return res.json()

        } else {
            throw new Error(`Не удалось получить данные по адресу ${url}`)
        }
    }

    getTestData = () => this.getData('test.json')
}
const renderCard = response => {
    tvShowList.textContent = ''
    response.results.forEach(item => {

        const {
            backdrop_path: backdrop,
            name: title,
            poster_path: poster,
            vote_average: vote
        } = item

    

        const posterIMG = poster ? IMG_URL + poster : 'img/no-poster.jpg'
        const backdropIMG = backdrop == null ? 'img/no-poster.jpg' : IMG_URL + backdrop
        const voteElem = vote == 0 ? '' : vote

        const card = document.createElement('li')
        card.classList.add('tv-shows__item')
        card.innerHTML = `
        <a href="#" class="tv-card">
                        <span class="tv-card__vote">${voteElem}</span>
                        <img class="tv-card__img"
                             src="${posterIMG}"
                             data-backdrop="${backdropIMG}"
                             alt="${title}">
                        <h4 class="tv-card__head">${title}</h4>
                    </a>
            `
        tvShowList.append(card)
    })
}
new DBService().getTestData().then(renderCard)

//открытие/закрытие меню
hamburger.addEventListener('click', event => {
    leftMenu.classList.toggle('openMenu')
    hamburger.classList.toggle('open')
})


document.addEventListener('click', event => {
    if (!event.target.closest('.left-menu')) {
        leftMenu.classList.remove('openMenu')
        hamburger.classList.remove('open')
    }
})

leftMenu.addEventListener('click', event => {
    const target = event.target
    const dropdown = target.closest('.dropdown')

    if (dropdown) {
        dropdown.classList.toggle('active')
        leftMenu.classList.add('openMenu')
        hamburger.classList.add('open')
    }
})

// открытие модального окна

tvShowList.addEventListener('click', event => {
    const target = event.target
    const card = target.closest('.tv-card')

    if (card) {
        document.body.style.overflow = 'hidden'
        modal.classList.remove('hide')
    }

})

//Закрытие 
modal.addEventListener('click', event => {
    event.preventDefault()

    if (event.target.closest('.cross') ||
        event.target.classList.contains('modal')) {
        modal.classList.add('hide')
    }
})

// смена карточки

const changeImage = event => {
    const card = event.target.closest('.tv-shows__item')

    if (card) {
        const img = card.querySelector('.tv-card__img')

        if (img.dataset.backdrop) {
            [img.src, img.dataset.backdrop] = [img.dataset.backdrop, img.src]
        }

    }
}

tvShowList.addEventListener('mouseover', changeImage)
tvShowList.addEventListener('mouseout', changeImage)