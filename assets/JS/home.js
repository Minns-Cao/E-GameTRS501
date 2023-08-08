const srceenShow = document.querySelector(".screenShow");
const pinkBg = srceenShow.querySelector(".pinkBg");
const donutBox = srceenShow.querySelector(".donutBox");
const nextPage = srceenShow.querySelector(".nextPage");

nextPage.addEventListener("click",()=>{
    srceenShow.classList.add("active");
})

