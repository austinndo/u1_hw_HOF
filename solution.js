// You must RETURN your result in each function!

/**
 *  Using .forEach, add each number in the nums array to a new array.
 * @param nums => [1,2,3,4]
 */
// const nums => [1,2,3,4]

function printNums(nums) {
  let newNumArray = []
  nums.forEach((number) => {
    newNumArray.push(number)
  })
  return newNumArray
}
//console.log(printNums(nums))

/**
 * Using forEach, push the sum of n plus the index
 * to a new array and return the new array
 * @param nums => [1,2,3,4,5]
 */
//const nums = [1, 2, 3, 4, 5]

function returnSums(nums) {
  let numsSum = []
  nums.forEach((number) => {
    numsSum.push(number + nums.indexOf(number))
  })
  return numsSum
}
//console.log(returnSums(nums))

/**
 * Using forEach return a number that is the total sum of all numbers in the array of objects.
 * The key for each object will be n
 * @param objs => [{n:1}]
 */
//const objs = [{n:1}, {n:2}, {n:3}]

function returnTotal(objs) {
  //get the values from all the keys in objs
  let objsValues = objs.map((obj) => obj.n)
  //add all numbers in the new array
  let objsValuesSum = 0
  objsValues.forEach((number) => {
    objsValuesSum = objsValuesSum + number
  })
  return objsValuesSum
}
//console.log(returnTotal(objs))

/**
 * @param decimals => [2.30, 2.40, 32.99]
 * Using .map, return an array of decimals formatted as dollars.
 * EX: {
 * input: [12.34, 9.99],
 * output: ['$12.34', '$9.99']
 * }
 * Hint: Not all decimals have two places, make sure to return each decimal with the proper decimal places. .toFixed may be useful :)
 */
//const decimals = [2.30, 2.40, 32.99]

function printMoney(decimals) {
  let dollarStrings = decimals.map((decimal) => {
    let decimalString = decimal.toFixed(2)
    return decimalString
  })
  //dollarStrings = [`2.30`,`2.40`,`32.99`]
  let dollars = []
  dollarStrings.forEach((dollar) => {
    dollars.push(`$` + dollar)
  })
  return dollars
}

//console.log(printMoney(decimals))

/**
 * @param values => [{name: 'Joe', happy:false}]
 * Using .filter, return an array of objects where happy equals true
 */
//const values = [{name: `Joe`, happy: false}, {name: `Austin`, happy: true}]

function returnAllTrueValues(values) {
  return values.filter((value) => {
    return value.happy == true
  })
}
//console.log(returnAllTrueValues(values))

/**
 * @param nums => [1,2,3,4]
 * Using .reduce, return the total sum of all numbers.
 * Each number should have 2 added to it.
 */
//   3
//   4 => 7
//const nums = [1, 2, 3, 4]

function addTwo(nums) {
  let numsEachAddedTwo = []
  nums.forEach((number) => {
    numsEachAddedTwo.push(number + 2)
  })
  const totalSum = numsEachAddedTwo.reduce((accumulator, value) => {
    return accumulator + value
  }, 0)
  return totalSum
}

//console.log(addTwo(nums))

/**
 * @param strings => ['g', 'f', 'z']
 * Using .reduce, return a new string containing each string from the strings array.
 */
//const strings = ['g', 'f', 'z']

function joinStrings(strings) {
  const joinedString = strings.reduce((accumulator, value) => {
    return accumulator + value
  }, '')
  return joinedString
}

//console.log(joinStrings(strings))

//Bonus
/**
 * @param objs => [{value: 1}, {value:2}, {value:23}]
 * Using .sort, sort the array of objects by the value key in ascending order
 * .sort documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 */

//const objs = [{value: 1}, {value: 4}, {value: 2}, {value: 3}]

function sortObjectsByValue(objs) {
  const values = (objA, objB) => {
    return objA.value - objB.value
  }
  return objs.sort(values)
}

//console.log(sortObjectsByValue(objs))

module.exports = {
  printNums,
  returnSums,
  returnTotal,
  printMoney,
  returnAllTrueValues,
  sortObjectsByValue,
  addTwo,
  joinStrings
}
