const cities=[
["Garanhuns","32 online"],["Recife","41 online"],["Caruaru","19 online"],["João Pessoa","16 online"],
["Arcoverde","11 online"],["Salgueiro","8 online"],["Serra Talhada","14 online"],["Petrolina","22 online"]
];
const grid=document.getElementById("cityGrid");
cities.forEach(([name,on])=>{
 const el=document.createElement("div"); el.className="city";
 el.innerHTML=`<b>📍 ${name}</b><span>● ${on}</span>`;
 el.onclick=()=>openModal(`Sala ${name}`,`A sala de ${name} já está desenhada. Na próxima etapa vamos ligar mensagens em tempo real e usuários.`);
 grid.appendChild(el);
});
const modal=document.getElementById("modal");
function openModal(title,text){document.getElementById("modalTitle").textContent=title;document.getElementById("modalText").textContent=text;modal.classList.add("show")}
function closeModal(){modal.classList.remove("show")}
document.getElementById("loginBtn").onclick=()=>openModal("Entrar no RotaChat","Vamos conectar cadastro e login na próxima etapa.");
document.getElementById("closeModal").onclick=closeModal;
document.getElementById("okModal").onclick=closeModal;
modal.onclick=e=>{if(e.target===modal)closeModal()};
let playing=false;
document.getElementById("playBtn").onclick=function(){
 playing=!playing; this.textContent=playing?"❚❚":"▶";
 document.getElementById("status").textContent=playing?"Demonstração visual — rádio será conectada depois":"Player demonstrativo";
};
setInterval(()=>{const n=document.getElementById("onlineCount");n.textContent=124+Math.floor(Math.random()*12)},5000);
