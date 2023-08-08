const srceenShow = document.querySelector(".screenShow");
const pinkBg = srceenShow.querySelector(".pinkBg");
const donutBox = srceenShow.querySelector(".donutBox");
const nextPage = srceenShow.querySelector(".nextPage");
const allow = document.querySelector(".allow");
const allowBtn = document.querySelector(".allow .btnAllow");
const nextslideSound = new Audio("./assets/sound/nextslide2.mp3");
const introSound = new Audio("./assets/sound/voiceEng.mp3");

allowBtn.addEventListener("click",()=>{
    introSound.play();
    allow.style.display = "none";
})

nextPage.addEventListener("click",()=>{
    srceenShow.classList.add("active");
    nextslideSound.play();
})

