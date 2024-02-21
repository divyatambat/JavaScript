const users = [{
    "id": 1,
    "first_name": "Nicki",
    "email": "ncrozier0@squarespace.com",
    "date_of_birth": "2009/05/09",
    "gender":"Male"
    }, {
    "id": 2,
    "first_name": "Raychel",
    "email": "rmcgrady1@cpanel.net",
    "date_of_birth": "1996/11/05",
    "gender":"Female"
    }, {
    "id": 3,
    "first_name": "Demetris",
    "email": "dkilshall2@elpais.com",
    "date_of_birth": "2018/12/31",
    "gender":"Male"
    }, {
    "id": 4,
    "first_name": "Amata",
    "email": "abraiden3@canalblog.com",
    "date_of_birth": "2012/05/23",
    "gender":"Female"
 }];

// Question 2

function groupBy(arr, key) {
    const result = arr.reduce((result, obj) => {
      const value = obj[key];
      if (!result[value]) {
        result[value] = [];
      }
      result[value].push(obj);
      return result;
    }, {});
  
    console.log(result); 
    return result;
}

groupBy(users, "gender");

// Question 3

function sort(arr, key, order = "asc") {
    const compareFn = (a, b) => {
      const valueA = a[key];
      const valueB = b[key];
      if (typeof valueA === "string") {
        return valueA.toLowerCase().localeCompare(valueB.toLowerCase(), undefined, {
          numeric: true,
        });
      }
      return valueA - valueB;
    };
  
    const sortedArr = arr.slice().sort((a, b) => (order === "asc" ? compareFn(a, b) : -compareFn(a, b)));
  
    console.log(`Sorted by ${key} in ${order} order:`, sortedArr); 
    return sortedArr;
  }
  
console.log(sort(users, "first_name", "desc"));
console.log(sort(users, "date_of_birth", "asce"));

