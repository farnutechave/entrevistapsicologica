function datosPersonales(){
    
    do{
        nombre = prompt ("Ingresa tu Apellido y Nombre") 
    }while (nombre ==="")
        document.write ("Muchas gracias " + nombre + "<br>")
    
    do{
         edad = prompt ("Ingrese su edad")
    }while (edad <=17)
        alert ("Eres mayos de eddad podemos continuar");
    
    do{
        domicilio = prompt ("Ingrese su domicilio")
    }while(domicilio ==="");
    
    do{
         movil = prompt ("Ingrese un numero telefónico")
    }while (movil=== "");
    
    do{
       mail = prompt ("Ingrese su e-mail")
    }while (mail ==="");
    
    do{
        deporte = prompt ("Ingresa el deporte en el cual se desempeña") 
    }while (deporte ==="");


}
datosPersonales()


function asistencia (){

    do{
        motivo = parseInt (prompt ("Ingrese su motivo de consulta: \n 1 - Entrenamiento cognitivo \n 2 - Entrenamiento mental \n 3 - Asesoramiento entrenadores \n 4 - Capacitaciones \n 5- Otro"));
    
    }while (motivo!=1 && motivo!=2 &&  motivo!=3 &&  motivo!=4 && motivo!=5);
    
    switch(motivo){
        case 1: 
            alert ("Usted selecciono entrenamiento cogniivo");
            break
    
        case 2: 
            alert ("Usted selecciono entrenamiento mental");
            break
        
        case 3: 
            alert ("Usted selecciono entrenamiento mental");
            break
        
        case 4: 
            alert ("Usted selecciono capacitaciones");
            break
        case 5: 
            alert ("Usted selecciono otro");
            break
    }

    let cantidad = prompt ("¿Cuántas personas son?");
    let alumnosTotales = [];

    for (i = 0; i < cantidad; i++){
        alumnosTotales [i] = [prompt ("Nombre del alumno " + (i+1)),0];
    }
    const tomarAsistencia = (nombre,p)=> {
        let presencia = prompt (nombre);
        if (presencia == "p" || presencia =="P"){
            alumnosTotales [p] [1]++;
        }
    }

    for (i = 0; i < 3; i++){ //Repito bucle 3 veces
        for (alumno in alumnosTotales){
            tomarAsistencia (alumnosTotales[alumno][0],alumno);
        }
    }

    for (alumno in alumnosTotales){
      let resultado = `${alumnosTotales[alumno][0]}:<br>
            Presentes: ${alumnosTotales[alumno][1]} <br>
            Ausentes: ${3 - parseInt (alumnosTotales [alumno[1]])}`;
            if (3 - alumnosTotales [alumno][1] >2){
                resultado += "REPROBADO POR INASISTENCIA </b><br><br>";
            }else {
                resultado += "<br><br>"
            } 
            document.write (resultado)
    }  
}
    
asistencia()

