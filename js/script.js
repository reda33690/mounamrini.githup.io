var text1="BENVENUTI ";
var a=0;
document.getElementById("typing1").innerHTML="";

function typing2(){
    if(a<text1.length){
        document.getElementById("typing1").innerHTML+=text1.charAt(a);
        a++;
    setTimeout(typing2,300);
   
    }
    
    if(a==text1.length){
        document.getElementById("typing1").innerHTML="";
        a=0
    }
    
}


typing2();