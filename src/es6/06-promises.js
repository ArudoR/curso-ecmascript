const anotherFunction = () => {
    return new Promise((resolver, reject) => {
        if(false){
            resolver('Hey!!');
        }else{
            reject('Chale 🌮');
        }
    })
}

anotherFunction()
 .then(response => console.log(response))
 .catch(err => console.log(err));