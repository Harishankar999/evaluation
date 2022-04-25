// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let money = JSON.parse(localStorage.getItem("amount"));
//console.log(money[0]);
document.getElementById("wallet").innerText=money;

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
  








function confirm(){
  let seat = document.getElementById("num").value;

  let p = seat*100;
  if(p<=Number(money)){
    let amount = Number(money)-p;
    document.getElementById("wallet").innerText=amount;
    localStorage.setItem("amount",amount);
    alert("Booking successful!");
  }
  else{
    alert("Insufficient Balance!");
  }
}