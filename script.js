const car1 = document.getElementById('top_dark');
const car2 = document.getElementById('mid_mid');
const car3 = document.getElementById('bottom_light');
const car11 = document.getElementById('top_dark1');
const car21 = document.getElementById('mid_mid1');
const car31 = document.getElementById('bottom_light1');
const advithink = document.getElementById('advithink');
const logadv = document.getElementById('log_adv');
let lsp = 0;
let lsp1 = 0;
let lsp2 = 0;
let lsp3 =0;
let a= 0;
let b=1;
window.addEventListener('scroll',function(e){
    console.log(a);
    console.log(window.scrollY);
    lsp = window.scrollY/8;
    lsp1 = window.scrollY/9;
    lsp2 = window.scrollY/12;
    if (lsp <= 38) {
        e=38-lsp;
        car1.style.transform='skewY('+e+'deg)' 
        car11.style.visibility='hidden';
    }
    else{
        car1.style.transform='skewY(0deg)';
        car11.style.visibility='visible';
    }
    if (lsp1 <= 30){
        e=30-lsp1;
        car2.style.transform='skewY('+e+'deg)';
    }
    else{
        car2.style.transform='skewY(0deg)';
    }
    if (lsp2 <= 22){
        e=22-lsp2;
        a=1-lsp/20;
        car3.style.transform='skewY('+e+'deg)';
        advithink.style.opacity=a;
       // advithink.style.display='flex';
    }
    else{
        car3.style.transform='skewY(0deg)';
        if (a<=0){
        //    advithink.style.display='none';
            advithink.style.opacity='0';
        }
    }
    if (lsp >= 75){
        car21.style.visibility='visible';
    }
    else{
        car21.style.visibility='hidden';
    }
    if (lsp >=115){
        car31.style.visibility='visible';
        logadv.style.transitionDuration='1s';
        logadv.style.left='0vw';
    }
    else{
        car31.style.visibility='hidden';
        logadv.style.transitionDuration='0.2s';
        logadv.style.left='60vw';
    if(lsp<=112){
        logadv.style.transitionDuration='0s';
    }
    }
    b=1-lsp/20+0.8;
    if (b<=1 && b>=0.20){
        logadv.style.transform='scale('+b+')';
        logadv.style.transform='translateY('+lsp+')';
    }
    if ((lsp*8)<=145){
        logadv.style.transform='scale(1)';
    }
    if ((lsp*8)>=448){
        logadv.style.transform='scale(0.20)';
        logadv.style.position='sticky';
        advithink.style.opacity='0';
        logadv.style.top='-200px'
        logadv.style.transitionDuration='0s';
    }
    else{
        logadv.style.position='absolute';
        logadv.style.top='20vh';
        logadv.style.transitionDuration='0.2s';
    }
})