//const element = document.createElement("h1")  CREAMOS EL ELEMENTO EN PROMER LÑUGAR
//element.innerText = "Hello React"  SEGUNDO ESPECIFICAMOS LA CADENA QUE QUEREMOS QUE SE MUESTRE
//const container = document.getElementById("root")  |
//container.appendChild(element);



import React from "react";
import ReactDOM from "react-dom";


// objeto 
const user = {
  firsName: "Adrian",
  lastName: "Pucheta",
  avatar: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2022/03/avatar-facebook-2632445.jpg?itok=lsD0KFxA",
  edad: 44
};




 // esta funcion emprime los valores del objeto user
function getName(user) {
  return user.firsName + " " + user.lastName + " " + user.edad +  "años" ;
};



// esta funcion implime los valores del objeto user y si no le pasamos un objeto retorna un string
function getGereeting(user) {
  if (user) {
    return <h1>Hello{getName(user)}</h1>
  }
  return <h1>Hello Stranger</h1>
};




// en estas constante define que se va a imprimir.
const element = (


  // Elementos padres e hijos
  <div>
    <h3>{getGereeting(user)}</h3>
    <img src={user.avatar} alt="imagen avatar" />
  </div>
)



const container2 = document.getElementById("root");


//ReactDOM.render(__QUE__DONDE)
ReactDOM.render(element, container2);
