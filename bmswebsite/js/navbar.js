fetch('navbar.html')
.then(res => res.text())
.then(text=>); {  
  let oldelem = document.querySelector("script#replace_with_navbar");
  let newlem = document.createElement("div")
  newlem.innerHTML = text; oldelem.parentNode.replaceChild(newlem,oldem);}


document.getElementById('nav').innerHTML =html;