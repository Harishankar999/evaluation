// Store the wallet amount to your local storage with key "amount"

 function getbyId(id){
    return document.getElementById(id).value;
  }
  
  let twallet = JSON.parse(localStorage.getItem("amount"))||0;
  let wallet = document.querySelector("#wallet");
   
  function addWallet(){
    let amount = getbyId("amount");
    
    twallet = Number(twallet)+Number(amount);
    wallet.innerText=twallet;
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