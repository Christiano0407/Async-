 const doSomethingAsync = () => {
    return new Promise ((resolve, reject) => {
        (true) 
        ? setTimeout(() => resolve(`Do Something Async`), 3000)
        : reject(new Error(`Test Error`))
    }); 
 }

 const doSomething = async () => {
     const Something = await doSomethingAsync()
     console.log(Something);
 }
 console.log(`Before`);
 doSomething();
 console.log(`After`);

 const anotherFunction = async () => {
     try {
         const something = await  doSomethingAsync();
         console.log(something)
     } catch (error) {
         console.log(error)
     }
 }
 console.log(`Before1`);
 anotherFunction();
 console.log(`After1`);