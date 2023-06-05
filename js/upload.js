const uploadBtn = document.querySelector("#upload_btn");
const img = document.getElementById("upload_img");
const fileUploadFeild = document.querySelector(".fileUploadField");

fileUploadFeild.addEventListener("click", () => {
    fileUploadFeild.querySelector("span").innerHTML = "";
    img.style.opacity = 1;
    img.style.width = `100%`;
    img.src = "images/postCover1.png";
});