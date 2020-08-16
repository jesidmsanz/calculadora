
   /* Actualiza la pantalla de la calculadora poniendo el valor que se pase como parámetro en este caso "value". */
   function mostrarResultado(value)
    {
         document.getElementById('result').innerHTML = value;
    }
    /* Recoge el valor del último resultado obtenido, o de la operacion matemática que se debe calcular,
    y que se está visualizando en la pantalla. */
    function obtenerResultado()
    {
        return(document.getElementById('result').innerHTML)
    }
    /* Añade a la pantalla el boton pulsado.
    Si la pantalla ya contiene algún dato o la tecla que se pulsa no es un dígito, 
    el valor de la tecla pulsada se añadirá a la pantalla. 
    y si es cero se remplazara por la tecla pulsada*/
    function add(botonPulsado)
    {
        let result = obtenerResultado();
        if 
        (result !='0') 
        {
            mostrarResultado(result + botonPulsado);
        }else{
            mostrarResultado(botonPulsado);
        } 
    }
    /* Realiza el cálculo de la operacion que se encuentre en la pantalla 
    (utilizando la función eval()), y escribe el resultado en la pantalla. */
    function resultado()
    {
        let result = eval(obtenerResultado());
        mostrarResultado(result);
    }
    /* Pone en cero el contenido de la pantalla. */
    function reset()
    {
        mostrarResultado(0);
    }