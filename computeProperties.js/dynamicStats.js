//computed properties: allow you to create dynamic property names using square brackets []
//Task: Create a function called createPlayerStats(keys, values) that:
// Takes two arrays:
// keys: a list of property names (like "health", "power")
// values: a list of values (like 100, 50)
// Returns an object where each key from the keys array matches its value from the values array.
// Use computed properties to do this.
const createPlayerStats = (keys, values) => {
    if (keys.length !== values.length) {
        console.log(`keys and values must be equal in length`);
    }

    let entries = keys.map((key, index) => {
        return [key, values[index]];
    });
    return Object.fromEntries(entries);//this method takes an array of key-value pairs (like small arrays) and turns it into an object.

}
let statNames= ["health", "power", "speed"];
let statValues= [100, 50, 75];

let player = createPlayerStats(statNames, statValues);
console.log(player);


