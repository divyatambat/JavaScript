const arr = [
    {
        name:"Harry Potter",
        age: 12,
        address: {
            details: ["4", "Privet Drive"],
            area:"Little Whinging",
            city: "Surrey",
            state: "England"
        } 
      }
];

// Deep equality check
function deepEqual(obj1, obj2) {
    // Handle base cases
    if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
      return obj1 === obj2;
    }
  
    // Check if arrays
    if (Array.isArray(obj1)) {
      if (!Array.isArray(obj2) || obj1.length !== obj2.length) return false;
      for (let i = 0; i < obj1.length; i++) {
        if (!deepEqual(obj1[i], obj2[i])) return false;
      }
      return true;
    }
  
    // Check object keys
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) return false;
    for (const key of keys1) {
      if (!deepEqual(obj1[key], obj2[key])) return false;
    }
    return true;
  }
  
  // Deep clone
  function deepClone(obj) {
    if (typeof obj !== 'object' || obj === null) {
      return obj;
    }
  
    // Clone arrays
    if (Array.isArray(obj)) {
      return obj.map(value => deepClone(value));
    }
  
    // Clone objects
    const clonedObj = {};
    for (const key in obj) {
      clonedObj[key] = deepClone(obj[key]);
    }
    return clonedObj;
  }
  
  // Get nested key
  function getNestedKey(obj, keyPath) {
    const keyParts = keyPath.split('.');
    let currentObj = obj;
    for (const key of keyParts) {
      if (!currentObj || typeof currentObj !== 'object' || !currentObj.hasOwnProperty(key)) {
        return undefined;
      }
      currentObj = currentObj[key];
    }
    return currentObj;
  }
  
  // Output
  const deepEqualResult = deepEqual(arr);
  console.log("Deep equality:", deepEqualResult);
  
  const clonedObject = deepClone(arr);
  console.log("Cloned object:", clonedObject); 
  
  const nestedValue = getNestedKey(arr, "address.details.1");
  console.log("Nested key value:", nestedValue);
