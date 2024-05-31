function myfunction(){
    var scroll=document.body.scrollTop || document.documentElement.scrollTop;
    var height=document.documentElement.scrollHeight -document.documentElement.clientHeight;
    var scrolled=(scroll/height)*100;
    document.getElementById('indicator').style.width=scrolled + "%";
}

window.onscroll=function(){
    myfunction();
}