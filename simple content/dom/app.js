const userList=document.querySelector(".name-list");
const listInput =document.querySelector(".list-input");
const addListBtn=document.querySelector(".addListBtn");

addListBtn.addEventListener("click",function() {
    const newLi = document.createElement("LI");
    const liContent=document.createTextNode(listInput.value);
    newLi.appendChild(liContent);
    userList.appendChild(newLi);
});