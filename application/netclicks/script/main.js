//Элементы
const IMG_URL = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2'

const leftMenu = document.querySelector('.left-menu'),
    hamburger = document.querySelector('.hamburger'),
    tvShowList = document.querySelector('.tv-shows__list'),
    modal = document.querySelector('.modal'),
    tvShows = document.querySelector('.tv-shows'),
    tvCardImg = document.querySelector('.tv-card__img'),
    modalTitle = document.querySelector('.modal__title'),
    genresList = document.querySelector('.genres-list'),
    rating = document.querySelector('.rating'),
    description = document.querySelector('.description'),
    modalLink = document.querySelector('.modal__link'),
    searchForm = document.querySelector('.search__form'),
    searchFormInput = document.querySelector('.search__form-input'),
    preloader = document.querySelector('.preloader'),
    dropdown = document.querySelectorAll('.dropdown'),
    tvShowsHead = document.querySelector('.tv-shows__head'),
    posterWrapper = document.querySelector('.poster__wrapper'),
    modalContent = document.querySelector('.modal__content'),
    pagination = document.querySelector('.pagination')

// модальное окно для плохого интернета
const loading = document.createElement('div')
loading.className = 'loading'



// работа с сервером получение данных
const DBService = class {

    constructor() {
        this.API_KEY = 'f74144cebf6695340f4726c27579484e'
        this.SERVER = 'https://api.themoviedb.org/3'
    }

    getData = async url => {

        const res = await fetch(url)
        if (res.ok) {
            return res.json()

        } else {
            throw new Error(`Не удалось получить данные по адресу ${url}`)
        }
    }

    getTestData = () => this.getData('test.json')
    getTestCard = () => this.getData('card.json')
    // getSearchRsults = query => this.getData(`${SERVER}/search/tv?api_key=${API_KEY}&query=${query}&language=ru-RU`)// один из вариантов как можно делать запрос к серверу только переменнын надо объявить сверху
    getSearchResults = query => {
        this.temp = `${this.SERVER}/search/tv?api_key=${this.API_KEY}&language=ru-RU&query=${query}`
        return this.getData(this.temp)

    }

    getNextPage = page => this.getData(this.temp + '&page=' + page)


    getTvShow = id => this.getData(`${this.SERVER}/tv/${id}?api_key=${this.API_KEY}&language=ru-RU`)
    getTopRated = () => this.getData(`${this.SERVER}/tv/top_rated?api_key=${this.API_KEY}&language=ru-RU`)
    getPopular = () => this.getData(`${this.SERVER}/tv/popular?api_key=${this.API_KEY}&language=ru-RU`)
    getTopWeek = () => this.getData(`${this.SERVER}/tv/on_the_air?api_key=${this.API_KEY}&language=ru-RU`)
    getTopToday = () => this.getData(`${this.SERVER}/tv/airing_today?api_key=${this.API_KEY}&language=ru-RU`)
}

const dbService = new DBService()

const renderCard = (response, target) => {
    tvShowList.textContent = ''

    if (!response.total_results) {
        loading.remove()
        tvShowsHead.textContent = 'к сожалению по вашему запросу ничего не найдено...'
        return
    }

    tvShowsHead.textContent = target ? target.textContent : 'Результат поиска:'
    response.results.forEach(item => {

        const {
            backdrop_path: backdrop,
            name: title,
            poster_path: poster,
            vote_average: vote,
            id
        } = item



        const posterIMG = poster ? IMG_URL + poster : 'img/no-poster.jpg'
        const backdropIMG = backdrop == null ? 'img/no-poster.jpg' : IMG_URL + backdrop
        const voteElem = vote ? ` <span class="tv-card__vote">${vote}</span> ` : ''

        const card = document.createElement('li')
        card.idTV = id
        card.classList.add('tv-shows__item')
        card.innerHTML = `
                    <a href="#" id="${id}" class="tv-card">
                        ${voteElem}
                        <img class="tv-card__img"
                             src="${posterIMG}"
                             data-backdrop="${backdropIMG}"
                             alt="${title}">
                        <h4 class="tv-card__head">${title}</h4>
                    </a>
            `
        loading.remove()
        tvShowList.append(card)
    })
    pagination.innerHTML = ''
    if (!target && response.total_pages > 1) {
        for (let i = 1; i <= response.total_pages; i++) {
            pagination.innerHTML += `<li><a href="#" class="pages">${i}</a></li>`
        }
    }
}

