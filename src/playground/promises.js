const promise = new Promise((resolve, reject) =>{
  setTimeout(()=>{
    if(false){
      resolve('resolved');
    }else{
      reject('did not resolve');
    }

  },5000);
});
console.log('before');
promise.then((data)=>{
  console.log(data)
}).catch((error)=>{
  console.log('error: ', error);
});
console.log('after');
