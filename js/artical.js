/**
 * Created by 89418 on 2017/4/25.
 */
var time = document.querySelector(".time");
var date = new Date();
time.innerHTML = date.getFullYear()+"年"+(date.getMonth()+1)+"月"+date.getDate()+"日 "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();