
function GetPokemon()
{

    
    for (var i = 0; i <= 20; i++) 
    {    
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then(response => response.json())
            .then (data=>{               
                var box = `<div class="pokemonimg"><img src='${data.sprites.other["official-artwork"].front_default}' alt='${data.name}' /></div> <div class="pokemoninfo" > <h1>${data.name}</h1> <p>${data.weight}</p> </div> `;
                document.getElementById("container").innerHTML += box;                
            })
            .catch(err=>{
                console.log('Hata !!!',err);
            });
    }
}
GetPokemon();