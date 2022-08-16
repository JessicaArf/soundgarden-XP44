const url = "https://xp41-soundgarden-api.herokuapp.com/bookings/event";
const novoEvento = document.querySelector("tbody")


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

const id = new URLSearchParams (window.location.search).get('id');

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