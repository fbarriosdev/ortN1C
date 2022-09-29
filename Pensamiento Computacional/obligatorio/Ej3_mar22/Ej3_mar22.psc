Algoritmo PROCESARTEXTO
	textoaprocesar <- cargartexto
	Dimension precios[10]
	Escribir textoaprocesar
	Escribir '--------------------------------------------------------------------- '
	Escribir 'Los precios encontrados  son :'
	cargarprecios(precios,textoaprocesar)
	mostrarprecios(precios)
	Escribir ' ---------------------------------------------------------------------'
	promedio <- calcularpromedio(precios)
	Escribir 'El promedio es ',promedio
	Escribir ' ---------------------------------------------------------------------'
	mayorprecio <- obtenermayorprecio(precios)
	Escribir 'El precio de mayor valor es : ',mayorprecio
	Escribir ' ---------------------------------------------------------------------'
	cantidad <- cantidvecesmaximoprecio(precios,mayorprecio)
	Escribir 'El mayor precio es ',mayorprecio,' y aparece ',cantidad,' veces'
	Escribir ' ---------------------------------------------------------------------'
FinAlgoritmo

// retorna el numero si es numero y si no lo es retorna -1
Funcion num <- esnumero(ch)
	num <- -1
	Si (ch='0' O ch='1' O ch='2' O ch='3' O ch='4' O ch='5' O ch='6' O ch='7' O ch='8' O ch='9') Entonces
		num <- ConvertirANumero(ch)
	FinSi
FinFuncion

// carga el texto a procesar en t
Funcion t <- cargartexto()
	t <- 'Los productos elegidos son:  Coca cola de 1litro $105 Pepsi de 1 litro retornable  $65 cerveza pilsen de 1 litro $120  jugo de naranja 1 litro $150 vino tinto don pascual 1 litro $300  vino blanco  1 litro $300  Fanta 600 $55 Coca 600 $55 jugo de uva 1 litro $155  y jugo de limón $200 '
FinFuncion

// parcea el texto a procesar y carga el array de precios
Funcion cargarprecios(precios,textoaprocesar)
	Definir arrayPosicionPrecio Como Entero // Variable para evitar sustituir precios dentro del array
	arrayPosicionPrecio <- 1
	Para i<-1 Hasta Longitud(textoaprocesar) Hacer
		textoAProcesarAuxiliar <- ''
		precioSinLetras <- Falso // Representa el control para filtrar si un precio es alfanumérico
		precioAuxiliar <- ''
		espacioEncontrado <- Falso
		// Si encuentro un sibmolo "$", me quedo con el indice
		Si (Subcadena(textoaprocesar,i,i)='$') Entonces
			// Me guardo la subcadena de este texto, comenzando desde la posición que se encuentra el $, hasta el final del texto
			textoAProcesarAuxiliar <- Subcadena(textoaprocesar,i,Longitud(textoaprocesar))
			// Recorro esta subcadena en busca del primer espacio
			Para j<-1 Hasta Longitud(textoAProcesarAuxiliar) Hacer
				Si (espacioEncontrado=Falso) Entonces
					Si (Subcadena(textoAProcesarAuxiliar,j,j)=' ') Entonces
						indiceSimboloFinAux <- j-1 // Le resto 1 a la variable j para evitar quedarme con el espacio
						espacioEncontrado <- Verdadero
					FinSi
				FinSi
			FinPara
			// Me guardo el texto que corresponde al precio
			precioAuxiliar <- Subcadena(textoAProcesarAuxiliar,1,indiceSimboloFinAux)
			Escribir 'precioAuxiliar: ',precioAuxiliar
			// Recorro cada letra
			precioAuxSinSimbolo <- Subcadena(precioAuxiliar,2,Longitud(precioAuxiliar))
			Escribir 'precioAuxSinSimbolo: ',precioAuxSinSimbolo
			Para k<-1 Hasta Longitud(precioAuxSinSimbolo) Hacer
				// Si no es número, no lo tomo en cuenta y sigo recorriendo el texto principal
				Si (precioSinLetras=Falso) Entonces
					Si (esnumero(Subcadena(precioAuxSinSimbolo,k,k))<0) Entonces
						precioSinLetras <- Verdadero
					FinSi
				FinSi
			FinPara
			// Si es un precio valido, lo guardo en el array
			Si (precioSinLetras=Falso) Entonces
				precios[arrayPosicionPrecio] <- precioAuxiliar
				// Incremento la variable para evitar que se sustituyan
				arrayPosicionPrecio <- arrayPosicionPrecio+1
			FinSi
		FinSi
	FinPara
FinFuncion

// muestra los precios almacenados en el array de precios
Funcion mostrarprecios(precios)
	Para i<-1 Hasta 10 Hacer
		Escribir i,'- ',precios[i]
	FinPara
FinFuncion

// retorna el precio de mayor valor entre tosos los almacenados en el array de precios
Funcion mayorprecio <- obtenermayorprecio(precios)
	Definir precio Como Entero
	mayorprecio <- 0
	Para i<-1 Hasta 10 Hacer
		precio <- ConvertirANumero(Subcadena(precios[i],2,Longitud(precios[i])))
		Si (precio>mayorprecio) Entonces
			mayorprecio <- precio
		FinSi
	FinPara
FinFuncion

// Calcula el promedio de los precios almacenados en el array de precios
Funcion promedio <- calcularpromedio(precios)
	preciototal <- 0
	Para i<-1 Hasta 10 Hacer
		precioValorCadena <- Subcadena(precios[i],1,Longitud(precios[i]))
		preciototal <- preciototal+ConvertirANumero(Subcadena(precioValorCadena,2,Longitud(precioValorCadena)))
	FinPara
	promedio <- preciototal/10
FinFuncion

// la funcion busca la cantidad de veces que aparece el precio de mayor valor
Funcion cantidad = cantidvecesmaximoprecio(precios,mayorprecio)
	Definir precio Como Entero
	Para i<-1 Hasta 10 Hacer
		precio <- ConvertirANumero(Subcadena(precios[i],2,Longitud(precios[i])))
		Si (precio=mayorprecio) Entonces
			cantidad <- cantidad+1
		FinSi
	FinPara
FinFuncion