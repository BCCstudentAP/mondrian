
//Variable Requirements This is going to be the size of my mondrian canvas. 
var canvasWidth=1000
var canvasHeight=1000

//extra variables
var browserReferencePoint=1100
var browserPointSecond=1200

//From Implement Html Canvas
//Accessing the html and css elements
var canvas = document.getElementById('creativeCoding');

/*  Canvas API Draw Loop */
var ctx = canvas.getContext('2d');
dpi = window.devicePixelRatio;


//From resolution of design
function fix_dpi() {
    let style = {
      height() {
        return +getComputedStyle(canvas).getPropertyValue('height').slice(0,-2);
      },
      width() {
        return +getComputedStyle(canvas).getPropertyValue('width').slice(0,-2);
      }
    }
  canvas.setAttribute('width', style.width() * dpi);
  canvas.setAttribute('height', style.height() * dpi);
}

/*  Fallback code*/
function draw() {
  var canvas = document.getElementById('creativeCoding');
  if (canvas.getContext) {
 
    fix_dpi(); 
    var ctx = canvas.getContext('2d');


//Red 
ctx.fillStyle= 'rgb(255, 0, 0)' ;
ctx.fillRect(0, 0, 725, 725)




//Black     Left side
ctx.fillStyle= 'rgb(0, 0, 0)' ;

ctx.fillRect(0, 725, canvasWidth, 25)
ctx.fillRect(0, canvasHeight-137, 100, 25)
ctx.fillRect(100, canvasHeight-250, 25, 250)

//Black Part 2 Right side

ctx.fillStyle= 'rgb(0, 0, 0)' ;

ctx.fillRect(canvasWidth-250, 350, 250, 25)
ctx.fillRect(canvasWidth-275, 0, 25, canvasHeight)





//Blue
ctx.fillStyle= 'rgb(0, 0, 255)' ;
ctx.fillRect(canvasWidth-250, canvasHeight-250, 250, 250)

//Yellow

ctx.fillStyle= 'rgb(255, 255, 0)' ;
ctx.fillRect(0, canvasHeight-113, 100, 113)

//Gray
ctx.fillStyle= 'rgb(204, 204, 204)' ;
ctx.fillRect(0, canvasHeight, browserReferencePoint, 50)
ctx.fillRect(canvasHeight, 0, 50, browserReferencePoint)

//Gray2
ctx.fillStyle= 'rgb(127, 127, 127)' ;
ctx.fillRect(browserReferencePoint, browserReferencePoint, 50, 50)
ctx.fillRect(browserPointSecond, browserPointSecond, 50, 50)

}}