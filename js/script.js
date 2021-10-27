const url = 'https://pokeapi.co/api/v2/pokemon/'

const card = document.querySelector('#card')
const btn = document.querySelector('#btn');

const getPokeData = () => {
    let id = Math.floor( Math.random() * 150 );
    const urlFinal = url + id
    console.log(urlFinal);

    fetch(urlFinal)
        .then( (response) => response.json())
        .then( (data) => generarCard(data));
};

const generarCard = (data) => {
    const hp = data.stats[0].base_stat;
    const imgSrc = data.sprites.other.dream_world.front_default;
    const pokeName = data.name;
    const statAttack = data.stats[1].base_stat;
    const statDefense = data.stats[2].base_stat;
    const statSpeed = data.stats[5].base_stat;

    card.innerHTML = `
    <p class="hp">
                <span>HP</span>
                ${hp}
            </p>
            <img src="${imgSrc}" alt="">
            <h2 class="poke-name">${pokeName}</h2>

            <div class="types">
                <span>Type 1</span>
                <span>Type 2</span>
            </div>

            <div class="stats">
                <div>
                    <h3>${statAttack}</h3>
                    <p>Attack</p>
                </div>

                <div>
                    <h3>${statDefense}</h3>
                    <p>Defense</p>
                </div>

                <div>
                    <h3>${statSpeed}</h3>
                    <p>Speed</p>
                </div>
            </div>

    `;

    console.log(statSpeed)
}


//Cuando se haga click en el boton se genera la solicitud a la api
btn.addEventListener('click', getPokeData);

//Cuando carga el documento genera un pokemon 
window.addEventListener('load', getPokeData);


