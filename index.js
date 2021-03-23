const button = document.querySelector(".btn");
const contain = document.querySelector(".container");
console.log(button,contain);
button.addEventListener("click",(e)=>{
    createNoty();
    creatNoty2();
});
function createNoty() {
    const notice = document.createElement("div");
    notice.classList.add("toast");
    notice.innerText = "Programing is fun";
    contain.appendChild(notice);
    console.log(notice);
    setTimeout(() => {
        notice.remove();
    }, 3000);
}
function creatNoty2(params) {
    let noty = document.createElement("div");
    noty.classList.add("toast");
    noty.innerText = "i am a frontend developer";
    contain.appendChild(noty);
    console.log(noty);
    setTimeout(()=>{
        noty.remove();
    },3000);
};
function myFriend(name,callback) {
    setTimeout(() => {
        let person  = name;
        callback(person);
    },5000);
};
function getResult(result){
    console.log(result);
};
myFriend("samuel",getResult);

function processValues(name,callback) {
    let nm  = name;
    callback(nm);
};
function greeting(name) {
    alert("Hello" + name);
};
processValues(prompt("please enter your name"),greeting);
