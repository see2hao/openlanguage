// //stringify test
// // let obj = {
// //     name1: 'name1',
// //     name2: 'name2'
// // };

// // function stringifyFun(k, v){
// //     // console.log(`key:${k}`);
// //     // console.log(v);
// //     return v;
// // }

// // console.log(typeof JSON.stringify(obj, stringifyFun, 1));



// // function replacer(key, value) {
// //     console.log(`key:${key}`);
// //     if (typeof value === "string") {
// //       return undefined;
// //     }
// //     return value;
// //   }
  
// //   var foo = {foundation: "Mozilla", model: "box", week: 45, transport: "car", month: 7};
// //   var jsonString = JSON.stringify(foo, replacer);

// function stringify(obj, replacer, spaces, cycleReplacer) {
//     return JSON.stringify(obj, serializer(replacer, cycleReplacer), spaces)
//   }
  
//   function serializer(replacer, cycleReplacer) {
//     var stack = [], keys = []
//     if (cycleReplacer == null) cycleReplacer = function(key, value) {
//       if (stack[0] === value) return "[Circular ~]"
//       return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]"
//     }
//     return function(key, value) {
//       if (stack.length > 0) {
//         var thisPos = stack.indexOf(this)
//         ~thisPos ? stack.splice(thisPos + 1) : stack.push(this)
//         ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key)
//         if (~stack.indexOf(value)) value = cycleReplacer.call(this, key, value)
//       }
//       else stack.push(value)
  
//       return replacer == null ? value : replacer.call(this, key, value)
//     }
//   }
//   stringify({name: 'name', name2: 'name2'} )

//   const Event = require('events');

//   const myEvent = new Event();

//   myEvent.on('test event', (str, a, b, c)=>{
//       console.log(a);
//       console.log(b);
//       console.log(c);
//       console.log(`event tyep: ${str}`);
//   })

//   myEvent.emit('test event', 'test event', 'a', 'b', 'c');
// const obj = {};
// Object.defineProperty();
// Object.entries = Object.entries || function(obj){
//     var keys = Object.keys(obj);
//     var entries = [];
//     var i = keys.length;
//     while(i --){
//         // entries.push(obj[keys[i]]);
//         entries[i] = [keys[i], obj[keys[i]]];
//     }
//     return entries;
// }

// const obj = {};

// Object.defineProperties(obj, {
//     name: {
//         value: 'name',
//         writable: false,
//     },
//     'publicName': {
//         get: function(){
//             return this.publicName + 'public';
//         },
//         // set: function(value){
//         //     this.name = value;
//         // }
//     }
// });

// obj.publicName = 'name2';
// console.log(obj.publicName);
