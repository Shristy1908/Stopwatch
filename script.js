let [seconds,mintues,hours]=[0,0,0];
let displayTime=document.getElementById("display-time");
let start=document.getElementById("start");
let timer=null;

function stopwatch(){
    seconds++;
    if(seconds==60){
        seconds=0;
        mintues++;
        if(mintues==60){
            mintues=0;
            hours++;
        }
    }
    let h= hours<10 ? "0"+hours : hours
    let m= mintues<10 ? "0"+mintues : mintues
    let s= seconds<10 ? "0"+seconds : seconds

    displayTime.innerHTML=h+":"+m+":"+s;
}

function watchStart(){
    if(timer!=null){
        clearInterval(timer);
    }
    timer=setInterval(stopwatch,1000);
}

function watchReset(){
    clearInterval(timer);
    [seconds,mintues,hours]=[0,0,0];
    displayTime.innerHTML="00:00:00";
}

function watchStop(){
    clearInterval(timer);
}

start.addEventListener("mouseover",overfun);
function overfun(){
    let startp= document.getElementById("startp")
    startp.style.display="block";
    startp.style.width="60px";
    startp.style.position="absolute";
    startp.style.marginLeft="320px";
}
start.addEventListener("mouseout",outfun);
function outfun(){
    let startp= document.getElementById("startp")
    startp.style.display="none";
    startp.style.width="60px";
    startp.style.position="absolute";
    startp.style.marginLeft="320px";
}