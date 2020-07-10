function generar(){
    document.getElementById("voto").style.display='block';
  
    var titulo = document.getElementById("nombrem").value;
    document.getElementById("nombre").innerHTML = nombre;
  
    var subtitulo =document.getElementById("apellidom").value;
    document.getElementById("apellido").innerHTML = apellido;
  
    var autor = document.getElementById("inem").value;
    document.getElementById("ine").innerHTML = ine;

    var a = document.getElementsByName("a");
    var b = document.getElementsByName("b");
    var c = document.getElementsByName("c");

    switch (n) {
        case 'a':
          document.getElementById("seccion").class="uno";
          break;
          case 'b':
            document.getElementById("seccion").class="dos";
            break;
            case 'c':
              document.getElementById("seccion").class="tres";
              break;
      
        default:
          seccionop='nada';
          break;
      }
}