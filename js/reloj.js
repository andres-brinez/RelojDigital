const mostrarReloj = ()=>{

  let fecha = new Date();

  // obtiene la hora actual
  let hr = formatoHora(fecha.getHours());
  let min = formatoHora(fecha.getMinutes());
  let seg = formatoHora(fecha.getSeconds());

  // mostrar la hora en el documento
  document.getElementById('hora').innerHTML = `${hr}:${min}:${seg}`;

  // obtiene la fecha actual 
  const meses = ['Ene', 'Feb', 'Mar','Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  const dias = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
  let diaSemana = dias[fecha.getDay()];
  let dia = fecha.getDate();
  let mes = meses[fecha.getMonth()];

  // mostrar la fecha en el documento
  let fechaTexto = `${diaSemana}, ${dia} de ${mes}`;
  document.getElementById('fecha').innerHTML = fechaTexto;

  // agrega clase al documento
  document.getElementById('contenedor').classList.toggle('animar');
}

const formatoHora = (hora)=>{
  // da formato a  la  hora menor de 10
  if(hora < 10)
      hora = '0' + hora;
  return hora;    
}

// actualizar el reloj cada segundo 
setInterval(mostrarReloj, 1000);