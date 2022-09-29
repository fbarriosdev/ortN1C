Algoritmo Ej2_mar22
	salidaEncontrada <- 0
	posicionInicial <- numeroAlAzar(1,4)
	simSigeLineas <- 0
	sigue_lineas()
	// Se toma un valor al azar entre 1 y 4, seguún este, se 
	Si posicionInicial>2 Entonces
		Si posicionInicial=3 Entonces
			simReposicionarMBot(-150,50,-90)
		SiNo
			simReposicionarMBot(20,50,-90)
		FinSi
	SiNo
		Si posicionInicial=1 Entonces
			simReposicionarMBot(100,50,0)
		SiNo
			simReposicionarMBot(-60,-90,-90)
		FinSi
	FinSi
	reiniciar_Cronometro()
	Si posicionInicial>2 Entonces
		Si posicionInicial=3 Entonces
			girar_izquierda(50)
			simEsperar(1)
			girar_izquierda(0)
			recorrer(6,70)
			seguirLineaNegra()
			girar_izquierda(50)
			simEsperar(1)
			girar_izquierda(0)
			recorrer(40,70)
			girar_derecha(70)
			simEsperar(1)
			girar_derecha(0)
			recorrer(25,70)
			seguirLineaNegra()
		SiNo
			girar_derecha(130)
			simEsperar(1)
			girar_derecha(0)
			recorrer(17,70)
			seguirLineaNegra()
		FinSi
	SiNo
		Si posicionInicial=1 Entonces
			girar_derecha(80)
			simEsperar(1)
			girar_derecha(0)
			seguirLineaNegra()
		SiNo
			girar_derecha(70)
			simEsperar(2)
			girar_derecha(0)
			seguirLineaNegra()
			girar_izquierda(50)
			simEsperar(1)
			girar_izquierda(0)
			recorrer(40,70)
			girar_derecha(70)
			simEsperar(1)
			girar_derecha(0)
			recorrer(25,70)
			seguirLineaNegra()
		FinSi
	FinSi
	avanzar(0)
	decirComentario('¡Salida encontrada!',2)
	parar()
FinAlgoritmo

// Función que representa el bloque "dí" en mblock
Funcion decirComentario(comentario,duracionComentario)
	// Muestra un mensaje, recibido por parámetro
	// durante el tiempo que también se recibió por parámetro
FinFuncion

// Función para detener el programa por completo
Funcion parar()
	// Detención del programa
FinFuncion

Funcion seguirLineaNegra()
	Si simSigeLineas<3 Entonces
		Mientras  NO (simSigeLineas=3) Hacer
			Si simSigueLineas=0 Entonces
				avanzar(70)
			FinSi
			Si simSigueLineas=1 Entonces
				girar_izquierda(100)
			FinSi
			Si simSigueLineas=2 Entonces
				girar_derecha(100)
			FinSi
		FinMientras
	FinSi
FinFuncion

// ejemplo de una funci?n de mBlock en seudoc?digo
Funcion n = numeroAlAzar(a,b)
	// n = un n?mero al azar entre a y b 
FinFuncion

// equivalentes del simulador
Funcion simReposicionarMBot(xPos,yPos,direccion)
	// reposiiona mBot en el escenario
FinFuncion

Funcion simEsperar(cuantos_segundos)
	// esta es la funci?n esperar del simulador
FinFuncion

Funcion reiniciar_Cronometro()
	// simCronometro se actualiza internamente, luego de
	// reiniciar utilizar la variable simCronometro siempre que necesitemos
	// saber cuanto tiempo transcurri? desde el ?ltimo reinicio
	simCronometro <- 0
FinFuncion

Funcion ultra_sonido()
	// esta funci?n carga en la variable global simDistanciaUltrasonido
	// el valor que devuelve el sensor
	// simDistanciaUltrasonido = distancia_reportada_por_el_sensor
FinFuncion

Funcion sigue_lineas()
	// esta funci?n carga en la variable simSigueLinea
	// el valor que devuelve el sensor
	// simSigueLinea = valor_reportado_por_el_sensor
FinFuncion

Funcion fijar_luces(color)
	// cambia el color de las luces del mBot seg?n 6 colores predefinidos
	// 0=Negro, 1=Azul, 2=Rojo, 3=Verde, 4=Amarillo, 5=Blanco
FinFuncion

Funcion sonido()
	// hace que el mBot genere un beep.
FinFuncion

Funcion girar_izquierda (velocidad)
	
FinFuncion

Funcion girar_derecha (velocidad)
	
FinFuncion

Funcion retroceder (velocidad)
	
FinFuncion

Funcion avanzar (velocidad)
	
FinFuncion

Funcion fijar_M1(velocidad)
	
FinFuncion

Funcion fijar_M2(velocidad)
	
FinFuncion

Funcion bajar_lapiz()
	
FinFuncion

Funcion subir_lapiz()
	
FinFuncion

Funcion Siguelineas_hacia_adelante()
	
FinFuncion

Funcion Siguelineas_hacia_abajo()
	
FinFuncion

Funcion UltraSonido_hacia_adelante()
	
FinFuncion

Funcion Ultrasonido_hacia_la_derecha()
	
FinFuncion

Funcion UltraSonido_hacia_la_izquierda()
	
FinFuncion

Funcion girar(grados,velocidad)
	// si grados es negativo gira a la izquierda, sino, gira a la derecha
	// calcula el tiempo que debe esperar el mBot para
	// girar los grados pasados a la velocidad indicada
	// inicia el giro, genera un retardo apropiado a lo que se necesita y detiene al mBot
FinFuncion

Funcion recorrer(cm,velocidad)
	// si distancia negativa, retrocede, sino, avanza
	// calcula el tiempo que debe esperar el mBot para
	// recorrer los cent?metros pasados a la velocidad indicada
	// inicia el movimiento, genera un retardo apropiado a lo que se necesita y detiene al mBot
FinFuncion
