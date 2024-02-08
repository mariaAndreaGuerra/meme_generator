document.addEventListener("DOMContentLoaded", function() {
  let memeForm = document.getElementById("meme-form");
  let listGallery = document.querySelector(".gallery");

  memeForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let memeLi = document.createElement('li');
    memeLi.classList.add("meme-img");

    let topText = document.getElementById("text-top");
    let urlInput = document.getElementById('uploaded-img').value,
      src = urlInput,
      img = document.createElement('img');
    img.src = src;

    let topTextDiv = document.createElement('div');
    topTextDiv.classList.add("text", "top");
    topTextDiv.innerText = document.getElementById("text-top").value;


    let bottomTextDiv = document.createElement('div');
    bottomTextDiv.classList.add("text", "bottom");
    bottomTextDiv.innerText = document.getElementById("text-bottom").value;

    let removeDiv = document.createElement('div');
    removeDiv.classList.add("black-cross");
    removeDiv.innerText = "X";
    removeDiv.style.color = "black";



    listGallery.appendChild(memeLi);
    memeLi.appendChild(img);
    memeLi.appendChild(topTextDiv);
    memeLi.appendChild(bottomTextDiv);
    memeLi.appendChild(removeDiv);
    
    memeForm.reset();
  });

  function remove(event) {
    event.target.parentNode.remove();
  }

  listGallery.addEventListener('click', remove, false);

});