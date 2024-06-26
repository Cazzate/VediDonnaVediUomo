const buttonDonna = document.getElementById("donna");
const buttonUomo = document.getElementById("uomo");
const div = document.getElementById("div");


buttonDonna.addEventListener('click', () =>{
    buttonDonna.remove();
    const img = document.createElement('img');
    img.src = "./assets/donna.jpeg";
    div.appendChild(img);
});
buttonUomo.addEventListener('click', () =>{
    buttonUomo.remove();
    const img = document.createElement('img');
    img.src = "./assets/uomo.jpeg";
    div.appendChild(img);
});

document.addEventListener('DOMContentLoaded', function () {
    let typedWord = '';
    document.addEventListener('keydown', function (event) {
      typedWord += event.key.toLowerCase();
      if (typedWord.includes('orso')) {
        const buttonOrso = document.createElement('button');
        buttonOrso.textContent = "Vedi Orso";
        buttonOrso.className = "button-18";
        buttonOrso.addEventListener('click', () =>{
            buttonOrso.remove();
            const img = document.createElement('img');
            img.src = "./assets/orso.jpeg";
            div.appendChild(img);
        });
        div.appendChild(buttonOrso);
        typedWord = '';
      }
    });
  });