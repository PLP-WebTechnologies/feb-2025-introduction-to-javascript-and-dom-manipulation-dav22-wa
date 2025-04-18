document.getElementById('changeTextBtn').addEventListener('click', () => {
  const heading = document.getElementById('main-heading');
  heading.textContent = 'Text Changed!';
  heading.style.color = 'crimson';
  heading.style.fontSize = '2.5rem';
});

document.getElementById('toggleBoxBtn').addEventListener('click', () => {
  let box = document.getElementById('dynamic-box');

  if (box) {
    box.remove();
  } else {
    box = document.createElement('div');
    box.id = 'dynamic-box';
    box.textContent = 'I am a new box!';
    box.style.backgroundColor = '#333';
    box.style.color = '#fff';
    box.style.padding = '20px';
    box.style.marginTop = '10px';
    document.body.appendChild(box);
  }
});
