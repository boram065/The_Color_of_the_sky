let postsDiv = document.getElementsByClassName("post");
let imgIndex = 1;
for(let i in postsDiv){
    postsDiv[i].getElementsByTagName("img")[0].src = `images/postcover/postCover${imgIndex}.jpg`;
    imgIndex++;
}