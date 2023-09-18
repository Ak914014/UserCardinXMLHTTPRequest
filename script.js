const divEle = document.querySelector(".card-container");
function getDetails(id) {
  const req = new XMLHttpRequest();
  req.open("GET", `https://dummyjson.com/users/${id}`);
  req.send();


  //  _________ we are creating that when we call a id then the pervious and the after one come and 
  //  with the styling we can set which is calling 

  req.addEventListener("load", function () {
    // console.log ( JSON.parse(req.responseText));
    if(req.status === 404){return};
    const data = JSON.parse(req.responseText);
    console.log(data);

    //  we are seting the postion of that card by using this 
    displayUser(data,"beforeend");

    const req2 = new XMLHttpRequest();
//  creating new request variabel and -1 for perivous and +1 for adter one 


    req2.open("GET", `https://dummyjson.com/users/${id-1}`);
    req2.send();
  
    req2.addEventListener("load", function () {

      // if the edge of the data is comes 
      if(req2.status === 404){return};
      // console.log ( JSON.parse(req.responseText));
      const data = JSON.parse(req2.responseText);
      console.log(data);
      displayUser(data,"afterbegin" ,'other');
      });
      const req3 = new XMLHttpRequest();
    req3.open("GET", `https://dummyjson.com/users/${id+1}`);
    req3.send();
  
    req3.addEventListener("load", function () {
      if(req3.status === 404){return};
      // console.log ( JSON.parse(req.responseText));
      const data = JSON.parse(req3.responseText);
      console.log(data);
      displayUser(data,'beforeend','other');
      });
    });
}

function displayUser(data, pos, className=''){
  const card = `<div class="user-card ${className}">
  <img src=${data.image} alt="Profile Image" />
  <h3>${data.firstName}</h3>
  <h3>${data.lastName}</h3>
  <p class="email">${data.email}</p>
  <button class="btn">View Profile</button>
  </div>
</div>`;
  // divEle.insertAdjacentHTML("beforeend", card);

  //  insertAdjacentHtml will adjust if we calling same funtion or element and we can 
  //  set the postion by giv the argument beforeend afterend beforebegin and the elemnet we 
  // wanna append in html 
  divEle.insertAdjacentHTML(pos, card);
}
getDetails(1)