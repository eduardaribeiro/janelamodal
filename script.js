function abrirmodal(){
  const modal = document.getElementById ('janelamodal')
  modal.classList .add('abrir')
  
  modal.addEventListener('click',(e) => {
    if(e.target.id == 'janelamodal' || e.target.id =="fechar"){
        modal.classList.remove ('abrir')
        localStorage.fechar = 'janelamodal'
    }
  })

}


let arrayObj = [
  {
    id: 593,
    nome: "Bola de Futebol",
    preco: "39.00",
  },
  {
    id: 296,
    nome: "Chuteira",
    preco: "120.00",
  },
  {
    id: 490,
    nome: "Raquete de de tenis",
    preco: "320.00",
  },
  {
    id: 852,
    nome: "Luva de boxe",
    preco: "109.00",
  },
  {
    id: 353,
    nome: "Bola de Basquete",
    preco: "50.00",
  },
  {
    id: 623,
    nome: "Camisa do Vasco",
    preco: "160.00",
  },
  {
    id: 500,
    nome: "Mesa de ping pong",
    preco: "1000.00",
  },
];

const listaProdutos = document.getElementById('listaProdutos');


function listar() {
  let corpo = document.querySelector("#corpo");
  for (let index = 0; index < arrayObj.length; index++) {
    let row = document.createElement("tr");
    row.innerHTML = `   <td>${arrayObj[index].id}</td>
                            <td>${arrayObj[index].nome}</td>
                            <td>${arrayObj[index].preco}</td>
                            <td><button class="btn btn-warning">Editar</button></td>
                            <td><button class="btn btn-danger">Deletar</button></td>
                            `;

    corpo.appendChild(row);
  }
}
listar();


function exibirProdutos() {
  const listaProdutos = document.getElementById('arrayObj');
  arrayObj.innerHTML = '';
  arrayObj.forEach(arrayObj => {
      const li = document.createElement('li');
      li.textContent = arrayObj;
      listaProdutos.appendChild(li);
  });
}

exibirProdutos();

