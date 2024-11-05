const body = document.body

for (let i = 0; i < 28; i++) {
  const img = document.createElement('img');
  img.src = `Assets/images/button.png`;
  img.style.padding = '10px';
  body.appendChild(img);
}