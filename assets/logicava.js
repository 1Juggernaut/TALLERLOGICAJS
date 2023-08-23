// Punto No1
let formulariopt1 = document.querySelector("#formpunto1");
formulariopt1.addEventListener("submit", (Eventopt1) => {
  Eventopt1.preventDefault();
  let Npt1 = document.querySelector("#Numero1").value;
  let suma = 0;
  for (let i = 1; i <= Npt1; i++) {
    suma += i;
  }
  // si se quiere poner un alert
  // alert("Su suma es " + suma)

  let textpt1 = document.querySelector("#resultpt1");

  Swal.fire({
    title: "¡El resultado es " + suma + " !",
    imageUrl: "assets/img/imgspt2/gifpunto1.webp",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
  });
});

// Punto No 2😁
let formpunto2 = document.querySelector("#formpt2");

formpunto2.addEventListener("submit", (Pt2even) => {
  Pt2even.preventDefault();
  let valornumpt2 = document.querySelector("#Numeropt2").value;

  // otra forma para adquirir un valor de un input en un formulario
  // let valurnumpt2segundaforma = Pt2even.target.Numeropt2.value

  if (valornumpt2 % 2 == 0) {
    Swal.fire({
      title: "Es par ✌️😲!",
      imageUrl: "assets/img/imgspt2/gifpunto2par.gif",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
  } else {
    Swal.fire({
      title: "Es impar 👌😲!",
      imageUrl: "assets/img/imgspt2/gifpunto2impar.gif",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
  }
});

//Punto 3 👌
let formpt3 = document.querySelector("#questpt3");

formpt3.addEventListener("submit", (eregalo) => {
  eregalo.preventDefault();
  let edad = eregalo.target.edadpt3.value;
  let gender = eregalo.target.genderpt3.value;

  if (edad < 10) {
    if (gender == "Hombre" || gender == "hombre") {
      Swal.fire({
        title: "Te ganaste un jugo y una pizza de tres carnes!",
        text: "🧃 🍕🍗🍖",
        imageUrl: "assets/img/imgpt3/jugopizzamale.gif",
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: "Custom image",
      });
    } else if (gender == "Mujer" || gender == "mujer") {
      Swal.fire({
        title: "Te ganaste un jugo y una pizza Hawaiana!",
        text: "🧃 🍕",
        imageUrl: "assets/img/imgpt3/jugopizzafemale.gif",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Verifica los datos ingresados 🤨.",
        text: "Rectifica tu edad y tu género por favor. 😐",
      });
    }
  }

  if (edad > 18) {
    if (gender == "Hombre" || gender == "hombre") {
      Swal.fire({
        title: "Te ganaste una pola y una pizza de tres carnes!",
        text: "🍺 🍕🍗🍖",
        imageUrl: "assets/img/imgpt3/pizzapolamale.gif",
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: "Custom image",
      });
    } else if (gender == "Mujer" || gender == "mujer") {
      Swal.fire({
        title: "Te ganaste una pola y una pizza Hawaiana!",
        text: "🍺 🍕",
        imageUrl: "assets/img/imgpt3/pizzapolafemale.gif",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Verifica los datos ingresados 🤨.",
        text: "Rectifica tu edad y tu género por favor. 😐",
      });
    }
  }
  if (edad > 9 && edad <= 18) {
    Swal.fire({
      icon: "error",
      title: "Que lástima, no recibes premio.",
      text: "☹️",
    });
  }
});

// Punto 4 :)

let menusuario = [];

const Menucomida = [
  { nombre: "Pizza", precio: 14000 },
  { nombre: "Hamburguesa", precio: 19000 },
  { nombre: "Mazorcada", precio: 9500 },
  { nombre: "Perro caliente", precio: 12000 },
  { nombre: "Helado", precio: 8500 },
  { nombre: "Jugo", precio: 3000 },
];

let listacomidas = document.querySelector("#Listacomer");

for (
  let grillaproductos = 0;
  grillaproductos < Menucomida.length;
  grillaproductos++
) {
  listacomidas.innerHTML += `
    <li>${Menucomida[grillaproductos].nombre}  Valor : ${Menucomida[grillaproductos].precio}</li>
    `;
}

let frmpt4 = document.querySelector("#formulariopt4");

frmpt4.addEventListener("submit", (evn) => {
  evn.preventDefault();

  let comida = evn.target.comidaset.value;
  let filtrar = Menucomida.filter((Menuusu) => Menuusu.nombre == comida);

  if (comida == "pagar" || comida == "Pagar") {
    let preciototal = 0;

    menusuario.forEach((plato) => {
      preciototal = preciototal + plato.precio;
    });
    console.log("file: logicava.js:163 plato.precio:", preciototal);
    let divproductos = document.querySelector("#listproductospt4");

    divproductos.innerHTML += `
    Los productos seleccionados son: `;

    let totalpago = document.querySelector("#resultpt4");

    for (
      let grillausuario = 0;
      grillausuario < menusuario.length;
      grillausuario++
    ) {
      let Listausuario = document.querySelector("#Listausuario");
      Listausuario.innerHTML += `
      <li> ${Menucomida[grillausuario].nombre}</li>`;
    }
    totalpago.innerHTML += ` El total es ${preciototal}`;
  } else if (filtrar.length == 0) {
    Swal.fire({
      icon: "error",
      title: "Verifica los datos ingresados",
      text: " ☹️ ",
    });
  } else {
    menusuario.push(filtrar[0]);
    console.log(menusuario);
  }
});

let preciototal = 0;

menusuario.forEach((plato) => {
  preciototal = preciototal + plato.precio;
  console.log(preciototal);
});

// Punto 5 ^_^

let formpt5 = document.querySelector("#formpt5");

formpt5.addEventListener("submit", (even5) => {
  even5.preventDefault();
  let inputp5 = document.querySelector("#Numeropt5").value;
  console.log(inputp5);
  if (isNaN(inputp5) || inputp5 == 0) {
    Swal.fire({
      icon: "error",
      title: "Verifica los datos ingresados",
      text: " Solo números, y no funciona el 0.(Todo dará 0😒) ",
    });
  } else {
    let totalmult = 0;
    // array donde se guardara la sumatoria demultiplicacion

    let tablamult = "";
    // texto donde se guardara cada iteracion con su respectiva multiplicacion

    for (let i = 1; i < 11; i++) {
      let result = inputp5 * i;
      tablamult += `${inputp5} x ${i} = ${result} <br>`;
      totalmult += result;
    }
    let resultado5 = document.querySelector("#resultadonumero5");
    resultado5.innerHTML = `
    <p>Tabla de multiplicar de ${inputp5}:<br> ${tablamult}<br> Total multiplicacion: ${totalmult}.</p>`;
    console.log(totalmult);
  }
});

// PUNTO 6 :D
