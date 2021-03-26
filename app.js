// This is a JavaScript file
var interval;
var figures = document.getElementsByClassName('figure');
 
var firstMinute = 0;
var secondMinute = 0;
var firstSecond = 0;
var secondSecond = 0;
var firstHour = 0;
var secondHour = 0;
function clickFunction(x)
{
 console.log(x);
  var a = document.getElementById(x);
  a.disabled = true;
  document.getElementById("reset").disabled = true;
  document.getElementById("stop").disabled = false;
  interval = setInterval(handleDisplay, 1000);
}
function handleDisplay()
{
if(firstSecond >= 9)
{
  firstSecond = 0;
  if(secondSecond < 5)
  {
    secondSecond = secondSecond + 1;
  }
  else
  {
    secondSecond = 0;
    firstMinute = firstMinute + 1;
  }
}
 else if(firstMinute > 9)
{
  firstMinute = 0;
  if(secondMinute < 5)
  {
    secondMinute = secondMinute + 1;
  }
  else
  {
    secondMinute = 0;
    firstHour = firstHour + 1;
  }
}
else if (firstHour > 3)
{
  if(secondHour > 1)
  {
    setToZero("reset1");
  }
}
else if (firstHour > 9)
{
  firstHour = 0;
  secondHour = secondHour + 1;
}
else
{
   firstSecond = firstSecond + 1;
}
figures[0].src = 'css/figure-' + secondHour + '.png';
figures[1].src = 'css/figure-' + firstHour + '.png';
figures[2].src = 'css/figure-' + secondMinute + '.png';
figures[3].src = 'css/figure-' + firstMinute + '.png';
figures[4].src = 'css/figure-' + secondSecond + '.png';
figures[5].src = 'css/figure-' + firstSecond + '.png';
}
function setToZero(x)
{
var a = document.getElementById(x);
firstSecond = 0;
secondSecond = 0;
firstMinute = 0;
secondMinute = 0;
firstHour = 0;
secondHour = 0;
figures[0].src = 'css/figure-' + secondHour + '.png';
figures[1].src = 'css/figure-' + firstHour + '.png';
figures[2].src = 'css/figure-' + secondMinute + '.png';
figures[3].src = 'css/figure-' + firstMinute + '.png';
figures[4].src = 'css/figure-' + secondSecond + '.png';
figures[5].src = 'css/figure-' + firstSecond + '.png';  
}
function stopFunction(x)
{
console.log("Stop");
var a = document.getElementById(x);
a.disabled = true;
document.getElementById("start").disabled = false;
document.getElementById("reset").disabled = false;
clearInterval(interval);
}
