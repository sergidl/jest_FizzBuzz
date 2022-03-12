// Escriba una función que tome un año y devuelva un valor booleano que indique si el año es un año bisiesto.
// Los años que son divisibles por 4 son años bisiestos, pero los años que son divisibles por 100 no son años bisiestos,
// pero los años que son divisibles por 400 son años bisiestos.

function fizz(number) {
	if(number%3==0){
		return 'Fizz'
	}
	else{
		return false
	}
}

function buzz(number) {
	if(number%5==0){
		return 'Buzz'
	}
	else{
		return false
	}
}
function fizzbuzz(number) {
	if(number%3==0&&number%5==0){
		return 'FizzBuzz'
	}
	else{
		return false
	}
}
export { fizz, buzz, fizzbuzz };