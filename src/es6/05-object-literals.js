// enahced object literals

function newUser(user, age, country, uId){
    return{
        user, 
        age,
        country,
        uId
    }
}

console.log(newUser('ArudoR', 26, 'MX', 1));