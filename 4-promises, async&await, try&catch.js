const {readFile} = require('fs');
const { get } = require('lodash');

const getText = (path) => {
    return new Promise ((resolve, reject) => {
        readFile(path, 'utf8', (err,data) => {
            if(err) {
                reject(err)
            } else {
                resolve(data)
            }
        })

    })
}

//getText('./history/first.txt').then( (result) => console.log(result))
//.catch((err) => {console.log(err)});

const start = async ( ) => {
    
    try {
      const first = await getText('./history/first.txt');
      const second = await getText('./history/second.txt');
    console.log(first);
    console.log(second);
  
    } catch (error) {
        console.log(error)
    }
};

start()