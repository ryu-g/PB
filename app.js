const random = require('random-bigint')
const fs = require("fs")
const test = 'test text'
const outFileName = 'dataTable.json'
let numA = random(120) 
let numB = random(128) 
let numC = random(128)
const jsonObject = JSON.parse(fs.readFileSync(outFileName, 'utf8'))
const dataTable = jsonObject
const reWrite = (value, fileName) =>{
  fs.writeFile(fileName, value, (err, data) => {
    let keyname = ''
    let keyvalue = ''
    if(err) console.log(err)
    else console.log('write end')
  })
}

const appendWrite = (a, b, c, sum, fileName) => {
  fs.appendFileSync(fileName, `${sum}, ${a}, -${b}, ${c} \n`)
  console.log("----SAVED VALUE----")
}

const solve = (num) =>{
  for (let i = 0; i < num ; i ++){
    numA = random(8)
    numB = random(7)
    numC = random(6)
    let result =  numA**3n - numB**3n - numC**3n
    console.log(`[${i}]result is ${result}`)
    if(result.toString().length < 5 ||
      result == 114n || result == 165n || result == 390n ||result == 579n || result == 627n || result == 633n || result == 732n || result == 906n || result == 921n || result == 975n){
    }
    if(!(`${result}` in dataTable) && result > 0n && result.toString().length < 4 ){
      console.log(`[${i}]result is ${result}`)
      let keyname = `${result}`
      dataTable[keyname] = `${numA}, -${numB}, ${numC}`
    }
  }
  let val = JSON.stringify(dataTable).replace(/","/g, `",\n"`)
  fs.writeFileSync(outFileName, val ,null,"\t")
}

solve(1000000)

random(128, function(err, num) {
  if (err)
    throw err
})