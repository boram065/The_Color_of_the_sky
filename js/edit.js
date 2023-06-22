const updateBtn = document.getElementById("update-btn");
const deleteBtn = document.getElementById("delete-btn");
const postTitle= document.getElementById("post-title");
const pwInput = document.getElementById("pw-input");

updateBtn.addEventListener("click", ()=>{
    let title = postTitle.value;
    let pw = pwInput.value;

    if(title.length === 0){
        alert("제목을 입력해주세요.");
        return;
    }

    if(pw.length === 0){
        alert("비밀번호을 입력해주세요.");
        return;
    }

    if(pw.length < 4){
        alert("비밀번호는 4자리 이상 숫자입니다.");
        return;
    }

    if(!(pw === "1234")){
        alert("비밀번호가 잘못되었습니다.");
        return;
    }

    window.open("../uploaded_record.html", "_top");  
});

updateBtn.addEventListener("click", ()=>{
    let pw = pwInput.value;
    if(pw.length < 4){
        alert("비밀번호는 4자리 이상 숫자입니다.");
        return;
    }

    if(!(pw === "1234")){
        alert("비밀번호가 잘못되었습니다.");
        return;
    }

    window.open("../record.html", "_top");  
});