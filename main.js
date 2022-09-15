const pizzas = JSON.parse(localStorage.getItem('pizzas')) || [
    {
      id: 1,
      nombre: "pizza de Muzzarella",
      precio: 500,
      imagen: "./img/pizza-muzza.jpg",
      ingredientes: ["Salsa de Tomate", "Muzarella", "Aceitunas"]
    },
  
    {
      id: 2,
      nombre: "pizza de Cebolla",
      precio: 1500,
      imagen: "./img/pizza-cebolla.jpg",
      ingredientes: ["Cebolla", "Aceitunas"]
    },
  
    {
      id: 3,
      nombre: "pizza Napolitana",
      precio: 1350,
      imagen: "./img/pizza-napo.jpg",
      ingredientes: ["Salsa de Tomate", "Muzarella", "Tomate en Rodajas","Aceitunas"]
    },
  
    {
      id: 4,
      nombre: "pizza 4 Quesos",
      precio: 1380,
      imagen: "./img/pizza-4-quesos.jpg",
      ingredientes: ["Salsa de Tomate", "Muzarella","Roquefort","Provolone","Fontina", "Aceitunas"]
    },
  
    {
      id: 5,
      nombre: "pizza Especial",
      precio: 1000,
      imagen: "./img/pizza-especial.png",
      ingredientes: ["Salsa de Tomate", "Provolone","Jamón","Morron", "Aceitunas"]
    },
  
    {
      id: 6,
      nombre: "pizza con Anana",
      precio: 600,
      imagen: "./img/pizza-anana.jpg",
      ingredientes: ["Salsa de Tomate", "Muzarella","Ananá", "Aceitunas"]
    },
  ];

  const saveLocalStorage = pizzasList => {
    localStorage.setItem('pizzas', JSON.stringify(pizzasList));
  };
  
  

//Elementos a traer
const addForm = document.querySelector('#add-form');
const btnSend = document.querySelector('.btn-send');
const inputId = document.querySelector('.input-id');
const resultRender = document.querySelector('.container-result');


const addResult = e => {
    e.preventDefault();
    const valueInput = inputId.value.trim();
    inputId.value = '';

    if (!valueInput.length) return alert('Por favor, ingresa un ID para buscar') ;
    if (valueInput == 0) {
        alert("El Id debe ser distinto de Cero");
        return ;
    }

    if(Math.sign(valueInput)=== -1){
        alert("el numero no puede ser negativo");
        return; 
    }

    if (valueInput <= pizzas.length){
        const search = pizzas.find((pizza) => pizza.id == valueInput)

        resultRender.innerHTML = ` <div class="card flip-in-ver-right">
                                        <div class="card-detail">
                                            <div class="img" style="background-image: url('${search.imagen}');"></div>
                                            <div class="description">
                                              <div class="list-pizza">
                                                <h2 class="title">${search.nombre}</h2>
                                                    <h4>Ingredientes:</h4>
                                                    <p>${search.ingredientes.join(" , ")}</p>
                                              </div>
                                              <div class="price">$ ${search.precio}</div>
                                            </div>
                                        </div>
                                        
                                    </div>`;
                                    
        return;
    }else{
        resultRender.innerHTML = `
                                    <div class="card-error flip-in-ver-right">
                                      <div class="img" style="background-image: url('./img/pizza-error.jpg');"></div>
                                      <small>El ID ingresado no existe</small>
                                    </div>
                                  `;
        return;
    }

    
}



const init = () => {
    addForm.addEventListener('submit', addResult);
    saveLocalStorage(pizzas)
};

init();