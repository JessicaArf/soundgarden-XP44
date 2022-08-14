const url = "https://xp41-soundgarden-api.herokuapp.com/events";
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

async function todosEventos () {

    const response = await fetch(url)

       const resultado = await response.json();
      
       resultado.forEach((prop) => {
        novoEvento.innerHTML += `<tr> 
        <th scope="row">${resultado.indexOf(prop) + 1}</th>
        <td>${arrumarData(prop.scheduled)}</td>
        <td>${prop.name}</td>
        <td>${prop.attractions}</td>
        <td>
        <a href="reservas.html?id=${prop._id}" class="btn btn-dark">ver reservas</a>
        <a href="editar-evento.html?id=${prop._id}" class="btn btn-secondary">editar</a>
        <a href="excluir-evento.html?id=${prop._id}" class="btn btn-danger">excluir</a>
        </td>
        </tr>
        `

        
    })

}

todosEventos();