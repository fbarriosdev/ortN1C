Algoritmo actuacionDos
	//Mientras no le indique lo contrario, repito la acción.
	flag = Falso //Flag se altera cuando el valor es menor que diez.
	contValues = 0 //Contador de valores registrados
	totalValues = 0 //Acumulador de valores
	strTotalValues = ""
	Mientras flag = Falso Hacer
		//Escribir "flag : ", flag
		//Escribir "strTotalValues : ", strTotalValues
		Escribir "Ingrese un valor!"
		Leer value
		//Valido que este en rango, si no lo esta, me voy.
		Si (estaEnRango(value))
			contValues = contValues + 1
			totalValues = totalValues + value
			//strTotalValues = strTotalValues + ConvertirATexto(value)
		FinSi
		//Si es menor que diez, corto.
		Si (esMenorQueDiez(value))
			flag = Verdadero;
		FinSi
	FinMientras
	
	//Capturo los datos
	result = calcularPromedio(totalValues, contValues)
	
	Si (result > -1)
		Escribir "Se ingreso un número menor a diez"
		Escribir "El promedio total de números entre 30 y 60 es: ", result
		//Escribir "strTotalValues : ", strTotalValues
	SiNo
		Escribir "Intente nuevamente!"
	FinSi
	
FinAlgoritmo

Funcion retVal = esMenorQueDiez(value)
	Si (value < 10)
		retVal = Verdadero
	FinSi
FinFuncion
Funcion retVal = estaEnRango(value)
	Si (value <= 60 Y value >= 30)
		retVal = Verdadero
	FinSi
FinFuncion
Funcion retVal = calcularPromedio(total, cont)
	retVal = -1
	Si (total <> 0 Y cont <> 0)
		retVal = (total / cont)
	FinSi
FinFuncion
	