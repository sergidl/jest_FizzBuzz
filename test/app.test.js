import {fizz,buzz,fizzbuzz} from "../app.js";
describe('Sample app',()=>{
    describe('Fizz', () => {

		test('should return Fizz divisible by 3', () => {
			expect(fizz(6)).toEqual('Fizz');
		});
		
		test('should return false by no divisible by 3', () => {
			expect(fizz(7)).toBe(false);
			
		});
		
	});
	describe('Buzz', () => {

		test('should return Buzz divisible by 5', () => {
			expect(buzz(10)).toEqual('Buzz');
		});
		
		test('should return false by no divisible by 5', () => {
			expect(buzz(7)).toBe(false);
			
		});
		
	});
	describe('FizzBuzz', () => {

		test('should return FizzBuzz divisible by 3 and 5', () => {
			expect(fizzbuzz(15)).toEqual('FizzBuzz');
		});
		
		test('should return false by no divisible by 3 and 5', () => {
			expect(fizzbuzz(10)).toBe(false);
			
		});
		
	});
})