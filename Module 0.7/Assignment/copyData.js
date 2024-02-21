const data = {
    name: "Harry Potter",
    age: 12,
    address: {
      details: ["4", "Privet Drive"],
      area: "Little Whinging",
      city: "Surrey",
      state: "England",
    },
  };

  console.log("Original object:", data);
  
  // spread syntax - to create a copy of the original object
  const copyData = { ...data };
  
  // Update - using dot notation and index access
  copyData.address.details[0] = "5";
  
  console.log("Copied Data:", copyData);
  