const playBtn = document.querySelector(".play");
const landingPage = document.querySelector(".landing-page");

playBtn.addEventListener("click", () => {
    const video = document.querySelector("video");
    video.style.opacity = 1;
    video.play();
});