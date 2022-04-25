// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let money = JSON.parse(localStorage.getItem("amount"));
//console.log(money[0]);
document.getElementById("wallet").innerText=money[0];

let checkout_Movies = JSON.parse(localStorage.getItem("movie"));
// console.log(checkout_Movies);

checkout_Movies.map((el)=>{
  document.getElementById("movie").innerHTML=null;
  let div = document.createElement("div");

  let name = document.createElement("h3");
  name.innerText  = el.Title;

  let image = document.createElement("img");
  image.src = el.Poster;

  div.append(name,image);

  document.getElementById("movie").append(div);
})
  
let number1 = document.getElementById("num").value;




function confirm(){
  if(number1*100===Number(money[0])){
    alert("Booking successful!");
  }
  else{
    alert("Insufficient Balance!");
  }
}