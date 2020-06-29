const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve(`Hey!`);
        }else {

            reject(`Fuck!`);
        }
        
    });
};

somethingWillHappen()
.then(response => console.log(response))
.catch(err => console.log(err));

/* 2 */
const something = () => {
    return new Promise((resolve, reject) => {
        if(false){
            resolve(`Yey`);
        }else {
            reject(`Hell yes!`)
        }
    })
}
something()
.then(response => console.log(response))
.catch(err => console.log(err));

/* 3 */
const somethingWillHappen2 = () => {
 return new Promise ((resolve, reject) => {
     if(true) {
         setTimeout(() => {
           resolve(true)
         }, 2000)
     }else {
         const error = new Error("Woooops");
         reject(error)
     }
 })
}
somethingWillHappen2()
.then(response => console.log(response))
.catch(err => console.log(err));

/* arreglo de egpromise */
Promise.all([somethingWillHappen(), somethingWillHappen2()])
.then(response => {
    console.log(`Array of Results`, response);
})
.catch(err => {
    console.log(err);
})