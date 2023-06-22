const uploadBtn = document.getElementById("upload-btn");
const titleInput= document.getElementById("title-input");
const pwInput = document.getElementById("pw-input");
const fileUploadFeild = document.getElementsByClassName("file-upload-div")[0];
const img = document.getElementById("upload-img");

fileUploadFeild.addEventListener("click", () => {
    fileUploadFeild.querySelector("span").innerHTML = "";
    img.style.opacity = 1;
    img.style.width = `100%`;
    img.src = "images/postCover/postCover9.jpg";
});


uploadBtn.addEventListener("click", ()=>{
    let title = titleInput.value;
    let pw = pwInput.value;

    if(title.length === 0){
        alert("제목을 입력해주세요.");
        return;
    }

    if(img.src.length == 0){
        alert("이미지를 업로드해주세요.");
        return;
    }

    if(pw.length === 0){
        alert("비밀번호을 입력해주세요.");
        return;
    }

    // TODO: 숫자가 아닐 경우
    if(pw.length < 4){
        alert("비밀번호는 4자리 이상 숫자입니다.");
        return;
    }

    // TODO: open하고 현재 창 닫기
    window.open("../uploaded_record.html", "_top");  
});