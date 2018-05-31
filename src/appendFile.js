// import { setTimeout } from "timers";

// import { resolve } from "dns";

// import { setTimeout } from "timers";

// const fs = require('fs');

// const json = {
//     test: 'test',
// };

// fs.appendFile(`../jsons/json1.json`, JSON.stringify(json), 'utf-8', (err)=>{
//     if(err){
//         console.log(err);
//     }
// });

// const pro1 = new Promise((res, rej)=>{
//     setTimeout(()=>{
//         const time = 1000;
//         if(time === 1000){
//             res({time: time, status: true});
//         }else{
//             rej({status: false});
//         }
//     }, 1000);
// });

// const pro2 = new Promise((res, rej)=>{
//     setTimeout(()=>{
//         res(pro1);
//     }, 1000);
// })

// pro2.then(response=>{
//     console.log(response);
// }).catch(err=>{
//     console.log(err);
// })

// var p1 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve('p1');
//     }, 1000)
// })
// var p2 = new Promise(function (resolve, reject) {
//     setTimeout(() =>{
//         resolve(p1);
//     }, 1000) 
// })
// p2
// .then(result => {console.log(result)})
// .catch(error => {console.log(error)})

// const pro1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         //赋值a
//         resolve(pro2);
//     }, 1000);
// })

// const p1 = new  Promise((res, rej)=>{
//     console.log('p1');
//     setTimeout(res, 1000);
// });
// p1.then(data=>{
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res(data);
//         }, 1000);
//     })
// })

// const request = require('request');
// const fs = require('fs');

// //第一次请求，重置count的promise
// const pro = new Promise((res, rej)=>{
//     request({
//         url: `${opt.levelUrl}${opt.currentLevel}`,
//         method: 'get',
//         json: true,
//         headers: {
//             'content-type': 'application/json',
//         }
//     }, (err, response, body)=>{
//         if(err){
//             rej(err);
//             return;
//         }
//         if(response.statusCode == 200){
//             console.log(body);
//             res(body);
//         }
//     })
// });

// pro.then(res=>{
//     //重置count，并返回重置后的count的pro
//     console.log(res);
//     opt.count = res.total;
//     return new Promise((res, rej)=>{
//         request({
//             url: `${opt.levelUrl}${opt.currentLevel}`,
//             method: 'get',
//             json: true,
//             headers: {
//                 'content-type': 'application/json',
//             }
//         }, (err, response, body)=>{
//             if(err){
//                 rej(err);
//                 return;
//             }
//             if(response.statusCode == 200){
//                 res(body);
//             }
//         })
//     });
// }).then(json=>{
//     console.log(json);
//     return new Promise((res, rej)=>{
//         fs.appendFile(`../jsons/json${opt.currentLevel}.json`, JSON.stringify(json), 'utf-8', (err)=>{
//             if(err){
//                 console.log(err);
//                 rej(err);
//                 return;
//             }
//             res('成功');
//         });
//     })
// })
// .catch(err=>{
//     console.log(`forEachPage error:${err}`);
// })

const fs = require('fs');
const path = require('path');
const request = require('request');
const _ = require('lodash');

Array.prototype.hasItem = function(item){
    let has = false;
    this.forEach(element => {
        if(item === element){
            has = true;
        }
    });
    return has;
}

// console.log(__dirname);
// console.log(path.resolve( __dirname,`../jsons/json1.json`));

const url = 'https://qcloud.openlanguage.com/media/org/5/938/C2_OurTargetSegment_EnglishPod_lesson_1359454794.mp3?sign=dc0894eef156648807e5ec4dd11be68f&t=5b4ffdf0';

// const request = new Promise((res, rej)=>{
//     request({
//         url: url,
//         method: 'get',
//     }).pipe(fs.createWriteStream(`../audioes/levelid1audio1.mp3`));
// });

request({
    url: url,
    method: 'get',
}).pipe(fs.createWriteStream(path.resolve(__dirname, `../audioes/levelid1audio1.mp3`)));



// const pro = new Promise((res, rej)=>{
//     fs.readdir(path.resolve(__dirname, `../audioes`), (err, files)=>{})
// });

// pro.then(response=>new Promise((res, rej)=>{

// }))
//     .then(reponse=>new Promise((res, rej)=>{

//     }))

// fs.readdir(path.resolve(__dirname, `../audioes`), (err, files)=>{
//     if(!files.hasItem(`levelid1`)){
//         fs.mkdir(path.resolve(__dirname, `../audioes/levelid1`), 0777, err=>{
//             if(err){
//                 console.log(err);
//             }else{
//                 console.log('success');
//             }
//         })
//     }
// });





// fs.appendFile(path.resolve( __dirname, `../audioes/test/levelid1.json`), JSON.stringify({status:'111'}), 'utf-8', (err)=>{
//     if(err){
//         console.log(err);
//     }
// });