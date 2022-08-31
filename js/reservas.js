const url = "https://xp41-soundgarden-api.herokuapp.com/bookings/event";
const novoEvento = document.querySelector("tbody")

//  função para formatar a data 
function arrumarData (data) {
    let date = data.split("");
    let dataCorrigida =
      date.slice(8, 10).join("") +
      "/" +
      date.slice(5, 7).join("") +
      "/" +
      date.slice(0, 4).join("");

    return dataCorrigida;
  };

const id = new URLSearchParams (window.location.search).get('id');

// função para listar as reservas 

async function todosEventos () {

    const response = await fetch(`${url}/${id}`)

       const resultado = await response.json();
      
       resultado.forEach((prop) => {
        novoEvento.innerHTML += `<tr> 
        <th scope="row">${resultado.indexOf(prop) + 1}</th>
        <td>${prop.owner_name}</td>
        <td>${prop.owner_email}</td>
        <td>${prop.number_tickets}</td>
        </tr>
        `
        })
}

todosEventos();

// função para abrir o menu

$('#menu-btn').click(() => {
$('#menu').toggleClass("active");}) 