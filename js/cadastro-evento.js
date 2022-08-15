const inputNome = document.querySelector("#nome");
const inputAtracoes = document.querySelector("#atracoes");
const inputDescricao = document.querySelector("#descricao");
const inputData = document.querySelector("#data");
const inputLotacao = document.querySelector("#lotacao");
const inputPoster = document.querySelector("#poster");
const form = document.querySelector("form");
const url = "https://xp41-soundgarden-api.herokuapp.com/events"


async function postEvento (evento) {
    const response = await fetch (`${url}`, {
        method: "POST",
        body: evento,
        headers: {
            "Content-type": "application/json",
        },
    },);

    const resultado = await response.json();
    console.log(response)

    if (response.status == 201) {
     alert("Evento cadastrado com sucesso")
     window.location.href = "admin.html"
    }
};

form.addEventListener("submit", (e) => {
e.preventDefault();

let evento = {
    "name":inputNome.value,
    "poster":inputPoster.value,
    "attractions":[inputAtracoes.value],
    "description": inputDescricao.value,
    "scheduled":inputData.value,
    "number_tickets": inputLotacao.value
};

evento = JSON.stringify(evento)

postEvento(evento);

});


