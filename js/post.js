let titles = [
    "하늘의 품에서 피어난 감동",
    "끝없는 하늘, 끝나지 않는 나의 하루",
    "하늘과 함께 춤추는 순간들",
    "하늘의 색깔, 나의 감정을 담아서",
    "구름 위를 걸으며 느껴진 행복",
    "하늘에 묻은 나의 소망들",
    "하늘을 이불삼아"
];

const goUploadDiv = document.getElementById("go-upload");
let postsDiv = document.getElementsByClassName("post");
let imgIndex = 1;

for(let i in postsDiv){
    // 이미지 경로
    postsDiv[i].getElementsByTagName("img")[0].src = `images/postcover/postCover${imgIndex}.jpg`;
    imgIndex++;

    // click -> 수정 페이지로 이동
    postsDiv[i].onclick = () => {window.open("../edit.html")};

    // title 지정
    postsDiv[i].getElementsByClassName("title")[0].innerHTML = titles[i];
}


goUploadDiv.onclick = () => {
    window.open("../upload.html", "_top");
};