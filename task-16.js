// Эта функция предназначена для форматирования даты в соответствии с заданным форматом.
// Функция для форматирования даты
export function formatDate(date, format) {
  // date - Это дата, которую мы хотим отформатировать
  // format - Это строка, которая определяет желаемый формат для даты.
  return moment(date).format(format);
}
// startDate - Это начальная дата.
// endDate - Это конечная дата.
// unit - Это строка, определяющая единицу измерения для разницы, например, "дни"(days), "часы" (hours), "минуты" (minutes) и так далее.
// moment(date) используется для создания объектов момента из начальной и конечной дат, 
// а затем вызывается метод .diff(moment(startDate), unit) для вычисления разницы в указанных единицах.

// Функция для вычисления разницы между двумя датами
export function calculateDateDifference(startDate, endDate, unit) {
  return moment(endDate).diff(moment(startDate), unit);
}



// Используем
// import { formatDate, calculateDateDifference } from '/task-16.js';// - вызываем модуль из другого документа
// // new Date() создает объект Date, который представляет текущую дату и время на момент создания.
// const currentDate = new Date();
// // для форматирования даты создаем переменную formattedDate
// const formattedDate = formatDate(currentDate, 'YYYY-MM-DD');
// console.log('Форматированная дата:', formattedDate);

// const startDate = '2023-09-01';
// const endDate = '2023-09-10';
// const daysDifference = calculateDateDifference(startDate, endDate, 'days');
// console.log('Разница в днях:', daysDifference);
