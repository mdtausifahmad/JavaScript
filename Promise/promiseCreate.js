//Sample code to create a promise

var promise1 = new Promise(function(resolve, reject) {

    //do stuff

    var isSuccessful = true;

    if (isSuccessful) { /*if everything is successful*/
        resolve("Success!");
    }
    else {              /*if something went wrong*/
        reject(Error("Failure."));
    }
});

var promise = new Promise(function(resolve, reject) {
    //do stuff
    var isSuccessful = true;
    setTimeout(function(){ //asynchronously process after 5 seconds
      if (isSuccessful) { //if everything is successful
          resolve('success!');
      }
      else{               //if something went wrong
          reject(Error("failure."))
      }

    },5000);


});

//promise status changes from pending to resolved after 5 seconds

promise.then(function(val){//val represents the fulfillment value

    console.log(val);//logs "success!" since promise resolved

}).catch(function(val){//val represents the rejection value

    console.log(val); //doesn't occur since promise never rejected

});