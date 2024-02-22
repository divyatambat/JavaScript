async function fetchData(url) {
    if (typeof url !== 'string' || !url.trim()) {
      throw new Error('Invalid URL: URL must be a non-empty string.');
    }
  
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
      }
  
      const data = await response.json();
  
      // Delay for 2 seconds before resolving
      await new Promise(resolve => setTimeout(resolve, 2000));
  
      return data;
    } catch (error) {
      throw error; 
    }
  }
  
  const baseUrl = 'https://reqres.in/api/users';
  
  fetchData(baseUrl)
    .then(data => {
      console.log('Data fetched after 2 seconds:', data);
    })
    .catch(error => console.error('Error:', error));
  