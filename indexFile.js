const title=document.getElementById("titleContainer");
const date=document.getElementById("date");
const ed=document.getElementById("edContainer");
const edt=document.getElementById("edTitle");
const ede=document.querySelectorAll("#edE");
const ede1=ede[0];
const ede2=ede[1];
const ede3=ede[2];
const img=document.getElementById("imageContainer");
const body=document.getElementById("body");
const banner=document.getElementById("banner");
const compc=document.getElementById("competenteContainer");
const data=document.getElementsByClassName("data");
const comp=document.querySelectorAll("#competentE");
const compt=document.getElementById("competenteTitle");
if(title.style.backgroundColor=="white"){banner.style.backgroundColor="blue";}
function change(){
if(title.style.color=="black"){title.style.color="white";title.style.backgroundColor="black";
date.style.backgroundColor="pink";date.style.borderTop="3px solid lightgreen";date.style.borderLeft="3px solid lightgreen";
date.style.borderRight="3px solid red";
ed.style.borderTop="3px solid red";ed.style.borderRight="3px solid red";
ed.style.backgroundColor="purple";edt.style.color="orange";ede1.style.color="yellow";
ede2.style.color="yellow";ede3.style.color="yellow";
img.style.borderTop="3px solid red";img.style.borderRight="3px solid lightgreen";img.style.borderBottom="3px solid lightgreen";
img.style.backgroundColor="lightgrey";body.style.backgroundColor="black";ed.style.borderLeft="3px solid lightgreen";
compc.style.border="3px solid skyblue";
compc.style.borderTop="3px solid lightgreen";
for(let i=0;i<data.length;i++){
data[i].style.backgroundColor="black";data[i].style.color="white";}
for(let i=0;i<comp.length;i++){comp[i].style.color="black";}
compc.style.backgroundColor="white";
compt.style.color="blue";
banner.style.backgroundColor="white";
}
else{title.style.color="black";title.style.backgroundColor="white";date.style.backgroundColor="purple";
date.style.borderTop="3px solid red";date.style.borderLeft="3px solid red";
date.style.borderRight="3px solid lightgreen";ed.style.borderTop="3px solid lightgreen";ed.style.borderRight="3px solid lightgreen";
ed.style.backgroundColor="yellow";edt.style.color="skyblue";ede1.style.color="darkred";ede2.style.color="darkred";ede3.style.color="darkred";
img.style.borderTop="3px solid lightgreen";img.style.borderRight="3px solid red";img.style.borderBottom="3px solid red";img.style.backgroundColor="grey";
body.style.backgroundColor="white";ed.style.borderLeft="3px solid skyblue";
compc.style.border="3px solid lightgreen";
compc.style.borderTop="3px solid skyblue";
for(let i=0;i<data.length;i++){
data[i].style.backgroundColor="white";data[i].style.color="black";}
for(let i=0;i<comp.length;i++){
comp[i].style.color="white";
}
compc.style.backgroundColor="black";
compt.style.color="red";
banner.style.backgroundColor="black";
}
}
setInterval(change,1000);