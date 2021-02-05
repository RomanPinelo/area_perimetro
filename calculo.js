/**********************************************************************

    TOMAR LOS DATOS DE LOS INPUT Y CALCULAR ÁREA Y PERÍMETRO

**********************************************************************/
/* Datos de altura y base */
var base = document.getElementById("longitudBase");
var altura = document.getElementById("longitudAltura");


function calcularAreaPerimetro() {
  var longitudBase = parseInt(base.value);
  var longitudAltura = parseInt(altura.value);
  
  var area,perimetro;
  
  if(longitudBase>300 || longitudAltura>300) {
    alert("Ingrese valores menores o iguales a 300");
  }
  
  else if(longitudBase<=0 || longitudAltura<=0) {
    alert("Ingrese valores mayores a 0");
  }
  
  else {
    area = longitudBase * longitudAltura; 
    perimetro = (longitudBase * 2) + (longitudAltura * 2);

    document.getElementById('resultadoArea').innerHTML=area + " unidades cuadradas";
    document.getElementById('resultadoPerimetro').innerHTML=perimetro + " unidades";

    dibujarRectangulo(longitudBase, longitudAltura);  
  }
  

}

/* Botón de calcular */
var boton = document.getElementById("botonCalcular");
boton.addEventListener("click", calcularAreaPerimetro );


/*************************************************************************************

    BORRAR EL CONTENIDO DE LOS INPUT AL VOLVER A HACER CLICK EN ELLOS

************************************************************************************/
//Borrar contenido del input de la base. 
var borrar_input_base = document.getElementById("longitudBase");
borrar_input_base.addEventListener("click", borraInputBase);

function borraInputBase ()
{
  borrar_input_base = this.value="";
}

//Borrar contenido del input de la altura. 
var borrar_input_altura = document.getElementById("longitudAltura");
borrar_input_altura.addEventListener("click", borraInputAltura);

function borraInputAltura ()
{
  borrar_input_altura = this.value="";
}

/**********************************************************************************

    DIBUJAR EN EL CANVAS

**********************************************************************************/
/* Datos del canvas */
var d = document.getElementById("dibujoRectangulo");
var ancho = d.width;
var alto = d.height;
var lienzo = d.getContext("2d");


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarRectangulo (Base, Altura) {
  var xi = (ancho / 2) - (Base / 2);
  var yi = (alto / 2) - (Altura / 2);
  var xf = xi + Base;
  var yf = yi;
  dibujarLinea("red", xi, yi, xf, yf);
  
  xi = xf;
  yi = yf;
  xf = xi;
  yf = yi + Altura;
  dibujarLinea("red", xi, yi, xf, yf);
  
  xi = xf;
  yi = yf;
  xf = xi - Base;
  yf = yi;
  dibujarLinea("red", xi, yi, xf, yf);
  
  xi = xf;
  yi = yf;
  xf = xi;
  yf = yi - Altura;
  dibujarLinea("red", xi, yi, xf, yf);
}



/**********************************************************************************

    DIBUJAR EN EL CANVAS (ALTERNATIVA DE RECTÁNGULO RELLENO)

**********************************************************************************/
/* Datos del canvas */
/*var d = document.getElementById("dibujoRectangulo");
var ancho = d.width;
var alto = d.height;
var lienzo = d.getContext("2d");


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath();
  lienzo.rect(xinicial, yinicial, xfinal, yfinal);
  lienzo.fillStyle = color;
  lienzo.fill();
}

function dibujarRectangulo (Base, Altura) {
  var xi = (ancho / 2) - (Base / 2);
  var yi = (alto / 2) - (Altura / 2);
  var xf = Base;
  var yf = Altura;
  dibujarLinea("red", xi, yi, xf, yf);
}*/



/*******************************************************************************

    BORRAR DATOS, RESULTADO Y DIBUJO
    
*******************************************************************************/
var boton_borrar = document.getElementById("botonBorrar");
boton_borrar.addEventListener("click", borraDatos);

function borraDatos ()
{
  //Borra los resultados
  document.getElementById('resultadoArea').innerHTML="";
  document.getElementById('resultadoPerimetro').innerHTML="";
  //Borra el dibujo en el canvas
  lienzo.clearRect(0, 0, d.width, d.height);
}