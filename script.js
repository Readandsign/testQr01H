const wrp = document.querySelector(".wrp");
const languageBlock = wrp.querySelectorAll(".languageBlock");
const aside = wrp.querySelectorAll("aside");
const info = wrp.querySelectorAll(".info");
const a = wrp.querySelectorAll("a");
const button = wrp.querySelectorAll(".button");

const params = new URLSearchParams(window.location.search);

const arr = [
{id : "1",
videos : ["https://youtu.be/CCNz69pTqrY?si=Bkmd92OT4M2PcMXx", "https://youtu.be/h4q9tHf01A0?si=cLLWnetuyfnhDxfp", "https://youtu.be/_36bHzl-PV0?si=U-HwD1Fa-LkT3KvW",]},
{id : "2", videos : ["aaa", "bbb", "ccc"]},
{id : "3", videos : ["AAA", "BBB", "CCC"]}
];

Object.freeze(arr);

if(params.get("id") != null && params.get("id").length < 5){
for(let i = 0; i < arr.length; i++){
if(params.get("id") === arr[i].id){
for(let k = 0; k < 3; k++){
a[k].href = arr[i].videos[k];
}
}
}
}
