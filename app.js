const random = require('random-bigint')
const fs = require("fs")
const test = 'test text'
const outFileName = 'test.md'

let numA = random(128) 
let numB = random(128) 
let numC = random(128) 

const reWrite = (value, fileName) =>{
  fs.writeFile(fileName, value, (err, data) => {
    if(err) console.log(err);
    else console.log('write end')
  })
}

const appendWrite = (value, fileName) => {
  fs.appendFileSync(fileName, `${value} \n`)
}

appendWrite(test, outFileName)

for (let i = 0; i < 999 ; i ++ ){
  numA = random(128) 
  numB = random(128) 
  numC = random(128) 

  let result = numA**3n - numB**3n + numC**3n
  console.log(`[${i}]result is ${result}`)
  if(result == 114n || result == 165n || result == 390n ||result == 579n || result == 627n || result == 633n || result == 732n || result == 906n || result == 921n || result == 975n){
    console.log(`numA = ${numA}`)
    console.log(`numB = ${numB}`)
    console.log(`numC = ${numC}`)
    i = 999
  }
}

random(128, function(err, num) {
  if (err)
    throw err
})