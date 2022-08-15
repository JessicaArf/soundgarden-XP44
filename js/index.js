const url = "https://xp41-soundgarden-api.herokuapp.com/events";

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