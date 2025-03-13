document.addEventListener("DOMContentLoaded", function () {
  const continueButton = document.getElementById("clous-btn");
  const powerSound = document.getElementById("power-sound");

  continueButton.addEventListener("click", function () {
    powerSound.play();

    
    document.querySelector(".contentss-box").classList.add("hidden");
    document.querySelector(".overlay").classList.add("hidden");
    document.querySelector(".scanline-overlay").classList.add("hidden");
  });
});

window.onload = function () {
  document.querySelector('.scanline').style.animationPlayState = 'running';
};

document.querySelectorAll(".d-container").forEach(container => {
  const img = container.querySelector("img");

  // Store original src
  const originalSrc = img.src;
  const hoverSrc = img.getAttribute("data-hover");

  container.addEventListener("mouseenter", () => {
    img.src = hoverSrc;
  });

  container.addEventListener("mouseleave", () => {
    img.src = originalSrc;
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const imageContainers = document.querySelectorAll('.d-container');

  // Get the audio element
  const kawaiiAudio = new Audio('audio/kawaii.mp3');

  imageContainers.forEach(container => {
    container.addEventListener('click', function () {
      kawaiiAudio.play();
    });
  });
});



// Messages for different pages
const pageMessages = {
  home: [
    "Did the intro page scare you? My bad... my creator, or should I say, my second creator? Yeah, he's a bit out there, but trust me, he knows what he's doing.",
    "You might be wondering, what’s all this about? Well, this website is a portfolio showcasing my second creator's first novel, which—by the way—he’s working on all by himself, so cut him some slack!.",
    "Curious about the story? Head over to the synopsis page! I’d explain it here, but *spoilers* are my middle name. Just kidding... or am I?",
    "Yo, you clicked me! Thanks for that! People usually just avoid eye contact with me. Guess I’m not as scary as I thought... or are you braver than most?",
    "Ah.. this barcode on my forehead? You're welcome to put me in the basket, just make sure i'm not past my due date.",
    "What am I? Well... let’s just say I’m the result of science gone *slightly* wrong. But hey, you can find all the juicy details on the cast page. Trust me, it’s worth it.",
    "You see? Patience, my friend. My creator isn't quite finished with the novel just yet—still shaping up the plot, but we're not too far. It's a slow burn, but worth the wait. Trust me, the best things take time.",
    "Two creators, you ask? One gave me life, and the other gave me... this face. Honestly, I’m not sure which is worse. They’re both a little cruel if you ask me.",
    "My favorite hobby? Staring at these scanlines and contemplating the meaning of life... and snacks. Mostly snacks.",
    "Want to know a secret? The more you click on me, the better your luck gets! Okay, fine, that’s a lie, but hey, worth a shot, right?",
    "What began as a simple game idea quickly turned into something bigger when he thought, 'Wait, I need a solid plot!' Head over to the artwork section for a peek at all the ideas he’s come up with, I'm sure you’ll love what you find!"
  ],
  artwork: [
    "For your information, this page is a bit different from the rest, is more.. personal.",
    "And the only one with a color other than red (Let's not count my second creator's selfie) so you know it’s special!",
    "Believe it or not, he nearly failed art because of his teacher. He couldn't stand how much she nagged him and made him write endless stuff, all boring waffle. Still, he secured a B and decided to leave all that behind, diving straight into programming.",
    "Hey, that's me over there. Pretty badass, right? Click it to check out my insane claws. Don’t worry, I won’t bite... well, maybe just a little scratch, haha.",
    "That Cadaver-7 guy though.. that guy’s got a smile that matches his soul. No wonder he’s such a jerk. If I looked like that, I’d be pissed off too.",
    "Say hi to Hell-o-Ween! Aka the original Lunarium. Even though the concept was scrapped for good, it’s something that can always be brought to life. If you’ve got experience in game development and want to collaborate, give us a shout!",
    "Such a shame the pumpkin guy was cut from Lunarium, he seems like such a fun guy to be around with. His name, you ask? Spikey. Yep, you heard that right, Spikey.",
    "I won’t say much about the scrapped version anymore, though. If you’re curious about it, just reach out to my second creator, he will spill all the details!",
    "I hope you’re lovin’ the gallery so far, because I sure am! It’s a real no-brainer to enjoy, don’t ya think?",
    "Especially the personal gallery, it’s wild how many ideas he’s got bouncing around in his head. It’s like there are multiple people in there working together! Oh, and yeah, he even made me talk to you. Damn.. 4th wall shattered again, my bad.",
    "Keep this between us, but Lunarium was actually supposed to be all purple, not red. Pretty wild, isn't it?",
    "When I get bored, I just come to this page and admire the artwork. I seriously wish I could draw like this. Bruh, I can barely even hold a pencil anymore.",
    "I wonder why he loves chickens so much? I see one in the personal gallery and another in the novel's gallery. Guess he's really eggs-tra fond of them! Sorry.",
    "Can you imagine if Cadaver-7 had kept the name Albert Fritz? 'Albert takes over the world' doesn't exactly scream world domination, does it?"
  ],
  synopsis: [
    "The synopsis might give away a few details, but don’t worry, it only scratches the surface of what the novel truly holds.",
    "Can you believe all of this started thousands of years ago? Not just one thousand, but thousands. Four of them, to be exact. Pretty wild, right?",
    "Why is it called the 'Thousand Year Eclipse'? Well, according to the scriptures, it happens once every thousand years, naturally. But the real question is, how did it start... and why did Osiris set this in motion?",
    "Who was that mysterious man, the one who made the deal with Ptahankh? He's the real one to blame for all this chaos! For creating me... no, wait, scratch that... the author of this novel is the true culprit! Yeah! Screw him!",
    "Sorry, I kinda lost my cool there. Anyway... Why do Crimslate claim to be gods? Could they be shaped and controlled by Osiris? Nah... wait, that would be wild.",
    "I’m curious to learn more about that man who worked for SphynxNet and made his way to Cairo. He clearly had some big plan in mind, after all, he was willing to seek for an endless life, Godammit!",
    "I might seem short-tempered, but believe me, after everything I’ve been through, if you’d experienced even a fraction of it, you wouldn’t remember what 2+2 adds up to.",
    "SphynxNet, another pill too tough to swallow. How the hell do they claim to have seen it all, the beginning even?! What do they think they are, gods? Seriously, at this point, just end it already.. why mess with us like we're some kind of toys?",
    "I won’t lie, Cadaver-7 is a pretty badass code name. But why the ‘7’? Isn’t that everyone’s lucky number? Maybe he was just lucky to survive at the hands of Ptahankh.",
    "Speaking of Ptahankh, I absolutely can’t stand that guy. Just hearing his name ties my stomach in knots. And to make it worse, I'm somehow related to him... Ugh.",
    "This synopsis might go through a few tweaks over time, but rest assured, he definitely knows what he's cooking. Let. him. cook.",
    "Dr. Nihil, despite doing the world such a massive favor, isn’t even the protagonist of the novel. Crazy, right? If you’re curious about the real main character, check out the cast page... you’ll even find some details about me there!"
  ],
  cast: [
    "Oh? This creepy smiling character at the top of the page? Well, that's a little secret... but since you asked, I’ll share. I had a close relationship with them, but that’s all I’ll say for now.",
    "Paula and Gabriel are in for a tough ride, no doubt. I'd be rooting for them, supporting them even, if I weren't their enemy... but hey, what can I do? I’ve got to stick to the script.",
    "You know, each character carries a deeply tragic past, but isn't that what makes them feel so real? It's strange, isn't it? How we humans seem to connect more with sorrow than joy, or maybe it's just me..",
    "I feel kind of bad for Nihil. He didn’t deserve all that, nope. I bet when he looks in the mirror, it’s like, bam! shattered to pieces! Hah, as if I should be laughing, I'm literally rotting as we speak. Hah.",
    "It's crazy how the webpage keeps asking to translate from Chinese. These hieroglyphs sure are taking a toll on your browser, huh? Google users' problems... am I right? Oh, you're not using Google?",
    "Have you checked me out yet? Look at these claws, so intimidating, aren't they? Both of my creators gave me these for a reason, you know!",
    "And my backstory... ugh, it really hits the feels. But I'm not here to weep, I'm here to entertain you. So please, don't mind my pain. Just keep reading. ",
    "There’s something about Hazma that I don't get. I look at him and get this strange feeling, like I’ve known him for years, but I can’t remember any of it. Sorry, I’m getting a bit emotional here.",
    "Hamza... forgive me... Sorry! Moving on. Isn't that unnamed character interesting? His hair reminds me of Eddie the Undead, you know, Iron Maiden's mascot! What's the deal with him though? Poor guy...",
    "Just so you know, in the story, there will be many, many more characters, but my second creator decided to hand-pick a few here to keep the suspense and intrigue heavy! Blame him, not me...",
    "This Cadaver-7 guy is something else. Not only is he responsible for unleashing this curse, but he also summons the undead! It's insane... wait... am I one of his creations? I'm not even sure... scary to think about.",
    "Ptahankh... just the name alone feels like a curse when mentioned. I really don't like this guy. No comment.",
    "What do you think of each character? My second creator told me he would love to know what your thoughts are. Feel free to give him a shout on the 'Contact Me' page once you're done, he's eager to hear from you!",
    "Halt! Before reaching out to him, check out his 'About Me' page. It's always good to know the author first, right? I'll say this though, be kind, and he'll be kinder. Be rude, and you'll be ignored. Simple as that!"
  ],
  about: [
    "He grew up in a small town in Spain for nine years, so he's got a real soft spot for nature and loves peaceful, quiet spots. However, he can get really loud when he wants to!",
    "His favorite food is lentils... nothing beats a high-fiber punch of protein with some healthy flavors. Honestly, they’re a must-have for everyone!",
    "Guess what? He already speaks three languages but is currently learning Japanese. He’s got a huge passion for Japanese culture and art. Tokyo being his dream destination of course.",
    "If you're on mobile, click on Denis and you'll get a cool surprise, make sure to click away to undo it!",
    "His hidden talent? Creating waves with his stomach — like a wobbly, vacuum ocean ripple. He picked it up from that one episode of The Amazing World of Gumball, where he takes steroids, gets ripped, and flexes his abs!",
    "He's got one cat named Maxi, a total ginger devil. Like Garfield, he turns into the happiest, most loving fluffball when there's food involved. Plus, this guy is ridiculously massive, but that makes him even more adorable!",
    "Lunarium came to life after a really tragic event that honestly changed everything for him. You see? This is a reminder that sometimes the worst experiences can bring out the best in us.",
    "On the following day after the second member passed away, he stood there, staring at the sky with tears streaming down his face, asking why it had to happen. The answer? The moonlight.",
    "It taught him the fragility of life, and how existing can be both meaningful and meaningless, all being about perspective. In the end, we must see difficulties as lessons, and we'll come back stronger.",
    "Oops, getting emotional again it seems, oh well. Yeah, uh, what was I saying? Dammit now it seems that he's speaking directly to you, not me, dammit Denis!",
    "Ahem, back to normal. He just wanted to express his gratitude for you reviewing this project. In the end, his goal is to turn it into something big! Games, movies, and more.. to show the world what he's capable of!",
    "He took the time to create a Lunarium Discord community for fellow book and art lovers to join, discuss their favorites, and share creative ideas, including artwork and socialising. Feel free to join, the more, the merrier!",
    "The first time he ever saw a zombie was while playing Plants vs. Zombies (he was around 10, mind you). He was equally terrified and amazed, but couldn't sleep for three days, thinking his brain would get eaten!"

  ],
  support: [
    "As you can see, there are two ways to donate, PayPal or Buy Me a Coffee. Both links work!",
    "Try hovering over them for a little surprise, (or click them if you're on mobile) aren't they just adorable?",
    "Speaking of cute things, the zombie guy at the top is kinda charming, isn’t he? Oh wait… who’s that behind him? Uh oh… he’s kinda cooked, isn’t he?",
    "Oh well, If you decide to donate, just know that the author will remember you even after the release, and you'll be put in a special list.. Be sure to mention your name or any contacting means!",
    "About that list... I cannot spoil it yet, but be sure it will be nice!",
    "It’s been a long journey... This page was actually the last one to be developed! He absolutely loved building this site, and me! He really hopes you're enjoying it so far.",
    "Denis was kinda lazy this time… He’s not sure what to make me say… *ACHOO!!!* Whoa, bless me! That was quite a sneeze.",
    "It’s actually pretty cold in here… If only I were built with heaters, then I definitely wouldn’t have gotten sick dammit.",
    "Don’t ask me why he went with a yellow/blue theme for this page. I guess he wanted to make it more unique or personal. No idea, his doing, not mine!",
    "If I still had arms, I’d be giving you a high-five right now for even considering a donation. For now, though, you’ll just have to imagine it… unless, of course, you’d prefer I slice you in half instead. Choices, choices.",
    "Some say the Blood Moon Apocalypse is a metaphor for human decay… others just think it’s a good excuse for bad decisions and bad hair days. What do you think?",
  ]
};

function createAsh() {
  const ashesContainer = document.querySelector(".ashes");

  for (let i = 0; i < 100; i++) {
    let ash = document.createElement("div");
    let isSmall = Math.random() > 0.5;

    ash.classList.add(isSmall ? "small-ash" : "ash");

    ash.style.left = Math.random() * 100 + "vw";
    ash.style.animationDelay = Math.random() * 3 + "s";
    ash.style.opacity = 0.4;
    ash.style.width = isSmall ? "3px" : "6px";
    ash.style.height = isSmall ? "3px" : "6px";

    ashesContainer.appendChild(ash);
  }
}

createAsh();


const currentPage = document.title.toLowerCase().split(" - ")[0];
const messages = pageMessages[currentPage] || ["Whatever.."];


const mascotImg = document.getElementById('mascot-img');
const mascotMessage = document.getElementById('mascot-message');

let isSpeaking = false;
let messageIndex = 0;

const mouthStates = [
  '../ARTWORK/CREATION.png',
  '../ARTWORK/midyap.png',
  '../ARTWORK/yap.png',
  '../ARTWORK/midyap.png',
  '../ARTWORK/CREATION.png'
];

let mouthStateIndex = 0;

const monsterAudio = new Audio('audio/monster.mp3');
monsterAudio.volume = 0.4;
monsterAudio.loop = true;

function speakMascot() {
  if (isSpeaking) return;
  isSpeaking = true;

  const currentMessage = messages[messageIndex];
  mascotMessage.textContent = "";

  let index = 0;

  const textAnimation = setInterval(() => {
    if (index < currentMessage.length) {
      mascotMessage.textContent += currentMessage[index];
      index++;
    } else {
      clearInterval(textAnimation);
    }
  }, 40);

  const mouthAnimation = setInterval(() => {
    mascotImg.src = mouthStates[mouthStateIndex];
    mouthStateIndex = (mouthStateIndex + 1) % mouthStates.length;
  }, 100);

  setTimeout(() => {
    monsterAudio.play();
  }, 500); 

  setTimeout(() => {
    clearInterval(mouthAnimation);
    mascotImg.src = '../ARTWORK/CREATION.png';
    mouthStateIndex = 0;

    messageIndex = (messageIndex + 1) % messages.length;

    monsterAudio.pause();
    monsterAudio.currentTime = 0;

    isSpeaking = false;
  }, currentMessage.length * 40 + 200); 
}

mascotImg.addEventListener('click', speakMascot);


const hieroglyphs = [
  "𓀀", "𓀁", "𓀂", "𓀃", "𓀄", "𓀅", "𓀆", "𓀇",
  "𓀈", "𓀉", "𓀊", "𓀋", "𓀌", "𓀍", "𓀎", "𓀏",
  "𓀐", "𓀑", "𓀒", "𓀓", "𓀔", "𓀕", "𓀖", "𓀗",
  "𓀘", "𓀙", "𓀚", "𓀛", "𓀜", "𓀝", "𓀞", "𓀟",
  "𓀠", "𓀡", "𓀢", "𓀣", "𓀤", "𓀥", "𓀦", "𓀧",
  "𓀨", "𓀩", "𓀪", "𓀫", "𓀬", "𓀭", "𓀮", "𓀯",
  "𓀰", "𓀱", "𓀲", "𓀳", "𓀴", "𓀵", "𓀶", "𓀷",
  "𓀸", "𓀹", "𓀺", "𓀻", "𓀼", "𓀽", "𓀾", "𓀿",
  "𓁀", "𓁁", "𓁂", "𓁃", "𓁄", "𓁅", "𓁆", "𓁇"
];
const article = document.querySelector('article');

function createHieroglyphs() {
  hieroglyphs.forEach((glyph, index) => {
    const glyphElement = document.createElement('span');
    glyphElement.classList.add('hieroglyph');
    glyphElement.textContent = glyph;

    const xPos = Math.random() * 80 + 10 + "%";
    const yPos = Math.random() * 80 + 10 + "%";
    glyphElement.style.left = xPos;
    glyphElement.style.top = yPos;

    article.appendChild(glyphElement);
  });
}

createHieroglyphs();

const playMusicBtn = document.getElementById('play-music-btn');
const bgAudio = document.getElementById('bg-audio');
bgAudio.volume = 0.4;
bgAudio.loop = true;

playMusicBtn.addEventListener('click', () => {
  if (bgAudio.paused) {
    bgAudio.play();
    playMusicBtn.textContent = 'Stop Music';
  } else {
    bgAudio.pause();
    bgAudio.currentTime = 0;
    playMusicBtn.textContent = 'Play Music';
  }
});


document.addEventListener('DOMContentLoaded', function () {
  const summonBtn = document.getElementById('summon-btn');
  const mascotImg = document.getElementById('mascot-img');
  const eyeImg = document.getElementById('eye');
  const messageBox = document.querySelector('.message-box');
  const hiddenLinks = document.querySelectorAll(".hidden-link");
  const appearSound = document.getElementById("appear-sound");

  summonBtn.addEventListener('click', function () {
    mascotImg.style.display = 'block';
    eyeImg.style.display = 'none';
    messageBox.style.display = 'flex';
    summonBtn.style.display = 'none';


    appearSound.play();

    hiddenLinks.forEach(link => {
      link.classList.add("visible");
      link.classList.add("glitch");
    });
  });
});

const hieroglyphz = document.querySelectorAll('#yeah .hieroglyph');

hieroglyphz.forEach(element => {
  element.style.color = ' rgba(207, 206, 120, 0)';
});

const images = document.querySelectorAll('.lightbox-image');
const lightbox = document.getElementById('lightbox');
const lightboxImage = lightbox.querySelector('img');
const lightboxTitle = lightbox.querySelector('#lightbox-title');
const lightboxDescription = lightbox.querySelector('#lightbox-description');
const closeButton = lightbox.querySelector('#lightbox-close');
const prevButton = lightbox.querySelector('#lightbox-prev');
const nextButton = lightbox.querySelector('#lightbox-next');

let currentImageIndex = 0;
let imageArray = [];

images.forEach((image, index) => {
  imageArray.push({
    src: image.src,
    alt: image.alt,
    description: image.dataset.description || 'No description available'
  });


  image.addEventListener('click', function () {
    currentImageIndex = index;
    showLightbox(currentImageIndex);
  });
});


function showLightbox(index) {
  lightbox.style.display = 'flex';
  const image = imageArray[index];
  lightboxImage.src = image.src;
  lightboxTitle.textContent = image.alt;
  lightboxDescription.textContent = image.description;
}

closeButton.addEventListener('click', function () {
  lightbox.style.display = 'none';
});

prevButton.addEventListener('click', function () {
  currentImageIndex = (currentImageIndex - 1 + imageArray.length) % imageArray.length;
  showLightbox(currentImageIndex);
});

nextButton.addEventListener('click', function () {
  currentImageIndex = (currentImageIndex + 1) % imageArray.length;
  showLightbox(currentImageIndex);
});

lightbox.addEventListener('click', function (event) {
  if (event.target === lightbox) {
    lightbox.style.display = 'none';
  }
});
