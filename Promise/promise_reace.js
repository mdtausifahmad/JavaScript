var promise1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("finished in two seconds");
    },2000) //returns a resolved promise after 2 seconds
});

var promise2 = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Inside promise2");
        resolve("finished in five seconds");
    },5000) //returns a resolved promise after 5 seconds
});


Promise.race([promise1,promise2]).then(function(result) { 

    console.log(result) // logs "finished in two seconds" because promise1 resolved first

}).catch(function(error){

    console.log(error)  

});



var promiseResolveTenSeconds = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("finished in ten seconds");
    },10000) //returns a resolved promise after 10 seconds
});

var promiseRejectFiveSeconds = new Promise(function(resolve,reject){
    setTimeout(function(){
        reject("error: promise took longer than 5 seconds to resolve");
    },5000) //returns a rejected promise after 5 seconds
});


Promise.race([promiseResolveTenSeconds,promiseRejectFiveSeconds]).then(function(result) { 

    console.log(result) // never occurs because promiseRejectFiveSeconds rejected

}).catch(function(error){

    console.log(error) // logs "error: promise took longer than 5 seconds to resolve"

});