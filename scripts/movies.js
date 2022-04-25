// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let movie_div = document.getElementById("movies");

let money = JSON.parse(localStorage.getItem("amount"));
//console.log(money[0]);
document.getElementById("wallet").innerText=money;

let objArr = JSON.parse(localStorage.getItem("movie"))||[];
let flag;

async function allMovies(){
  try{
    const query = document.getElementById("search").value;

    let res = await fetch (`https://www.omdbapi.com/?s=${query}&apikey=4f4ec76e`);
    //console.log(res);
    let data = await res.json();
    
    //console.log(data.Search);
    appendMovies(data.Search)
  }catch(err){
    console.log(err);
  }
}

function appendMovies(data){
  if(data === undefined){
    return false;
  }
  movie_div.innerHTML=null;
  data.map((el)=>{
    //console.log(el)
    let box = document.createElement("div");
    box.setAttribute("id","box");

    let image = document.createElement("img");
    image.src = el.Poster;
    image.setAttribute("class","img");
    //console.log(el.Poster);
    let name = document.createElement("p");
    name.innerText = el.Title;

    let btn = document.createElement("button");
    btn.innerText = "Book Now";
    btn.setAttribute("class","book_now");
    btn.addEventListener("click",function(){
      bookMovies(el);
    })

    box.append(image,name,btn);
    document.getElementById("movies").append(box);
    
  })
}

function bookMovies(el){
  objArr.push(el);
  localStorage.setItem(("movie"),JSON.stringify(objArr));
  window.location.href = "checkout.html";
}

function debounce(func,Delay){
  if(flag){
    clearTimeout(flag);
  }
  flag=setTimeout(function(){
    func();
  },Delay);
}
