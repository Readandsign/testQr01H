const wrp = document.querySelector(".wrp");
const languageBlock = wrp.querySelectorAll(".languageBlock");
const aside = wrp.querySelectorAll("aside");
const info = wrp.querySelectorAll(".info");
const a = wrp.querySelectorAll("a");
const button = wrp.querySelectorAll(".button");

const params = new URLSearchParams(window.location.search);

const arr = [
{id : "0000", videos : ["link1", "link2", "link3"]},
{id : "0001", videos : ["aaa", "bbb", "ccc"]},
{id : "0002", videos : ["AAA", "BBB", "CCC"]}
];

Object.freeze(arr);

if(params.get("id").length === 4){
for(let i = 0; i < arr.length; i++){
if(params.get("id") === arr[i].id){
for(let k = 0; k < 3; k++){
a[k].href = arr[i].videos[k];
}
}
}
}
