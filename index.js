//const beep = require('beepbeep')
//beep(10)
/*const nerds = require('nerds')
let singleHP = nerds.resolve('Harry Potter').asArray();
console.log(singleHP);
*/

const http = require('http')
const server = http.createServer((request, response) =>{
    console.log(request.url)
response.write('saca las chelas y las alitas')
response.end()

switch(
    request.url === './chelas'
    return response.write('saca chelas')

)

})


server.listen(3000)