//Write a JavaScript program to get an object containing the current URL parameters.
const testGetparams = (queryString) => {
    const params = new URLSearchParams(queryString);
    const result = {};
    //params.entries() is giving you a list of small arrays, each containing a key and its value.
    for (let [key, value] of params.entries()) {
        result[key] = value;
    }
    return result;
}
console.log(testGetparams("?name=aline&age=30"));


