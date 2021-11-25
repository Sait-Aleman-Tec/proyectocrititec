
setInterval(() => { //Ejecutar fecha cada segundo
    let fecha = new Date();
    const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    const dias = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
    const mes = meses[fecha.getMonth()];
    const dia = dias[fecha.getDay()];
    const diaN = fecha.getDate();
    const horas = (String(fecha.getHours()).length == 2) ? fecha.getHours() : `0${fecha.getHours()}`;
    const minutos = (String(fecha.getMinutes()).length == 2) ? fecha.getMinutes() : `0${fecha.getMinutes()}`;
    const segundos = (String(fecha.getSeconds()).length == 2) ? fecha.getSeconds() : `0${fecha.getSeconds()}`;

    //Mostrando fecha
    document.getElementById('dia').innerHTML = dia;
    document.getElementById('mes').innerHTML = `${diaN} ${mes}`;
    document.querySelector('#hora p:nth-child(1)').innerHTML = horas;
    document.querySelector('#hora p:nth-child(2)').innerHTML = minutos;
    document.querySelector('#hora p:nth-child(3)').innerHTML = segundos;
}, 1000);
