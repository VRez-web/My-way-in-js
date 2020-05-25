fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')
    .then((res) => res.json())
    .then((data) => setHeroes(data))



function setHeroes({
    squadName,
    homeTown,
    formed,
    members
}) {
    document.body.insertAdjacentHTML(
        'afterbegin',
        `
            <h1>${squadName}</h1>
            <h2>Hometown:${homeTown} // Formed: ${formed}</h2>
            <div class="heroes">${setMembers(members)}</div>
            `
    )
}

function setMembers(members) {
    return members.map((hero) => `<div>
        <h3>${hero.name}</h3>
        <p>secretIdentity: ${hero.secretIdentity}</p>
        <p>Age: ${hero.age}</p>
        <p>Superpowers:</p>
        <ul>
        ${hero.powers.map(power =>`<li>${power}</li>`).join(' ')}
        </ul>
        </div>
        `).join(' ')
}
/*
Поработал с методом fetch и форматом файла json, а также почитал про API
ссылка на статью по который практиковался:https://developer.mozilla.org/ru/docs/Learn/JavaScript/%D0%9E%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%8B/JSON
*/