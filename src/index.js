const path = require('path');
const fs = require('fs');
const request = require('request');
// const https = require('https');

const user_id = '806288';
const token = 'F9110FD5FC8837D09C17B96F5383CAB3';
// const level_id = 2;

let url;



// fetch(url, (data)=>{
//     console.log(data);
//     // if(data){

//     // }
// })
// resetCount();
//第一次请求，重置count
function resetCount(){
    const pro = new Promise((res, rej)=>{
        fetch(url, (data)=>{
            console.log(data);
            // if(data){

            // }
        })
    })
}

var opt = {
    // maxLevel: 1,
    currentLevel: 6,
    audioUrl: '',
    count: 20,
};



// init();

//遍历发送

function init(){
    for(let i = 0; i < opt.maxLevel; i ++){
        opt.currentLevel = i;
        forEachLevel();
    }
}

function forEachLevel(){
    if(opt.currentLevel < opt.maxLevel){
        opt.currentLevel = ++opt.currentLevel;
        console.log(forEachPage());
        // forEachPage().then(res=>{
        //     fs.appendFile(`../jsons/level${opt.currentLevel}.json`, JSON.stringify(res), 'utf-8', (err)=>{
        //         if(err){
        //             console.log(`appendFile failed,${err}`);
        //         }
        //     });
        // }).catch(err=>{
        //     console.log(`forEachPage has error: ${err}`);
        // })
    }
}

   //第一次请求，重置count的promise
   const pro = new Promise((res, rej)=>{
    url = `https://openlanguage.com/api/v14/library/get-latest-lessons?user_id=${user_id}&access_token=${token}&page=1&count=${opt.count}&new_course=1&lesson_type=1%2C2&level_id=`;
    request({
        url: `${url}${opt.currentLevel}`,
        method: 'get',
        json: true,
        headers: {
            'content-type': 'application/json',
        }
    }, (err, response, body)=>{
        if(err){
            rej(err);
            return;
        }
        if(response.statusCode == 200){
            console.log(body);
            res(body);
        }
    })
});

pro.then(res=>{
    //重置count，并返回重置后的count的pro
    console.log(res);
    opt.count = res.total;
    url = `https://openlanguage.com/api/v14/library/get-latest-lessons?user_id=${user_id}&access_token=${token}&page=1&count=${opt.count}&new_course=1&lesson_type=1%2C2&level_id=`;
    return new Promise((res, rej)=>{
        request({
            url: `${url}${opt.currentLevel}`,
            method: 'get',
            json: true,
            headers: {
                'content-type': 'application/json',
            }
        }, (err, response, body)=>{
            if(err){
                rej(err);
                return;
            }
            if(response.statusCode == 200){
                res(body);
            }
        })
    });
}).then(json=>{
    console.log(json);
    return new Promise((res, rej)=>{
        fs.appendFile(path.resolve( __dirname,`../jsons/json6.json`), JSON.stringify(json), 'utf-8', (err)=>{
            if(err){
                console.log(err);
                rej(err);
                return;
            }
            res('成功');
        });
    })
})
.catch(err=>{
    console.log(`forEachPage error:${err}`);
})


//第一次请求，重置当前count
// request({
//     url: url,
//     method: 'get',
//     json: true,
//     headers:{
//         'content-type': 'application/json',
//     }
// }, (err, res, body)=>{
//     if(!err && res.statusCode == 200){
//         console.log(body);
//     }
// })