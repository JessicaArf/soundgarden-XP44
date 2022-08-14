const url = "https://xp41-soundgarden-api.herokuapp.com/events";
const evento = document.querySelector("tbody")
const atracao = document.querySelector("#atracao")

function arrumarData (data) {
    let date = data.split(""); // cortar a data para adicionar o / nos lugares corretos
    let dataCorrigida =
      date.slice(8, 10).join("") +
      "/" +
      date.slice(5, 7).join("") +
      "/" +
      date.slice(0, 4).join("");

    return dataCorrigida;
  };

  async function todosEventos () {
    const response = await fetch(url);
    console.log(response)
    const resposta = await response.json();

    resposta.forEach((prop) => {
    atracao.innerHTML += ` <article class="evento card p-5 m-3">
    <h2>${prop.name} - ${arrumarData(prop.scheduled)}</h2>
    <h4>${prop.attractions}</h4>
    <p>${prop.description}</p>
    <button class="btn btn-primary" onclick="abreModal('${
      prop._id
    }')" >reservar ingresso</button>
    </article>`;
  })
    }

    todosEventos();