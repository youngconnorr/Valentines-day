function translateButton() {
    const button = document.getElementById('translateButton');
  
    const translationX = Math.random() * 500;
    const translationY = Math.random() * 300; 
    button.style.transform = `translate(${translationX}px, ${translationY}px)`;
  }

function changePage() {
    document.body.innerHTML = '';

    const photoContainer = document.createElement('div');
    photoContainer.id = 'photo-container';
    photoContainer.class = 'container center-vertically'
  
    const photo = document.createElement('img');
    photo.src = 'cat-cat-thumbs-up.gif'; 
    photo.alt = 'Photo';
  
    photoContainer.appendChild(photo);
  
    document.body.appendChild(photoContainer);
}