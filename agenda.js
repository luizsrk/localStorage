var agenda =[];
obtenerDatosAgenda();
createTableFronJson();
function grabarDato() {
  var numeroVal = document.getElementById('txtNumero').value;
  var nombreVal = document.getElementById('txtNombre').value;
  if(existeDato(numeroVal)==true){
    alert("Ya existe la agenda");
  }else {
    var datosAgenda = {};
    datosAgenda.numero = numeroVal;
    datosAgenda.nombre = nombreVal;
    agenda.push(datosAgenda);
    createTableFronJson();
    localStorage.setItem("agenda", JSON.stringify(agenda));
  }
}

function obtenerDatosAgenda(){
  agenda=JSON.parse(localStorage.getItem("agenda"));
  if(agenda==null){
    agenda=[];
  }
}

function createTableFronJson(){

  var col = [];
  for (var i=0 ;i<agenda.length;i++){
    for (var key in agenda[i]){
      if(col.indexOf(key)=== -1){
        col.push(key);
      }
    }
  }
  var table = document.createElement("table");
  var tr = table.insertRow(-1);                   // TABLE ROW.
  for (var i = 0; i < col.length; i++) {
    var th = document.createElement("th");      // TABLE HEADER.
    th.innerHTML = col[i].toUpperCase();
    tr.appendChild(th);
  }

  for (var i = 0; i < agenda.length; i++) {
    tr = table.insertRow(-1);
    for (var j = 0; j < col.length; j++) {
      var tabCell = tr.insertCell(-1);
      tabCell.innerHTML = agenda[i][col[j]];
    }
  }

  var divContainer = document.getElementById("mostrarData");
  divContainer.innerHTML = "";
  divContainer.appendChild(table);

}
function eliminarDato (idValor){
  agenda.forEach(function(element, index) {
    if(idValor===element.numero){
      agenda.splice(index, 1);
    }
  });
  createTableFronJson();
  localStorage.setItem("agenda", JSON.stringify(agenda));

}
function eliminarAll(){
  agenda =[];
  localStorage.clear();
  createTableFronJson();
}
function existeDato(idValor){
  for(var element of agenda) {
    var valor = element['numero'];
    if(idValor===valor){
      return true;
    }
  }
  return false;
  //comentario
}
