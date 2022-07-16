function writeIn(b) {document.getElementById("input").value += b}
  
function myFunction(){
  var h = document.getElementById("input").value;
  var I = eval(h)
  if(h > 999000000000){
    document.getElementById("input").value = 'e';}
    else{
  document.getElementById("input2").value = I; 
  document.getElementById("input").value = '';
  
}}

function myfunc() {
  document.getElementById("input").value = '';
  document.getElementById("input2").value ='';
}

var yomi = new Date();
var williams = yomi.getHours(); 
var willy = yomi.getMinutes();
var williams = (williams % 12) || 12;
if(willy >= 10){
  document.getElementById("timee").value = williams+' : '+willy;}
else{

document.getElementById("timee").value = williams+' : '+'0'+willy;
}
function myfunc2(){
  var a, b; 
  a = document.getElementById("input").value; 
  b = a.slice(0, -1);;
  document.getElementById("input").value = b; 
}

function mybackground(){
  document.getElementById("div").style.backgroundColor='#8388BB'}
