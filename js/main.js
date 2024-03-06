

//------- API ---> AJAX  ---> async js and xml(built in objct);
// XMLHttpRequest
// https method      -> url --> api
/*
  - GET --> GET DATA from server
  - POST --> Send Data to server
  - PUT --> Update Server
  - Delete --> Delete Data From Server
*/

var data = [];


var links = document.querySelectorAll(".home .nav-link");

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click' ,function(e){
        var curentText =   e.target.innerHTML;//text-->pizza

        getApiData(curentText)

    } )
}

getApiData('pizza')
var data = [];

async function getApiData(meal) {
  var https = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${meal}`);
  var response = await https.json();
  console.log(https)
  

  data = response.recipes;

  console.log("dataaa",data)
  displayData();
}

function displayData() {
   var cols = ``;
   for (var i = 0; i < data.length; i++) {
      cols += `
      <div class="col-md-4">
      <div class="card">
         <img class="card-img-top hambozo" src="${data[i].image_url}" alt="Title">

         <div class="card-body">
            <h4 class="card-title">${data[i].title}</h4>
            <a target="_blank" href="${data[i].source_url}" class="btn btn-info">Source</a>
         </div>
      </div>
   </div>
    `;
   }

   document.getElementById("colsData").innerHTML = cols;
}

// getPasta();// async--> non-blocking;--> 30m 10m
// getPizza();// async--> non-blocking;--> 30m 10m

// test1();// sync ---> block;

// test2();// sync ---> block;

/* 3-Controll --> async
  1-callbacks ->

  2-Promise-->

  3-async-await ---> --
*/






