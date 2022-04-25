// Store the wallet amount to your local storage with key "amount"

 function getbyId(id){
    return document.getElementById(id).value;
  }
  
  let twallet = JSON.parse(localStorage.getItem("amount"))||[];
  
  function addWallet(){
    let amount = getbyId("amount");
  console.log(amount);
    let wallet = document.querySelector("#wallet");
    wallet.innerText=amount;
    // console.log(typeof twallet[0])
    twallet.push(wallet.innerHTML);
    localStorage.setItem(("amount"),JSON.stringify(twallet));
  }
  
        
  function bookMovies(){
    window.location.href="movies.html";
  }
  


// let money = document.getElementById("amount").value;
// console.log(money);
// function addWallet(){
//     let total = document.getElementById("wallet").innerText;

//     total.innerText = money.reduce(function(sum){
//         console.log(sum+money);
//         return sum+money;
//     },0)
// }