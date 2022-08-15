const url = "https://xp41-soundgarden-api.herokuapp.com";
const evento = document.querySelector("#atracoes")
const btnopen = document.querySelector(".btnopen")
const inputID = document.querySelector("#inputId")
const modal = document.querySelector("#modal")
const btn = document.querySelector("#btn-fecha")
const twoBtn = document.querySelector("#twobtn-fecha")
const nome = document.querySelector("#name")
const email = document.querySelector("#email")
const ticket = document.querySelector("#lotacao")
const btnEnviar = document.querySelector("#btn-enviar")


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
    const response = await fetch(`${url}/events`);
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
      const resposta = await fetch(`${url}/events/${id}`);}

      btn.addEventListener('click', function fechaModal () {
        modal.setAttribute("style", "display:none");
        nome.value = "";
        email.value = "";
        inputID.value ="";
      });

      twoBtn.addEventListener('click', function fecharModal () {
        modal.setAttribute("style", "display:none");
        nome.value = "";
        email.value = "";
        inputID.value ="";
      });
        
      btnEnviar.addEventListener('click', async function criarReserva (e) {
        e.preventDefault();

        const reserva = {
        "owner_name": nome.value,
        "owner_email": email.value,
        "number_tickets": lotacao.value,
        "event_id":inputID.value
        }

        const response = await fetch(`${url}/bookings`, {
        method:"POST",
        body: JSON.stringify(reserva),
        headers: {
          "Content-type": "application/json",
      },},)

      const resultado = await response.json();
      console.log(response)

    if (response.status == 201) {
     alert("Reserva efetuada com sucesso")
     window.location.href = "admin.html"
    }
      })

