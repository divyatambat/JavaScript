// function mapBy(arr, key) {
//   const result = new Map();

//   for (const obj of arr) {
//     const value = obj[key];
//     const existing = result.get(value);

//     if (existing) {
//       if (Array.isArray(existing)) {
//         existing.push(obj);
//       } else {
//         result.set(value, [existing, obj]);
//       }
//     } else {
//       result.set(value, obj);
//     }
//   }

//   console.log(result); 
//   return result;
// }

// const mappedByName = mapBy(users, "first_name"); // Call the function and store the result

  
const users = [{
  "id": 1,
  "first_name": "Nicki",
  "email": "ncrozier0@squarespace.com",
  "date_of_birth": "2009/05/09"
  }, {
  "id": 2,
  "first_name": "Raychel",
  "email": "rmcgrady1@cpanel.net",
  "date_of_birth": "1996/11/05"
}];
  
function mapBy(arr, label){
  let newObj = {}
 arr.forEach(user => newObj[user[label]] = user)
 console.log(" ", newObj)
}

mapBy(users, "first_name") 
  