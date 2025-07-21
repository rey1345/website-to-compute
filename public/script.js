let currentScene = 0;
let bgMusic;

const scenes = [
  // Scene 1 – Itachi Genjutsu Video + voice
  `
    <video autoplay muted playsinline id="itachiVideo">
      <source src="https://cdn.pixabay.com/video/2023/03/15/15-29-30-184_640x360.mp4" type="video/mp4">
    </video>
    <audio id="itachiVoice" autoplay>
      <source src="https://files.catbox.moe/n9ksg6.mp3" type="audio/mp3">
    </audio>
    <div class="overlay-text">You’re under my Genjutsu now...<br>Happy Birthday, Sufi. I might be late, but it took time.</div>
    <button onclick="nextScene()">Next</button>
  `,
  // Scene 2 – Itachi Eyes
  `
    <img src="https://i.imgur.com/xcMyl6O.png" class="itachi-eyes" />
    <div class="overlay-text">Look into my eyes...</div>
    <button onclick="nextScene()">Next</button>
  `,
  // Scene 3 – BSFF Question
  `
    <div class="overlay-text">Is Muji your BSFF?</div>
    <button onclick="answerBSFF(true)">Yes</button>
    <button onclick="answerBSFF(false)">No</button>
    <div id="bsff-result" class="overlay-text"></div>
  `,
  // Scene 4 – Cake Scene
  `
    <div class="overlay-text">Here’s a cake from me. Hope you like it!</div>
    <img src="https://cdn.pixabay.com/photo/2016/11/29/04/13/cake-1868679_640.jpg" id="cakeImage" />
    <button onclick="cutCake()">Cut & Eat Cake 🍰</button>
    <button id="nextBtn" style="display:none;" onclick="nextScene()">Next</button>
  `,
  // Scene 5 – Birthday Wish (Confetti)
  `
    <div class="overlay-text">
      Wishing you the happiest birthday ever, Sufi! 🎉<br>
      You deserve all the joy in the world.
    </div>
    <button onclick="nextScene()">Next</button>
  `,
  // Scene 6 – Muji Joke
  `
    <div class="overlay-text">Also… Muji? Bro is not even on this level 😆</div>
    <button onclick="nextScene()">Next</button>
  `,
  // Scene 7 – Dream Ending + Restart
  `
    <img src="https://i.imgur.com/xcMyl6O.png" class="itachi-eyes" />
    <div class="overlay-text">
      Don’t you think you’re important enough that I made this for you?<br><br>
      It’s just a dream... WAKE UP!
    </div>
    <button onclick="restartScene()">Restart</button>
  `
];

function showScene() {
  const container = document.getElementById('scene-container');
  container.classList.remove('fade-in');
  container.classList.add('fade-out');

  setTimeout(() => {
    container.innerHTML = scenes[currentScene];
    container.classList.remove('fade-out');
    container.classList.add('fade-in');
    const overlayText = container.querySelector(".overlay-text");
    if (overlayText) typeText(overlayText);

    if (currentScene === 4) {
      launchConfetti(); // Trigger confetti on birthday wish
    }
  }, 400);
}

function nextScene() {
  if (currentScene < scenes.length - 1) {
    currentScene++;
    showScene();
  }
}

function restartScene() {
  currentScene = 0;
  showScene();
}

function answerBSFF(isYes) {
  const res = document.getElementById('bsff-result');
  if (isYes) {
    res.textContent = "😢 But I know I’m still your true BSFF.";
    playAudio('https://cdn.pixabay.com/download/audio/2022/03/15/audio_7a15630f78.mp3?filename=sad-soul-loop-2584.mp3');
  } else {
    res.textContent = "😄 Yay! That’s right, I’m your BSFF.";
  }
  setTimeout(nextScene, 2500);
}

function cutCake() {
  document.getElementById('cakeImage').style.opacity = "0.4";
  playAudio('https://cdn.pixabay.com/download/audio/2022/03/15/audio_2d47042dcf.mp3?filename=eating-crunch-7223.mp3');
  document.getElementById('nextBtn').style.display = 'inline-block';
}

function playAudio(url) {
  const audio = new Audio(url);
  audio.play();
}

function startBackgroundMusic() {
  bgMusic = new Audio('https://cdn.pixabay.com/download/audio/2022/03/16/audio_e59b8765a2.mp3?filename=calm-relaxing-background-117894.mp3');
  bgMusic.loop = true;
  bgMusic.volume = 0.4;
  bgMusic.play();
}

function typeText(element) {
  const text = element.innerHTML;
  element.innerHTML = "";
  element.classList.add("typing");
  let index = 0;

  const interval = setInterval(() => {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
    } else {
      clearInterval(interval);
      element.classList.remove("typing");
    }
  }, 40);
}

function launchConfetti() {
  if (typeof confetti === "function") {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
}

window.onload = () => {
  startBackgroundMusic();
  showScene();
};

