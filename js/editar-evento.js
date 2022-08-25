const inputNome = document.querySelector("#nome");
const inputAtracoes = document.querySelector("#atracoes");
const inputDescricao = document.querySelector("#descricao");
const inputData = document.querySelector("#data");
const inputLotacao = document.querySelector("#lotacao");
const inputPoster = document.querySelector("#banner");
const form = document.querySelector("form");
const URL = 'https://xp41-soundgarden-api.herokuapp.com/events';

const id = new URLSearchParams (window.location.search).get('id');

async function todosEventos () {

    const resultado = await fetch(`${URL}/${id}`);

    const resposta = await resultado.json();

    inputNome.value= resposta.name
    inputPoster.value= resposta.poster
    inputAtracoes.value= resposta.attractions
    inputDescricao.value = resposta.description
    inputData.value = resposta.scheduled.slice(0,16)
    inputLotacao.value= resposta.number_tickets
  
    }
    
    todosEventos();


async function editarEvento (eventoAtualizado) {
    const response = await fetch (`${URL}/${id}`, {
        method: "PUT",
        body: eventoAtualizado,
        headers: {
            "Content-type": "application/json",
        },
    },);

    const resultado = await response.json();
    console.log(response)

    if (response.status == 200) {
     alert("Evento editado com sucesso")
     window.location.href = "admin.html"
    }
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let eventoAtualizado = {
        name: inputNome.value,
        poster: inputPoster.value,
        attractions:[inputAtracoes.value],
        description: inputDescricao.value,
        scheduled:inputData.value,
        number_tickets: inputLotacao.value
    };
    
    eventoAtualizado = JSON.stringify(eventoAtualizado)

    editarEvento(eventoAtualizado);
});
