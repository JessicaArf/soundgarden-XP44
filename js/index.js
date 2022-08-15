const url = "https://xp41-soundgarden-api.herokuapp.com/events";
const evento = document.querySelector("#atracoes")
const btnopen = document.querySelector(".btnopen")
const inputID = document.querySelector("#inputId")
const modal = document.querySelector("#modal")
const btn = document.querySelector("#btn-fecha")
const twoBtn = document.querySelector("#twobtn-fecha")
const nome = document.querySelector("#name")
const email = document.querySelector("#email")

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

  async function showModal(id) {
    modal.setAttribute("style", "display:flex");
    inputID.value = id;
    const resposta = await fetch(`${url}/${id}`);}

  async function todosEventos () {
    const response = await fetch(url);
    console.log(response)

    const resposta = await response.json();
    const atracoes = resposta.slice(0,3);
    atracoes.forEach((prop) => {
    evento.innerHTML += ` <article class="evento card p-5 m-3">
    <h2>${prop.name} - ${arrumarData(prop.scheduled)}</h2>
    <h4>${prop.attractions}</h4>
    <p>${prop.description}</p>
    <button class="btn btn-primary" onclick="showModal('${prop._id}')" >reservar ingresso</button>
    </article>`;
  })}

    todosEventos();

    async function showModal(id) {
      modal.setAttribute("style", "display:flex");
      inputID.value = id;
      const resposta = await fetch(`${url}/${id}`);}

      btn.addEventListener('click', function fechaModal () {
        modal.setAttribute("style", "display:none");
        nome.value = "";
        email.value = "";
        inputID.value ="";
      });

      twoBtn.addEventListener('click', function fechaModal () {
        modal.setAttribute("style", "display:none");
        nome.value = "";
        email.value = "";
        inputID.value ="";
      });
