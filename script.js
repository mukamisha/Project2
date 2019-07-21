function myFunction() {
    // alert("ALERY");
    var mm=parseInt(document.getElementById("month").value);
    var dd=parseInt(document.getElementById("date").value);
    var yy=parseInt(document.getElementById("year").value);
    var gg=document.getElementById("gender").value;
    var cc=(yy-1)/100+1;
    var day= ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd)%7;
var female=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var male=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var cc=(yy-1)/100+1;
var day= ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd)%7;



// var dd=prompt("enter your date");
// var mm=prompt("enter your month");
// var yy=prompt("enter the year you were born");
// var g=["female","male"];
// var gg=prompt("enter your gender");
//    var ll="female";
//    var bb="male";
// //    if(ll==="female")
//     {
//         gg="female";
//     }
//     else if(bb==="male")
//     {
//         gg="male";
//     }
//     else 
//     {
//     alert("invalid gender");
// }
// var gg;
//  var cc=(yy-1)/100+1;
// var day= ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd)%7;
 // if(dd<1 && dd>31 || mm<1 && mm>12)
 //     {
 //         alert("please enter the valid informations");
 //     }
 if(day==0 && gg=="female")
 {
     alert("you were born on sunday and your name is Akosua");
     
 }    
 else if(day==1 && gg=="female")
 {
     alert("you were born on monday and your name is Adwoa");
 }

 else if(day==2 && gg=="female")
 {
     alert("you were born on tuesday and your name is Abenaa");
     
 }    
 else if(day==3 && gg==="female")
 {
     alert("you were born on wednesday and your name is Akua");
 }

 else if(day==4 && gg==="female")
 {
     alert("you were born on thursday and your name is Yaa");
     
 }    
 else if(day==5 && gg==="female")
 {
     alert("you were born on friday and your name is Afua");
 }

 else if(day==6 && gg==="female")
 {
     alert("you were born on saturday and your name is Ama");
     
 }   
 else if(day==0 && gg==="male")
 {
     alert("you were born on sunday and your name is Kwasi");
 }
 else if(day==1 && gg==="male")
 {
     alert("you were born on monday and your name is Kwadwo");
 }

 else if(day==2 && gg==="male")
 {
     alert("you were born on tuesday and your name is Kwabena");
     
 }    
 else if(day==3 && gg==="male")
 {
     alert("you were born on wednesday and your name is Kwaku");
 }

 else if(day==4 && gg==="male")
 {
     alert("you were born on thursday and your name is Yaw");
     
 }    
 else if(day==5 && gg==="male")
 {
     alert("you were born on friday and your name is Kofi");
 }
 else if(day==6 && gg==="male")
 {
     alert("you were born on saturday and your name is Kwame");
 }
 else{
    alert("invalid info");
}
}