
/**
 * 数组转`li`列表
 * @param {any[]} arr
 * @param {string} queryString
 * @example
 * all([4, 2, 3], x => x > 1); // true
 * all([1, 2, 3]); // true
 */
const arrayToHtmlList = (arr, queryString) =>
  (document.querySelector(queryString).innerHTML += arr
    .map(item => `<li>${item}</li>`)
    .join(''))
