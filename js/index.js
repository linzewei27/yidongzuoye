/**
 * Created by 89418 on 2017/4/25.
 */
var music = document.getElementById("music");
var audio = document.getElementsByTagName("audio")[0];
music.onclick = function () {
    if(audio.paused){
        audio.play();
    }else{
        audio.pause();
    }

};
var toTop = document.getElementById("toTop");
var nav = document.querySelector("nav");
var header = document.querySelector("header");
var navH = nav.offsetHeight;
var headerH = header.offsetHeight;
document.onscroll = function () {
    console.log(window.pageYOffset);
    if(window.pageYOffset>headerH){
        toTop.style.display = "block";
        nav.style.position = "fixed";
        nav.style.top = "0px";
    }
    else{
        toTop.style.display = "none";
        nav.style.position = "relative";
        nav.style.top = headerH+"px";
    }
};

toTop.onclick = function () {
    var top = window.pageYOffset;
    var timer = setInterval(function () {
        window.scrollTo(0,top);
        top-=100;
        if(top<=0){
            clearInterval(timer);
        }
    },20);


};
