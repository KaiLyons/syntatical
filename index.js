"use strict";

module.exports = {
    "print":function(str){
        console.log(str);
    },
    "printf":function(str){
        console.log(str);
    },
    "write":function(str){
        console.log(str);
    },
    "rand_num":function(num){
        var x = Math.floor(Math.random()*num);
        console.log(x);
    },
    "rand":function(arr){
        var x = arr[~~Math.floor(Math.random()*arr.length)];
        console.log(x);
    },
    "replace":function(str, a, b){
        var e = new RegExp(a, 'g')
        var x = str.replace(e, b);
        console.log(x)
    },
    "stop_app":function(){
        process.exit()
    },
    "get_date":function(){
        var d = new Date();
        console.log(d.toISOString().slice(0,10))
    },
    "lower_all":function(str){
        var g = str
        console.log(g.toLowerCase())
    },
    "limit":function(str, num){
        if(!num)throw console.log("A numerical variable is needed in order for this function to run");
        var g = "";
        for(var i = 0; i < num; i++){
            g += str.split(" ")[i]+" "
        }
        console.log(g)
    },
    "upper_all":function(str){
        var g = str;
        console.log(g.toUpperCase())
    },
    "match":function(str, mtch){
        var x = mtch;
        var y = str.match(x)
        if (y == null){
            console.log("no matches found")
        } else {
            console.log(y)
        }
    },
    "arr_buff":function(num){
        if(isNaN(num) == false){
            var b = new ArrayBuffer(num);
            console.log(b.byteLength);
        } else if(Array.isArray(num)){
            var x = num.length;
            console.log(x)
        } else {
            console.log("input invalid")
        }
    },
    "arr_join":function(x){
        if(!Array.isArray(x)){
            console.log("arr_join requires an array")
        } else if(Array.isArray(x)){
            console.log(x.join(' '))
        }
    },
    "str_split":function(x){
        if(Array.isArray(x)){
            console.log("str_join requires a string")
        } else if(!Array.isArray(x)){
            console.log(x.split(' '))
        }
    }
}