//Поиск
searchForm.addEventListener('submit', event => {
    event.preventDefault()
    const value = searchFormInput.value.trim()
    searchFormInput.value = ''
    if (value) {
        tvShows.append(loading)
        dbService.getSearchResults(value).then(renderCard)
    }

})

//открытие/закрытие меню

const closeDropdown = () => {
    dropdown.forEach(item => {
        item.classList.remove('active')

    })
}

hamburger.addEventListener('click', event => {
    leftMenu.classList.toggle('openMenu')
    hamburger.classList.toggle('open')
    closeDropdown()
})


document.addEventListener('click', event => {
    if (!event.target.closest('.left-menu')) {
        leftMenu.classList.remove('openMenu')
        hamburger.classList.remove('open')
        closeDropdown()

    }
})

leftMenu.addEventListener('click', event => {
    event.preventDefault()
    const target = event.target
    const dropdown = target.closest('.dropdown')

    if (dropdown) {
        dropdown.classList.toggle('active')
        leftMenu.classList.add('openMenu')
        hamburger.classList.add('open')
    }

    if (target.closest('#top-rated')) {
        tvShows.append(loading)
        dbService.getTopRated().then((response) => {
            renderCard(response, target)
        })

    }
    if (target.closest('#popular')) {
        tvShows.append(loading)
        dbService.getPopular().then((response) => {
            renderCard(response, target)
        })
    }

    if (target.closest('#week')) {
        tvShows.append(loading)
        dbService.getTopWeek().then((response) => {
            renderCard(response, target)
        })

    }
    if (target.closest('#today')) {
        tvShows.append(loading)
        dbService.getTopToday().then((response) => {
            renderCard(response, target)
        })
    }

    if (target.closest('#search')) {
        tvShowList.textContent = ''
        tvShowsHead.textContent = ''
    }
})
//

// открытие модального окна

tvShowList.addEventListener('click', event => {
    event.preventDefault()
    const target = event.target
    const card = target.closest('.tv-card')

    if (card) {
        preloader.style.display = 'block'
        new DBService()
            .getTvShow(card.id)
            .then(({
                poster_path: posterPath,
                name: title,
                genres,
                vote_average: voteAverage,
                overview,
                homepage
            }) => {
                if (posterPath) {
                    tvCardImg.src = IMG_URL + posterPath
                    tvCardImg.alt = title
                    posterWrapper.style.display = ''
                    modalContent.style.paddingLeft = ''
                } else {
                    posterWrapper.style.display = 'none'
                    modalContent.style.paddingLeft = '25px'
                }



                modalTitle.textContent = title
                genresList.textContent = ''
                for (const item of genres) {
                    genresList.innerHTML += `<li>${item.name}</li>`
                }

                rating.textContent = voteAverage
                description.textContent = overview
                modalLink.href = homepage
            })
            .then(() => {
                document.body.style.overflow = 'hidden'
                modal.classList.remove('hide')
            })
            .finally(() => {
                preloader.style.display = ''
            })

    }

})

//Закрытие 
modal.addEventListener('click', event => {


    if (event.target.closest('.cross') ||
        event.target.classList.contains('modal')) {
        document.body.style.overflow = ''
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

pagination.addEventListener('click', event => {
    event.preventDefault()
    const target = event.target
    if(target.classList.contains('pages')){
        tvShows.append(loading)
        dbService.getNextPage(target.textContent).then(renderCard)
    }
})