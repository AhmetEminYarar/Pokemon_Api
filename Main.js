 document.querySelector(`#search`).addEventListener("click",GetPokemon);
function GetPokemon(e)
{
    const name= document.querySelector(`#pokemonName`).value;

    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(response => response.json())
    .then (data=>{
        document.querySelector(`.pokemonbox`).innerHTML=`       
            <div class="pokemonimg">
                <img 
                src="${data.sprites.other["official-artwork"].front_default}" 
                alt="${data.name}"
                />
            </div>
            <div class="pokemoninfo">
                <h1>${data.name}</h1>
                <p>${data.weight}</p>
            </div>       
        `;       
    })
    .catch(err=>{
        console.log('Hata !!!',err);
    });
}
GetPokemon();