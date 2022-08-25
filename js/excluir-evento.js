const inputNome = document.querySelector("#nome");
const inputAtracoes = document.querySelector("#atracoes");
const inputDescricao = document.querySelector("#descricao");
const inputData = document.querySelector("#data");
const inputLotacao = document.querySelector("#lotacao");
const inputPoster = document.querySelector("#banner");
const form = document.querySelector("form");
const URL = 'https://xp41-soundgarden-api.herokuapp.com/events';

const id = new URLSearchParams (window.location.search).get('id');

function arrumarData (data) {
    let date = data.split("");
    let dataCorrigida =
      date.slice(8, 10).join("") +
      "/" +
      date.slice(5, 7).join("") +
      "/" +
      date.slice(0, 4).join("") + 
      "  " +
      date.slice(11,19).join("") 
    

    return dataCorrigida;
  };

async function todosEventos () {

    const resultado = await fetch(`${URL}/${id}`);
    
    const resposta = await resultado.json();
    
    inputNome.value= resposta.name
    inputPoster.value= resposta.poster
    inputAtracoes.value= resposta.attractions
    inputDescricao.value = resposta.description
    inputData.value= arrumarData(resposta.scheduled)
    inputLotacao.value= resposta.number_tickets
  
    }
    
    todosEventos();

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const response = await fetch (`${URL}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json",
        },
    },);

    if (response.status == 204) {
     alert("Evento excluído com sucesso")
     window.location.href = "admin.html"
    }
});



