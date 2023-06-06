const uploadBtn = document.querySelector("#upload_btn");
const img = document.getElementById("upload_img");
const fileUploadFeild = document.querySelector(".fileUploadField");

fileUploadFeild.addEventListener("click", () => {
    fileUploadFeild.querySelector("span").innerHTML = "";
    img.style.opacity = 1;
    img.style.width = `100%`;
    img.src = "images/postCover1.png";
});

// TODO : 유효성 검사 하기 
// 비밀번호 4자리, 빈칸 있는지 없는지

// TODO : 업로드 하면 다시 record.html 로 이동하기
// 업로드한 게시물 보여지게 하기