function sesgos(){

    alert("SITUACIÓN Nº 1: El DT me dijo que muy bien el entrenamiento, pero debería mejorar la recepción orientada")
    
    do{
        selectividad1= parseInt(prompt("No le gusto como entrene hoy: \n 1 - Mucho \n 2 - Poco \n 3 - Nada"))
    }while (selectividad1 !=1 && selectividad1 !=2 && selectividad1 !=3);

    do{
        generalizar1 = parseInt(prompt("Fue un mal entrenamiento: \n 1 - Mucho \n 2 - Poco \n 3 - Nada"))
    }while (generalizar1 !=1 && generalizar1 !=2 && generalizar1 !=3 );

    do{
        catastrofico1 = parseInt(prompt("Si esto me pasa otra vez, pierdo todo: \n 1 - Mucho \n 2 - Poco \n 3 - Nada"))
    }while (catastrofico1 !=1 && catastrofico1 !=2 && catastrofico1 !=3 );

    do{
        personalizacion1 = parseInt(prompt("Si me dijo esto, no me tendrá en cuenta: \n 1 - Mucho \n 2 - Poco \n 3 - Nada"))
    }while (personalizacion1 !=1 && personalizacion1 !=2 && personalizacion1 !=3);

    do{
        perfeccionismo1 = parseInt(prompt("El próximo entrenamiento lo debo hacer perfecto: \n 1 - Mucho \n 2 - Poco \n 3 - Nada"))
    }while (perfeccionismo1 !=1 && perfeccionismo1 !=2 && perfeccionismo1 !=3);

    do{
        descalificacionPositivo1 = parseInt(prompt("No me salió nada bien: \n 1 - Mucho \n 2 - Poco \n 3 - Nada"))
    }while (descalificacionPositivo1 !=1 && descalificacionPositivo1 !=2 && descalificacionPositivo1 !=3);

    do{
        maximizacion1 = parseInt(prompt("Hice todo el entrenamiento mal: \n 1 - Mucho \n 2 - Poco \n 3 - Nada"))
    }while (maximizacion1 !=1 && maximizacion1 !=2 && maximizacion1 !=3);

    do{
        etiquetacion1 = parseInt(prompt("Soy un pecho frìo, pierdo oportunidades: \n 1 - Mucho \n 2 - Poco \n 3 - Nada"))
    }while (etiquetacion1 !=1 && etiquetacion1 !=2 && etiquetacion1 !=3);

    do{
        conclusionesApresuradas1 = parseInt(prompt("El fin de semana no estaré en la lista de concentrados: \n 1 - Mucho \n 2 - Poco \n 3 - Nada"))
    }while (conclusionesApresuradas1 !=1 && conclusionesApresuradas1 !=2 && conclusionesApresuradas1 !=3);

    do{
        razonamientoMagico1 = parseInt(prompt("Vengo entrenado mal, es una mala racha solamente: \n 1 - Mucho \n 2 - Poco \n 3 - Nada"))
    }while (razonamientoMagico1 !=1 && razonamientoMagico1 !=2 && razonamientoMagico1 !=3);
    
    alert("SITUACIÓN Nº 2: El DT no me hablo en todo el entrenamiento, y si lo hizo con mis compñaeros")
   
    do{
        selectividad2= parseInt(prompt("Me debo ir a otro club, acá esta todo mal: \n 1 - Mucho \n 2 - Poco \n 3 - Nada"))
    }while (selectividad2 !=1 && selectividad2 !=2 && selectividad2 !=3);
    
    do{
        generalizar2 = parseInt(prompt("Si no me habla, seguro que no me tendra en cuenta: \n 1 - Mucho \n 2 - Poco \n 3 - Nada"))
    }while (generalizar2 !=1 && generalizar2 !=2 && generalizar2 !=3);

    do{
        catastrofico2 = parseInt(prompt("No me habla, no me tendrá en cuenta: \n 1 - Mucho \n 2 - Poco \n 3 - Nada"))
    }while (catastrofico2 !=1 && catastrofico2 !=2 && catastrofico2 !=3);

    do{
        personalizacion2 = parseInt(prompt("No estoy a la aitura de mis compañeros: \n 1 - Mucho \n 2 - Poco \n 3 - Nada"))
    }while (personalizacion2 !=1 && personalizacion2 !=2 && personalizacion2 !=3);

    do{
        perfeccionismo2 = parseInt(prompt("Debo hacer las cosas perfectas para gustarle al DT: \n 1 - Mucho \n 2 - Poco \n 3 - Nada"))
    }while (perfeccionismo2 !=1 && perfeccionismo2 !=2 && perfeccionismo2 !=3);

    do{
        descalificacionPositivo2 = parseInt(prompt("Hace tiempo que no haga nada bien: \n 1 - Mucho \n 2 - Poco \n 3 - Nada"))
    }while (descalificacionPositivo2 !=1 && descalificacionPositivo2 !=2 && descalificacionPositivo2 !=3);

    do{
        maximizacion2 = parseInt(prompt("Soy mal jugador, sino me hablaría más: \n 1 - Mucho \n 2 - Poco \n 3 - Nada"))
    }while (maximizacion2 !=1 && maximizacion2 !=2 && maximizacion2 !=3);

    do{
        etiquetacion2 = parseInt(prompt("Un buen jugador, siempre recibe instrucciones: \n 1 - Mucho \n 2 - Poco \n 3 - Nada"))
    }while (etiquetacion2 !=1 && etiquetacion2 !=2 && etiquetacion2 !=3);

    do{
        conclusionesApresuradas2 = parseInt(prompt("Si no me hablo, es porque no le intereso como jugador: \n 1 - Mucho \n 2 - Poco \n 3 - Nada"))
    }while (conclusionesApresuradas2 !=1 && conclusionesApresuradas2 !=2 && conclusionesApresuradas2 !=3);

    do{
        razonamientoMagico2 = parseInt(prompt("No me habla, porque no tiene que corregirme nada: \n 1 - Mucho \n 2 - Poco \n 3 - Nada"))
    }while (razonamientoMagico2 !=1 && razonamientoMagico2 !=2 && razonamientoMagico2 !=3);

   
    alert("SITUACIÓN Nº 3: Comence el partido haciendo dos pases mal")
   
    do{
        selectividad3= parseInt(prompt("Dos pases mal, no tengo nada bueno para seguir: \n 1 - Mucho \n 2 - Poco \n 3 - Nada"))
    }while (selectividad3 !=1 && selectividad3 !=2 && selectividad3 !=3);
    
    do{
        generalizar3 = parseInt(prompt("Iniciar mal, tira a la basura todo el entrenamiento: \n 1 - Mucho \n 2 - Poco \n 3 - Nada"))
    }while (generalizar3 !=1 && generalizar3 !=2 && generalizar3 !=3);

    do{
        catastrofico3 = parseInt(prompt("Seguro tendré un mal partido: \n 1 - Mucho \n 2 - Poco \n 3 - Nada"))
    }while (catastrofico3 !=1 && catastrofico3 !=2 && catastrofico3 !=33);

    do{
        personalizacion3 = parseInt(prompt("Lo errores me definen como jugador: \n 1 - Mucho \n 2 - Poco \n 3 - Nada"))
    }while (personalizacion3 !=1 && personalizacion3 !=2 && personalizacion3 !=3);

    do{
        perfeccionismo3 = parseInt(prompt("Un buen jugador no se equivoca así: \n 1 - Mucho \n 2 - Poco \n 3 - Nada"))
    }while (perfeccionismo3 !=1 && perfeccionismo3 !=2 && perfeccionismo3 !=3);

    do{
        descalificacionPositivo3 = parseInt(prompt("Empezar mal, implica que terminaré mal: \n 1 - Mucho \n 2 - Poco \n 3 - Nada"))
    }while (descalificacionPositivo3 !=1 && descalificacionPositivo3 !=2 && descalificacionPositivo3 !=3);

    do{
        maximizacion3 = parseInt(prompt("Es muy dificil salir cuando comenzas así: \n 1 - Mucho \n 2 - Poco \n 3 - Nada"))
    }while (maximizacion3 !=1 && maximizacion3 !=2 && maximizacion3 !=3);

    do{
        etiquetacion3 = parseInt(prompt("Soy un tibio, me pesan algunos partidos: \n 1 - Mucho \n 2 - Poco \n 3 - Nada"))
    }while (etiquetacion3 !=1 && etiquetacion3 !=2 && etiquetacion3 !=3);

    do{
        conclusionesApresuradas3 = parseInt(prompt("Me van a cambiar en cualquier momento: \n 1 - Mucho \n 2 - Poco \n 3 - Nada"))
    }while (conclusionesApresuradas3 !=1 && conclusionesApresuradas3 !=2 && conclusionesApresuradas3 !=3);

    do{
        razonamientoMagico3 = parseInt(prompt("Mis compañeros dudarán de mi como jugador: \n 1 - Mucho \n 2 - Poco \n 3 - Nada"))
    }while (razonamientoMagico3 !=1 && razonamientoMagico3 !=2 && razonamientoMagico3 !=3);



        // SELECTIVIDAD

        const resselectividad = (selectividad1 + selectividad2 + selectividad3)

        if ((selectividad1 + selectividad2 + selectividad3) >= 3 && (selectividad1 + selectividad2 + selectividad3) <5){
            document.write ("Selectividad: Debemos revisar este punto" + "<br>") 
        }
        else if ((selectividad1 + selectividad2 + selectividad3) >= 5 && (selectividad1 + selectividad2 + selectividad3)<7){  
            document.write ("Selectividad: Algo a tener en cuenta" + "<br>")
        }
        else{
            document.write ("Selectividad: Parace que aquí estamos bien" + "<br>")
        }
            

        // GENERALIZAR
        
        if ((generalizar1 + generalizar2 + generalizar3) >=  3 && (generalizar1 + generalizar2 + generalizar3) <5){
            document.write ("Generalizar: Debemos revisar este punto" + "<br>")  
        }
        else if ((generalizar1 + generalizar2 + generalizar3) >= 5 && (generalizar1 + generalizar2 + generalizar3) <7){  
            document.write ("Generalizar: Algo a tener en cuenta" + "<br>")
        }
        else{
            document.write ("Generalizar: Parace que aquí estamos bien" + "<br>")
        }

        //CATASTROFICO
        if ((catastrofico1 + catastrofico2 + catastrofico3) >= 3 && (catastrofico1 + catastrofico2 + catastrofico3) <5){
            document.write ("Catastrofico: Debemos revisar este punto" + "<br>")
        }
        else if ((catastrofico1 + catastrofico2 + catastrofico3) >= 5 && (catastrofico1 + catastrofico2 + catastrofico3) <7){  
            document.write ("Catastrofico: Algo a tener en cuenta" + "<br>")
        }
        else{
            document.write ("Catastrofico: Parace que aquí estamos bien" + "<br>")
        }

        // PERSONALIZACION
        if ((personalizacion1 + personalizacion2 + personalizacion3) >= 3 && (personalizacion1 + personalizacion2 + personalizacion3) <5){
            document.write ("Personalizacion: Debemos revisar este punto" + "<br>")
        }
        else if ((personalizacion1 + personalizacion2 + personalizacion3) >= 5 && (personalizacion1 + personalizacion2 + personalizacion3) <7){  
            document.write ("Personalizacion: Algo a tener en cuenta" + "<br>")
        }
        else{
            document.write ("Personalizacion: Parace que aquí estamos bien" + "<br>")
        }

        // PERFECCIONISMO
        if ((perfeccionismo1 + perfeccionismo2 + perfeccionismo3) >=3 && (perfeccionismo1 + perfeccionismo2 + perfeccionismo3) <5){
            document.write ("Perfeccionismo: debemos revisar este punto" + "<br>")
        }
        else if ((perfeccionismo1 + perfeccionismo2 + perfeccionismo3) >=5 && (perfeccionismo1 + perfeccionismo2 + perfeccionismo3) <7){
            document.write ("Perfeccionismo: Algo a tener en cuenta" + "<br>")
        }
        else {
            document.write ("Perfeccionsimo: Parece que aquí estamos bien" + "<br>")
        }
        
        // DESCALIFICACION
        if ((descalificacionPositivo1 + descalificacionPositivo2 + descalificacionPositivo3) >= 3 && (descalificacionPositivo1 + descalificacionPositivo2 + descalificacionPositivo3) <5){
            document.write ("Descalificacion Positivo: Debemos revisar este punto" + "<br>")
           
        }
        else if ((descalificacionPositivo1 + descalificacionPositivo2 + descalificacionPositivo3) >= 5 && (descalificacionPositivo1 + descalificacionPositivo2 + descalificacionPositivo3)<7){  
            document.write ("Descalificacion Positivo: Algo a tener en cuenta" + "<br>")
        }
        else{
            document.write ("Descalificacion Positivo: Parace que aquí estamos bien" + "<br>")
        }

        // MAXIMIZACION
        if ((maximizacion1 + maximizacion2 + maximizacion3)>= 3 && (maximizacion1 + maximizacion2 + maximizacion3) <5){
            document.write ("Maximizacion: Debemos revisar este punto" + "<br>")
        }
        else if ((maximizacion1 + maximizacion2 + maximizacion3) >= 5 && (maximizacion1 + maximizacion2 + maximizacion3) <7){  
            document.write ("Maximizacion: Algo a tener en cuenta")
        }
        else{
            document.write ("Maximizacion: Parace que aquí estamos bien" + "<br>")
        }

        // ETIQUETACION
        if ((etiquetacion1 + etiquetacion2 + etiquetacion3) >= 3 && (etiquetacion1 + etiquetacion2 + etiquetacion3) <5){
            document.write ("Etiquetacion: Debemos revisar este punto" + "<br>")
        }
        else if ((etiquetacion1 + etiquetacion2 + etiquetacion3) >= 5 && (etiquetacion1 + etiquetacion2 + etiquetacion3) <7){  
            document.write ("Etiquetacion: Algo a tener en cuenta" + "<br>")
        }
        else{
            document.write ("Etiquetacion: Parace que aquí estamos bien" + "<br>")
        }

        //CONCLUSIONES APRESURADAS
        if ((conclusionesApresuradas1 + conclusionesApresuradas2 + conclusionesApresuradas3) >= 3 && (conclusionesApresuradas1 + conclusionesApresuradas2 + conclusionesApresuradas3)<5){
            document.write ("Conclusiones Apresuradas: Debemos revisar este punto" + "<br>")
        }
        else if ((conclusionesApresuradas1 + conclusionesApresuradas2 + conclusionesApresuradas3)>= 5 && (conclusionesApresuradas1 + conclusionesApresuradas2 + conclusionesApresuradas3)<7){  
            document.write ("Conclusiones Apresuradas: Algo a tener en cuenta" + "<br>")
        }
        else{
            document.write ("Conclusiones Apresuradas: Parace que aquí estamos bien" + "<br>")
        }

        //RAZONAMIENTO MAGICO
        if ((razonamientoMagico1 + razonamientoMagico2 + razonamientoMagico3) >= 3 && (razonamientoMagico1 + razonamientoMagico2 + razonamientoMagico3) <5){
            document.write ("Razonamiento Magico: Debemos revisar este punto" + "<br>")
        }
        else if ((razonamientoMagico1 + razonamientoMagico2 + razonamientoMagico3) >= 5 && (razonamientoMagico1 + razonamientoMagico2 + razonamientoMagico3)<7){  
            document.write ("Razonamiento Magico: Algo a tener en cuenta" + "<br>")
        }
        else{
            document.write ("Razonamiento Magico: Parace que aquí estamos bien" + "<br>")
        }
    }

    sesgos()

        