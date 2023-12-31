let time = document.getElementsByClassName("time")[0];
let timer = 0;
const leftSide = document.getElementsByClassName("left-side")[0];
const circle = document.getElementsByClassName("circle-wish")[0];
const rightSide = document.getElementsByClassName("right-side")[0];

let currTime = document.querySelector("#currTime");
let countDown = document.querySelector("#countDown");

let date = new Date("2023-12-31T11:59:50.01");
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

console.log(hr, min, sec);


let st = setInterval(function increment(){
    if(sec == 60){
        clearInterval(st);
    }
    if(sec == 60){
        min = 0;
        hr = 0;
        countDown.innerHTML = `00 s`;
        currTime.innerHTML = `Time : 00 : 00 : 00`;
        console.log(hr, min, sec);
        let t2 = gsap.timeline();
        
        t2.to(".left-side",{
            x:-1100,
            duration:2
        },'rish')
        t2.to(".right-side",{
            x:1100,
            duration:2
        },'rish')
        t2.to(".time",{
            scale:0
        },"rish")
        
        t2.to(".wish",{
            y:100,
            opacity:1,
            stagger:1,
        })
        t2.to(".year",{
            y:100,
            opacity:1,
            // duration:1,
            stagger:1,
        })
    }
    else{
        sec++;
        countDown.innerHTML = `0${60 - sec} sec`;
        currTime.innerHTML = `Time : ${hr} : ${min} : ${sec}`;
        console.log(hr, min, sec);
    }
}, 1000);

let st2 = setInterval(function(){
    document.getElementsByClassName("fire")[0].style.left = `${Math.floor(Math.random() * 1400)}`+"px";
    ocument.getElementsByClassName("fire")[0].style.bottom = `${Math.floor(Math.random() * 700)}`+"px";
}, 2000)