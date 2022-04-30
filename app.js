let days = 7 ;
let workCount = 0;




const workInput = document.querySelector("#workInput");
const workForm = document.querySelector("#workForm");
const workBtn = document.querySelector("#workButton");
const tableTd = document.querySelectorAll("table tbody tr td");
 
let tableTr = document.querySelector("table tbody tr");

const tableBody = document.querySelector("table tbody");

// document.addEventListener("click", ()=> {
//   console.log("vasif");
// })  


// workInput.addEventListener("keyup",(a)=>{
//   a.preventDefault();
//   tableTr.innerHTML += workInput.value.trim();
//   workCount++;
// })

// function myFunction(){
//   console.log("object");
// }



workForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (workCount < days) {
    tableTr.innerHTML += `<td>${workInput.value}</td>`;
    workCount++;
  };
  
  if (workCount === days) {
    workCount = 0;
    // let newRow = document.createElement("tr");
    let rasim = document.createElement("select")
    // tableTr = newRow;
    tableTr = rasim
    // tableBody.appendChild(newRow);
    tableBody.appendChild(rasim);
  }
});



