/**
 * In JavaScript objects are really diffrent form Java or other object based languages.
 * The syntax to use it looks more like declaring structs, but the can also carry methods.
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#objects
 */

/**
 * @return {Object} you should return a new object containing two properties, first_name and last_name.
 * The values of the properties should be "Toto", "Tutu"
 */
export function crateUserObject() {
  // Write your code here
  var user = {
    first_name: "Toto",
    last_name: "Tutu",
  }
  return user
}

/**
 *
 * @param {{first_name: string, last_name:string}} object A user object
 * @return string a concatenation of the first and last name, separated with a space
 */
export function accessPropertiesInObjects(object) {
  // Write your code here
  return object.first_name + ' ' + object.last_name

}

/**
 *
 * @param {Object} object
 * @return {{keys: Array<string>, values: Array<string>}} A new object containing two keys (keys, values),
 * each key should contain respectively all original object keys mapped to uppercase,
 * and all original object values mapped to lower case
 */
export function iteratesThroughObjectValuesAndProperties(object) {
  // Write your code here
  let propreties = Object.getOwnPropertyNames(object)
 
  const keys = []
  const values = []
  
  for (let proprety of propreties) {
    keys.push(proprety.toUpperCase());
    values.push(object[proprety].toLowerCase());
  }
 
  return { keys, values }
}



/**
 * Return the name of the first younger and last older user in the array
 * @param {array<{name: string, age: number}>} users
 * @return {{younger: string, older: string}}
 */
export function retrieveMaximumMinimumUserAges(users) {
  // Write your code here
  if (!users || users.length === 0) {
    return { younger: '', older: '' };
  }

  let younger = users[0];
  let older = users[0];

  for (let i = 1; i < users.length; i++) {
    if (users[i].age < younger.age || (users[i].age === younger.age && i < users.indexOf(younger))) {
      younger = users[i];
    }
    if (users[i].age >= older.age) {
      older = users[i];
    }
  }

  return {
    younger: younger.name,
    older: older.name
  };
}

/**
 * In javascript, objects can be represented as string, this is JSON
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
 * @param {string} string
 * @return {Object} An object retried by parsing the string
 */
export function parseJavaScriptObjectNotation(string) {
  // Write your code here
  const json = JSON.parse(string)
  return json
}

/**
 * @param {Object} object
 * @return {string} An string representing the given object
 */
export function stringifyJavaScriptObjectNotation(object) {
  // Write your code here
  const json = JSON.stringify(object)
  return json
}