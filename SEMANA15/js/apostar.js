function apostar(){
    var a=Math.round(Math.random()*10);//numero aleatoria de o a 10//
    document.getElementById("resultado").value=a;
    var b=document.getElementById("apostado").value;
    if (a==b){
      document.getElementById("salida").value="ganó";
    } else {
      document.getElementById("salida").value="perdió";
    }
  }
  function cancel(){
    document.getElementById("apostado").value=" ";//borrar con espacio
    document.getElementById("resultado").value=" ";
    document.getElementById("salida").value=" ";
  }
