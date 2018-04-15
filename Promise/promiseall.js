var promise1 = Promise.resolve('hello'); 
var promise2 = Promise.resolve({age:2,height:188}) 
var promise3 = 42; //normal values work with Promise.all() too
var promise4 = (x,y) => x + y;
var promise5 = Promise.reject('failure.'); //rejected promise


Promise.all([promise1,promise2,promise3,promise4,promise5]).then(function(result) { 

    console.log(result) //logs the array ["hello",{age:2,height:188},42]

    console.log(result[0]);

}).catch(function(error){

    console.log(error) 

});