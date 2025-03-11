
const closeNoise = new Audio('WEBSITE/audio/pow.mp3');

document.getElementById('openLightbox').addEventListener('click', function(event) {
  event.preventDefault();
  const lightbox = document.getElementById('lightbox');
  lightbox.style.display = 'flex';  
  setTimeout(() => {
    lightbox.classList.add('show');  
  }, 10); 
  document.getElementById('lightboxText').classList.add('fade-in');
});


document.getElementById('closeLightbox').addEventListener('click', function() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('show'); 
  document.getElementById('lightboxText').classList.remove('fade-in');
  closeNoise.play();  
  
  
  setTimeout(() => {
    lightbox.style.display = 'none';
  }, 500); 
});


document.getElementById('lightbox').addEventListener('click', function(event) {
  if (event.target === this) {  
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('show');  
    document.getElementById('lightboxText').classList.remove('fade-in');
    closeNoise.play();  

   
    setTimeout(() => {
      lightbox.style.display = 'none';
    }, 500); 
  }
});


const hieroglyphs = [
  "𓀀", "𓀁", "𓀂", "𓀃", "𓀄", "𓀅", "𓀆", "𓀇",
  "𓀈", "𓀉", "𓀊", "𓀋", "𓀌", "𓀍", "𓀎", "𓀏",
  "𓀐", "𓀑", "𓀒", "𓀓", "𓀔", "𓀕", "𓀖", "𓀗",
  "𓀘", "𓀙", "𓀚", "𓀛", "𓀜", "𓀝", "𓀞", "𓀟",
  "𓀠", "𓀡", "𓀢", "𓀣", "𓀤", "𓀥", "𓀦", "𓀧",
  "𓀨", "𓀩", "𓀪", "𓀫", "𓀬", "𓀭", "𓀮", "𓀯",
  "𓀰", "𓀱", "𓀲", "𓀳", "𓀴", "𓀵", "𓀶", "𓀷",
  "𓀸", "𓀹", "𓀺", "𓀻", "𓀼", "𓀽", "𓀾", "𓀿",
  "𓁀", "𓁁", "𓁂", "𓁃", "𓁄", "𓁅", "𓁆", "𓁇",
];

const background = document.querySelector(".background");

function createGlyph() {
  const glyph = document.createElement("div");
  glyph.classList.add("glyph");

  glyph.textContent = hieroglyphs[Math.floor(Math.random() * hieroglyphs.length)];


  glyph.style.left = Math.random() * 100 + "vw"; 
  glyph.style.top = Math.random() * 100 + "vh";
  glyph.style.fontSize = Math.random() * 20 + 20 + "px"; 
  glyph.style.animationDuration = Math.random() * 1 + 0.8 + "s"; 

  background.appendChild(glyph);


  setTimeout(() => {
    glyph.remove();
  }, 5000);
}

function createDustyGlyph() {
  const glyph = document.createElement("div");
  glyph.classList.add("glyph", "dusty");

  glyph.textContent = hieroglyphs[Math.floor(Math.random() * hieroglyphs.length)];

  glyph.style.left = Math.random() * 100 + "vw"; 
  glyph.style.top = Math.random() * 100 + "vh";
  glyph.style.fontSize = Math.random() * 10 + 8 + "px"; 
  glyph.style.animationDuration = Math.random() * 1 + 1.2 + "s"; 

  background.appendChild(glyph);

  setTimeout(() => {
    glyph.remove();
  }, 8000);
}

setInterval(createGlyph, 100); 
setInterval(createDustyGlyph, 300); 



const proceedButton = document.getElementById('proceed-btn');
const hoverSound = document.getElementById('hover-sound');

proceedButton.addEventListener('mouseenter', () => {
  hoverSound.currentTime = 0;
  hoverSound.play();
});


const proceedLink = document.getElementById('proceed-btn');

proceedLink.style.pointerEvents = 'none'; 

document.querySelector('.kapow').addEventListener('click', function() {
proceedLink.style.pointerEvents = 'auto'; 

proceedLink.classList.add("active"); 


var audio = document.getElementById('background-music');
audio.muted = false;
audio.play(); 
});


const hoverSound2 = document.getElementById('hover');
hoverSound2.volume = 0.7;


hoverSound2.loop = true;


document.addEventListener('mouseover', () => {
if (hoverSound2.paused) {
  hoverSound2.play();
}
});


const hoverSound3 = document.getElementById('hover2');
hoverSound3.volume = 0.9;

hoverSound3.loop = true;

const scanlinesElement = document.getElementById('scanlines');

scanlinesElement.addEventListener('mouseover', () => {
if (hoverSound3.paused) {
  hoverSound3.play();
}
});

const specialGlyph = document.querySelector('.special-glyph');

document.addEventListener("DOMContentLoaded", () => {
specialGlyph.addEventListener("click", () => {
  proceedButton.classList.add("active");
});
});

