function translateButton() {
    const button = document.getElementById('translateButton');
  
    const translationX = Math.random() * 500;
    const translationY = Math.random() * 200; 
    button.style.transform = `translate(${translationX}px, ${translationY}px)`;
  }

function changePage() {
    document.body.innerHTML = '';
    
    const photoContainer = document.createElement('div');
    photoContainer.id = 'photo-container';
    photoContainer.class = 'container center-vertically'
    
    const photo = document.createElement('img');
    photo.src = 'cat-gif.gif'; 
    photo.width = 200;
    photo.alt = 'Photo';

    const yes = document.createElement('div');
    yes.textContent = '-----okay :)'
    yes.className = ''
    
    photoContainer.appendChild(photo);
    photoContainer.appendChild(yes);
    
    document.body.appendChild(photoContainer);
}

let makeBigger = 1;
function makeYesBigger() {
    makeBigger = 1 + makeBigger;
    const buttonYes = document.getElementById('buttonYes');
    buttonYes.style.transform = `scale(${makeBigger})`;
}