var contentEle = document.body.querySelector(".content");
contentEle.innerHTML = "Home Page";
function makeHome() {
  var homeEle = document.createElement("h1");
  homeEle.innerHTML = "Home Page";
  contentEle.appendChild(homeEle);
}

function makeAbout() {
  var aboutEle = document.createElement("h1");
  aboutEle.innerHTML = "About Page";
  contentEle.appendChild(aboutEle);
  var mynameEle = document.createElement("h3");
  mynameEle.innerHTML = "Khajonpop C.";
  contentEle.appendChild(mynameEle)
} 
function makeInteract() {
   var interactEle = document.createElement("h1");
  interactEle.innerHTML = "Interact Page";
  contentEle.appendChild(interactEle);
  var button = document.createElement("button");
button.innerHTML = "Counter Button";
  
  var body = document.getElementsByTagName("body")[0];
body.appendChild(button);
  
    var countnumber= 0;
function counter(number) {
     countnumber= countnumber + number;
   document.body.querySelector(".content").innerHTML=
      countnumber; 
}
 document.body.querySelector(".content").addEventListener("click", function () {
  counter(1, "");
}); 
    
}
 

document.body
  .querySelector(".homeButt")
  .addEventListener("click", function () {
  makeHome();
});

document.body
  .querySelector(".aboutButt")
  .addEventListener("click", function () {
    makeAbout();
  });

document.body
  .querySelector(".interactButt")
  .addEventListener("click", function() {          
    makeInteract();
   });