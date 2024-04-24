var guestArray = [
    "João Silva",
    "Maria Souza",
    "Pedro Santos",
    "Ana Oliveira",
    "Luiz Costa",
    "Carolina Almeida",
    "Rafael Rocha",
    "Fernanda Fernandes",
    "Gustavo Lima",
    "Juliana Santos",
    "Marcos Castro",
    "Sandra Pereira",
    "Lucas Mendes",
    "Amanda Rodrigues",
    "Diego Gomes",
    "Larissa Barbosa",
    "Ricardo Alves",
    "Camila Sousa",
    "Gabriel Castro",
    "Mariana Cardoso"
  ];
  
  var guestList = document.getElementById("guestList");
  
  for (var i = 0; i < guestArray.length; i++) {
    var listItem = document.createElement("li");
    listItem.innerText = guestArray[i];
    listItem.classList.add("animated-item");
    guestList.appendChild(listItem);
  }