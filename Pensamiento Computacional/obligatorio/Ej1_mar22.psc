Algoritmo Ej1_mar22
	simSigueLinea = 0
	simDistanciaUltraSonido = 0
	simCronometro = 0
	simOrientacionUltraSonido = 1	// Para la derecha
	simOrientacionSigueLineas = 1
	simContadorParadas = 0 // Contador de paradas por las que irá pasando el mbot
	Dimension simListaCronometro[10] // Lista donde se registran los tiempos por cada parada
	simCapturaParada = 0 // Flag para determinar si estoy pasando por una parada
	
	simReposicionarMBot(218, 90, -90)
	reiniciar_Cronometro()
	Mientras No (simSigueLinea = 3) 
		Si simSigueLinea = 0 Entonces
			avanzar(50)
			// Si el sensor detecta que estoy a 7cm de una parada, ejecuto las acciones correspondientes
			Si simDistanciaUltraSonido > 6 Y simDistanciaUltraSonido < 8 Entonces
				Si simCapturaParada = 0 Entonces
					// Actualizo la variable global por una nueva parada detectada
					simContadorParadas = simContadorParadas + 1
					// Mientras me encuentre dentro de la cantidad de paradas correspondientes
					// (en mblock no logré filtrar correctamente, por lo que tuve que purgar la
					// tabla tras finalizar la ejecución del recorrido, pero el funcionamiento correcto
					// sería este).
					Si simContadorParadas < 8 Entonces
						simListaCronometro[simContadorParadas] = simCronometro
					FinSi
					simCapturaParada = 1
				FinSi
			SiNo
				simCapturaParada = 0
			FinSi
		FinSi
		Si simSigueLinea = 1 Entonces
			girar_derecha(50)
		FinSi
		Si simSigueLinea = 2 Entonces
			girar_izquierda(50)
		FinSi
	Fin Mientras
	avanzar(0)
FinAlgoritmo

//ejemplo de una funci?n de mBlock en seudoc?digo
Funcion n=numeroAlAzar(a,b)
	//n = un n?mero al azar entre a y b 
FinFuncion

//equivalentes del simulador
Funcion simReposicionarMBot(xPos,yPos,direccion)
	//reposiiona mBot en el escenario
FinFuncion

Funcion simEsperar(cuantos_segundos)
	//esta es la funci?n esperar del simulador
FinFuncion

Funcion reiniciar_Cronometro()
	//simCronometro se actualiza internamente, luego de
	//reiniciar utilizar la variable simCronometro siempre que necesitemos
	//saber cuanto tiempo transcurri? desde el ?ltimo reinicio
	simCronometro = 0
FinFuncion


Funcion ultra_sonido()
	//esta funci?n carga en la variable global simDistanciaUltrasonido
	//el valor que devuelve el sensor
	//simDistanciaUltrasonido = distancia_reportada_por_el_sensor
Fin Funcion

Funcion sigue_lineas()
	//esta funci?n carga en la variable simSigueLinea
	//el valor que devuelve el sensor
	//simSigueLinea = valor_reportado_por_el_sensor
Fin Funcion

Funcion fijar_luces(color)
	//cambia el color de las luces del mBot seg?n 6 colores predefinidos
	//0=Negro, 1=Azul, 2=Rojo, 3=Verde, 4=Amarillo, 5=Blanco
FinFuncion

Funcion sonido()
	//hace que el mBot genere un beep.
FinFuncion

Funcion girar_izquierda ( Velocidad )
Fin Funcion

Funcion girar_derecha ( Velocidad )
Fin Funcion

Funcion retroceder ( Velocidad )
Fin Funcion

Funcion avanzar ( Velocidad )
Fin Funcion

Funcion fijar_M1( velocidad )
Fin Funcion

Funcion fijar_M2( velocidad )
Fin Funcion

funcion bajar_lapiz()
Fin Funcion	

funcion	subir_lapiz()
Fin Funcion

funcion Siguelineas_hacia_adelante()
FinFuncion

funcion Siguelineas_hacia_abajo()
FinFuncion

funcion UltraSonido_hacia_adelante()
FinFuncion

funcion Ultrasonido_hacia_la_derecha()
FinFuncion

funcion UltraSonido_hacia_la_izquierda()
FinFuncion

Funcion girar(grados, velocidad)
	//si grados es negativo gira a la izquierda, sino, gira a la derecha
	//calcula el tiempo que debe esperar el mBot para
	//girar los grados pasados a la velocidad indicada
	//inicia el giro, genera un retardo apropiado a lo que se necesita y detiene al mBot
FinFuncion

Funcion recorrer(cm, velocidad)
	//si distancia negativa, retrocede, sino, avanza
	//calcula el tiempo que debe esperar el mBot para
	//recorrer los cent?metros pasados a la velocidad indicada
	//inicia el movimiento, genera un retardo apropiado a lo que se necesita y detiene al mBot
FinFuncion