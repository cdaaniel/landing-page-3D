const playBtn = document.querySelector(".play");
const videoContainer = document.querySelector(".video-container");
const canvas = document.querySelector("#renderElement");

playBtn.addEventListener("click", () => {
    videoContainer.classList.toggle("display");
    if (videoContainer.classList.contains("display")) {
        if (window.innerWidth < 940) {
            canvas.style.display = "none";
        }
        playBtn.innerHTML = '<i class="fa-solid fa-stop"></i>Stop';
    } else {
        canvas.style.display = "block";
        playBtn.innerHTML = '<i class="fa-solid fa-play"></i>Video';
    }
});