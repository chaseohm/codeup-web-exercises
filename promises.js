/**
 * Promises Review
 *
 * 1. what does asynchronous mean?
 * 2. what is a promise?
 * 3. what is a fetch?
 * 4. demo: abstract error checking and json parsing
 *    1. "bare" fetch with hardcoded url + error checking and json functions
 *    2. Review control flow, add console.logs
 *    3. abstract error checking and json parsing
 *    4. abstract url
 *    5. es6 refactor
 */

function wait (num){
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve("You're Good");
        },num)
    })
}
wait(1000).then(function(result){
    console.log(result);
});


function gitHub(name){
    return fetch(`https://api.github.com/users/${name}/events`,{headers: {'Authorization': 'token 64a528a3a9416681b2570d83f4b2d54ed3c9107d'}}).then(function(response){
        if (response.status !== 200) {
            return Promise.reject(response)
        }
        return Promise.resolve(response);
    })
        .then(function(resolve){
            const jsonResponse = resolve.json();
            return jsonResponse;
        })
        .then(function(jsonResponse){
            console.log(jsonResponse);
            return jsonResponse[0].created_at;
        })
        .then(function(result){
            console.log(result);
        })
}
gitHub('chaseohm');

//
// const fetchOptions = {
//     headers: {'Authorization': `token ${API_TOKEN}`}
// }
//
// const checkResponseForErrors = response => {
//     console.group('checkResponseForErrors')
//     console.log(response)
//     console.groupEnd()
//     if (response.status !== 200) {
//         return Promise.reject(response);
//     }
//     return Promise.resolve(response);
// }
//
// const parseResponseAsJson = response => {
//     console.group('parseResponseAsJson')
//     console.log(response)
//     console.groupEnd()
//     const jsonResponse = response.json();
//     return jsonResponse;
// }

// es5
// function getSecondElement(data) {
//     return data[1];
// }
// es6 arrow function
// const getSecondElement = (data) => {
//     return data[1];
// }
// es6 arrow function with implicit return
// const getSecondElement = (data) => data[1];
// es6 arrow function with implicit return and destructuring syntax
// const getSecondElement = ([first, second]) => second;
//
// function getId(githubApiObject) {
//     console.group('getId')
//     console.log(githubApiObject)
//     console.groupEnd()
//     return githubApiObject.id;
// }
//
// function logData(data) {
//     console.group('logData')
//     console.log(data);
//     console.groupEnd();
// }
//
// function fetchJson(url) {
//     return fetch(url, fetchOptions)
//         .then(checkResponseForErrors)
//         .then(parseResponseAsJson)
// }
//
// fetchJson('https://api.github.com/users/zgulde/events')
//     .then(getSecondElement)
//     .then(getId)
//     .then(logData);

// const fetchPromise = fetch('https://api.github.com/users/zgulde/events', fetchOptions)
// const errorFreeResponse = fetchPromise.then(checkResponseForErrors)
// const jsonResponse = errorFreeResponse.then(parseResponseAsJson);
// const secondElementPromise = jsonResponse.then(getSecondElement);
// secondElementPromise.then(logData)



// .then(getId)
// .then(logData);

console.log('When will you see this?')
