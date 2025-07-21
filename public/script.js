let currentScene = 0;

const scenes = [
  // Scene 1
  `
    <video autoplay muted playsinline id="itachiVideo">
      <source src="YOUR_ITACHI_VIDEO_URL.mp4" type="video/mp4">
    </video>
    <div class="overlay-text">
      You’re under my Genjutsu now...<br>
      Happy Birthday, Sufi. I might be late, but it took time.
    </div>
    <button onclick="nextScene()">Next</button>
  `,
  // Scene 2
  `
    <img src="YOUR_ITACHI_EYES_URL.png" class="itachi-eyes" />
    <div class="overlay-text">Look into my eyes...</div>
    <button onclick="nextScene()">Next</button>
  `,
  // Scene 3
  `
    <div class="overlay-text">Is Muji your BSFF?</div>
    <button onclick="answerBSFF(true)">Yes</button>
    <button onclick="answerBSFF(false)">No</button>
    <div id="bsff-result" class="overlay-text"></div>
  `,
  // Scene 4
  `
    <div class="overlay-text">Here’s a cake from me. Hope you like it!</div>
    <img src="YOUR_CAKE_IMAGE_URL.jpg" id="cakeImage" />
    <button onclick="cutCake()">Cut & Eat Cake 🍰</button>
    <button id="nextBtn" style="display:none;" onclick="nextScene()">Next</button>
  `,
  // Scene 5
  `
    <div class="overlay-text">
      Wishing you the happiest birthday ever, Sufi! 🎉<br>
      You deserve all the joy in the world.
    </div>
    <button onclick="nextScene()">Next</button>
  `,
  // Scene 6
  `
    <div class="overlay-text">Also… Muji? Bro is not even on this level 😆</div>
    <button onclick="nextScene()">Next</button>
  `,
  // Scene 7
  `
    <img src="YOUR_ITACHI_EYES_URL.png" class="itachi-eyes" />
    <div class="overlay-text">
      Don’t you think you’re important enough that I made this for you?
      <br><br>
      It’s just a dream... WAKE UP!
    </div>
  `
];

function showScene() {
  document.getElementById('scene-container').innerHTML = scenes[currentScene];
}

function nextScene() {
  if (currentScene < scenes.length - 1) {
    currentScene++;
    showScene();
  }
}

function answerBSFF(isYes) {
  const res = document.getElementById('bsff-result');
  if (isYes) {
    res.textContent = "😢 But I know I’m still your true BSFF.";
    playAudio('SAD_MUSIC_URL.mp3');
  } else {
    res.textContent = "😄 Yay! That’s right, I’m your BSFF.";
  }
  setTimeout(nextScene, 2500);
}

function cutCake() {
  document.getElementById('cakeImage').style.opacity = "0.4";
  playAudio('EAT_SOUND_URL.mp3');
  document.getElementById('nextBtn').style.display = 'inline-block';
}

function playAudio(url) {
  const audio = new Audio(url);
  audio.play();
}

window.onload = showScene;
