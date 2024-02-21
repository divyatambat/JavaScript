const obj = {
  a: "Apple",
  b: ["Basketball", "Baseball"],
  c: { call: "cellphone" },
  d: "Dog",
};

function filterObj(obj) {
  const filteredKeys = Object.keys(obj).filter((key) => {
    const value = obj[key];
    return typeof value !== "object" && !Array.isArray(value);
  });

  const filteredObject = {};
  for (const key of filteredKeys) {
    filteredObject[key] = obj[key];
  }
  
  return filteredObject;
}

const filteredObj = filterObj(obj);
console.log(filteredObj); 