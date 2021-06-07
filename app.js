const random = require('random-bigint')
const fs = require("fs")
const test = 'test text'
const outFileName = 'test.md'

let numA = random(120) 
let numB = random(128) 
let numC = random(128)

const reWrite = (value, fileName) =>{
  fs.writeFile(fileName, value, (err, data) => {
    if(err) console.log(err);
    else console.log('write end')
  })
}

const appendWrite = (a, b, c, sum, fileName) => {
  fs.appendFileSync(fileName, `${sum}, ${a}, ${b}, ${c} \n`)
  console.log("----SAVED VALUE----")
}

const solve = (num) =>{
  for (let i = 0; i < num ; i ++ ){
    numA = random(72) 
    numB = random(72)
    numC = random(70) 
    let result =  numA**3n - numB**3n - numC**3n
    console.log(`[${i}]result is ${result}`)
    if(result.toString().length < 5 ||
      result == 114n || result == 165n || result == 390n ||result == 579n || result == 627n || result == 633n || result == 732n || result == 906n || result == 921n || result == 975n){
      console.log(`numA = ${numA}`)
      console.log(`numB = ${numB}`)
      console.log(`numC = ${numC}`)
      appendWrite(numA, numB, numC, result, outFileName)
      i = 999
    }
  }
}

solve(1500000)
console.log(`${numA},\n${numB},\n${numC}`)
console.log(numA.toString().length)

random(128, function(err, num) {
  if (err)
    throw err
})