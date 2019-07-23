function myFunction() {

   var mon = document.getElementById("month").value;
   var dat = document.getElementById("date").value;
   var yea = document.getElementById("year").value;
   var gg = document.querySelector('input[name="gender"]:checked').value;
   console.log(gg,mon,dat,yea);
   var mm = parseInt(mon);
   var dd = parseInt(dat);
   var yy = parseInt(yea);
   var cc = Math.round((yy - 1) / 100 + 1);
   var day = Math.floor((((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7);

   if (dd < 1 || dd > 31) {
      alert("please enter the valid date!");
   }
   else if (mm < 1 || mm > 12) {
      alert("please enter the valid year!")
   }
   else if(mm<1 || mm>12 && dd<1 || dd>31 )
   {
      alert("please enter the valid date and year!")
   }
 
   else if (day == 0 && gg == "female") {
      document.getElementById('output').innerHTML = 'you were born on sunday and your name is Akosua';
   }
   else if (day == 1 && gg == "female") {
      document.getElementById('output').innerHTML = 'you were born on monday and your name is Adwoa';
   }

   else if (day == 2 && gg == "female") {
      document.getElementById('output').innerHTML = 'you were born on tuesday and your name is Abenaa';

   }
   else if (day == 3 && gg === "female") {
      document.getElementById('output').innerHTML = 'you were born on wednesday and your name is Akua';
   }

   else if (day == 4 && gg === "female") {
      document.getElementById('output').innerHTML = 'you were born on thursday and your name is Yaa';

   }
   else if (day == 5 && gg === "female") {
      document.getElementById('output').innerHTML = 'you were born on friday and your name is Afua';
   }

   else if (day == 6 && gg === "female") {
      document.getElementById('output').innerHTML = 'you were born on saturday and your name is Ama';

   }
   else if (day == 0 && gg === "male") {
      document.getElementById('output').innerHTML = 'you were born on sunday and your name is Kwasi';
   }

   else if (day == 1 && gg === "male") {
      document.getElementById('output').innerHTML = 'you were born on monday and your name is Kwadwo';
   }

   else if (day == 2 && gg === "male") {
      document.getElementById('output').innerHTML = 'you were born on tuesday and your name is Kwabena';

   }
   else if (day == 3 && gg === "male") {
      document.getElementById('output').innerHTML = 'you were born on wednesday and your name is Kwaku';
   }
  

   else if (day == 4 && gg === "male") {
      document.getElementById('output').innerHTML = 'you were born on thursday and your name is Yaw';

   }
   else if (day == 5 && gg === "male") {
      document.getElementById('output').innerHTML = 'you were born on friday and your name is Kofi';
   }
   else if (day == 6 && gg === "male") {
      document.getElementById('output').innerHTML = 'you were born on saturday and your name is Kwame';
   }
 else{
    alert("fill all the forms before submission please!");
 }
}