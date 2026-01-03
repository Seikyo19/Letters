const lettersGrid = document.getElementById("lettersGrid");
const modal = document.getElementById("passcodeModal");
const modalTitle = document.getElementById("modalTitle");
const passcodeInput = document.getElementById("passcodeInput");
const errorMsg = document.getElementById("errorMsg");

let currentLetter = null;

/* ===== LETTER DATA ===== */
const letters = {
  1: {
    passcode: "4827",
    message: `My love,<br><br>
      I’m sorry for replying late and making you feel ignored. Even miles apart, you deserve my attention.<br><br>
      I love you.`
  },
  2: {
    passcode: "9053",
    message: `I’m really sorry I missed your call. I know our calls matter more because they’re all we have. I'm sorry bebe`
  },
  3: {
    passcode: "1749",
    message: `I’m sorry for how I talked to you earlier. Messages can’t show tone, but my love for you is real.`
  },
  4: {
    passcode: "6381",
    message: `I’m sorry I misunderstood your message and reacted wrongly. I should’ve asked instead of assuming. Iloveyou po`
  },
  5: {
  passcode: "2904",
  message: `I’m sorry for sounding cold. I didn’t mean to push you away—I just didn’t express myself well. Please bebe?`
  },
  6: {
  passcode: "7516",
  message: `I’m sorry I didn’t consider your time and schedule. I should’ve been more thoughtful. Kiss po?`
  },
  7: {
  passcode: "8642",
  message: `I’m sorry for letting jealousy affect us. I trust you—I just need to show it better. Sorry po talaga`
  },
  8: {
  passcode: "3195",
  message: `I’m sorry for keeping things to myself. I should let you in, even from afar. Wag kana po mag alala, Iloveyou po bebe`
  },
  9: {
  passcode: "4078",
  message: `I’m sorry for not reaching out first. I never want you to feel like you’re trying alone.`
  },
  10: {
  passcode: "5921",
  message: `I’m sorry for every time you needed comfort and I wasn’t enough through a screen. If I could close the distance just to hold you and say this in person, I would. Until then, please believe that my love for you is real and steady`
  },
  11: {
  passcode: "8260",
  message: `I’m sorry for letting my stress, moods, or distractions spill into our relationship. You didn’t deserve the parts of me that were tired or distant. You deserve the best of me, even from afar`
  },
  12: {
  passcode: "1437",
  message: `I’m sorry for the promises I made but didn’t keep. I know trust is fragile in long distance, and my actions should have matched my words. I never meant to make you feel unsure about me, and I’m working on being more reliable for you`
  },
  13: {
  passcode: "9072",
  message: `I’m sorry for brushing off your feelings instead of understanding them. Just because I didn’t feel the same way doesn’t mean what you felt wasn’t real. I should’ve listened instead of defending myself`
  },
  14: {
  passcode: "6584",
  message: `I’m sorry for choosing comfort and distractions over quality time with you. I didn’t realize how much it hurt until now. You shouldn’t have to compete for my attention, especially when distance already makes us limited`
  },
  15: {
  passcode: "2149",
  message: `I’m sorry I took too long to say this. My pride kept me quiet when my heart already knew I was wrong. You deserved this apology sooner`
  },
  16: {
  passcode: "7835",
  message: `I’m sorry for reacting out of emotion instead of understanding. Distance already makes communication fragile, and my reactions made it harder instead of safer for you to speak`
  },
  17: {
  passcode: "5068",
  message: `I’m sorry for letting small misunderstandings turn into bigger problems. I should’ve addressed things early instead of letting distance amplify them`
  },
  18: {
  passcode: "9314",
  message: `I’m sorry for not fully recognizing the sacrifices you make to keep this relationship strong. Loving from a distance requires patience and strength, and I should’ve honored that more`
  },
  19: {
  passcode: "2670",
  message: `I’m sorry for reacting based on assumptions instead of asking you directly. Distance leaves too much room for misunderstanding, and I should’ve chosen clarity over conclusions.`
  },
  20: {
  passcode: "0715",
  message: `Valentines today.. Sorry bebe dahil wala akong kakayahan na i spoil ka physically po. Believe me when I say this, last year pako nagpo plot kung pano kita mabigyan ng kahit ano pero hindi talaga kaya e. I'm literally crying while writing this haha. I've always dreamed of gifting you something but.. oh how disappointed I am at myself. I never thought na darating ako sa point na kinu question ko ung worth ko sayo kasi parang hindi talaga ako deserving. March 15, 2025 nung nagka aminan tayo. sobrang saya ko nun haha. March 18, 2025. The time you said you love me na haha. Fast haha. Puppy love, I know pero ngayon.. hindi na e. ang seryoso na ng nararamdaman natin and everytime I think about it, I just can't help but tear up. ayoko talagang mawala ka bebe but I don't know how to keep you forever.. Im trying my best but I feel like it isn't even enough, na para bang lagi akong kulang. patawarin moko bebe. I know how disappointing I am on this day. Happy Valentines po.`
  },
  
  20: {
    passcode: "8491",
    message: `Listen, Sorry bebe.. for bringing back the past. I know I shouldn't have. I've been selfish and didn't think about the consequences. I'm sorry`
  }
  
  // Add more up to 20 when needed
};

/* ===== CREATE LETTER BUTTONS ===== */
for (let i = 1; i <= 21; i++) {
  const btn = document.createElement("button");
  btn.className = "letter-btn";
  btn.textContent = `🔒 Letter #${i}`;
  btn.onclick = () => openModal(i);
  lettersGrid.appendChild(btn);
}

/* ===== MODAL CONTROLS ===== */
function openModal(letterNumber) {
  currentLetter = letterNumber;
  modalTitle.textContent = `Letter #${letterNumber}`;
  passcodeInput.value = "";
  errorMsg.textContent = "";
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

/* ===== PASSCODE CHECK ===== */
function submitPasscode() {
  const entered = passcodeInput.value;
  const letter = letters[currentLetter];

  if (entered.length !== 4) {
    errorMsg.textContent = "Please enter a 4-digit passcode.";
    return;
  }

  if (!letter) {
    errorMsg.textContent = "This letter hasn’t been written yet 🤍";
    return;
  }

  if (entered === letter.passcode) {
    openLetter(letter.message);
  } else {
  }
}

/* ===== OPEN LETTER ===== */
function openLetter(message) {
  modal.style.display = "none";

  document.querySelector(".container").innerHTML = `
    <h1>Letter #${currentLetter}</h1>
    <p class="letter-content">${message}</p>
    <button onclick="location.reload()">⬅ Back</button>
  `;
}