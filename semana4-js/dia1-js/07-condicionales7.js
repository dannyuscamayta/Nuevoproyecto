/***
realize un algoritmo para determinar el sueldo semanal de un 
trabajador, con base a las horas  trabajadas y el pago por hora
** considerando que despues de 40horas, cada hora se 
considera como un excedente y se paga el doble, 
construya el diagrama de flujo, y el pseudocodigo



*/

let sueldoSemanal = 0;
let horasTrabajadas = 42;
let pagoPorHora = 35;

if (horasTrabajadas > 40) {
    sueldoSemanal = (40 * pagoPorHora) + (horasTrabajadas - 40) * 2 * pagoPorHora;
}else {
    sueldoSemanal = horasTrabajadas * pagoPorHora;
}

console.log(`Total a pagar ${sueldoSemanal} por la semana cumplida 🤑`);


