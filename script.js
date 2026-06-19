window.onload=function(){

document.querySelector(".loader").style.display="none";

}




let dark=true;


document.getElementById("theme").onclick=function(){


if(dark){


document.body.style.background="#eeeeee";

document.body.style.color="#111";


this.innerHTML="☀️";


dark=false;


}

else{


document.body.style.background="#050816";

document.body.style.color="white";


this.innerHTML="🌙";


dark=true;


}

};







document.getElementById("applyForm")
.addEventListener("submit",function(e){


e.preventDefault();



document.getElementById("success").innerHTML=

"🎉 Application Submitted Successfully!";



this.reset();


});
