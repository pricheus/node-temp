//1

//2
const sayHi =  (name) => {
    console.log(`Hello there ${name}`)
};

module.exports = sayHi

//3
const names = require('./2-names');
const sayHi = require('./1-func');

console.log(names.john);
sayHi(names.john)

// os module
const os = require('os');

        //info about the current user
        const user = os.userInfo();
        console.log(user)

        //methods returns susytem uptime in seconds
        console.log(`The system Uptime is ${os.uptime()} seconds`)


        const currentOs = {
            name: os.type(),
            release: os.release(),
            totalMemory: os.totalmem(),
            freeMemory: os.freemem()
        }

        console.table(currentOs)

// path module
        const path = require('path');

        //sep
        console.log(path.sep);

        //join('')
        const filePath = path.join('/history','/pathTest','test.txt');
        console.log(filePath);

        //base()
        const base = path.basename(filePath);
        console.log(base)

        //relolve('')
        const resolve = path.resolve(__dirname,'history','pathTest','test.txt');
        console.log(resolve)

//fs module
        //sync method
        const {readFileSync, writeFileSync} = require('fs');

        //readFileSync
        const first = readFileSync('./history/first.txt', 'utf8');
        const second = readFileSync('./history/second.txt', 'utf8');

        console.log(first, second)


        //writeFileSync
        writeFileSync('./history/result-sync.txt', `hello here is the result: ${first}, ${second} `)


        //async method, we need more details bout this section over here
        const {readFile, writeFile} = require('fs');

        readFile('./history/first.txt', 'utf8', (err,result) =>{
            if(err){
                console.log(err)
                return 
            } else{
                console.log(result)
            }
        })

//htttp module
        const http = require('http');

        const server = http.createServer(function (req, res) {
            if(req.url === '/') {
                res.write('welcome to our home page')
                res.end()
            }

            if(req.url === '/about'){
                res.write('Here is our history')
                res.end()
            }
            res.write(`
            <h1>404 Not found</h1>
            <p>We can't find the page you are looking for</p>
            <a href = "/"><h4>back to home page</h4></a>
            `)
            res.end()
        });

        server.listen(5004)
        
