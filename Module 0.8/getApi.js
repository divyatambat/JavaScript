function fetchData(url) {
    if (typeof url !== 'string' || !url.trim()) {
        throw new Error('Invalid URL: URL must be a non-empty string.');
    }
  
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => {
            if (!response.ok) {
                return reject(new Error(`HTTP error ${response.status}: ${response.statusText}`));
            }
            return response.json();
        })
        .then(data => {
            console.log('Data fetched:', data);
            resolve(data); 
        })
            .catch(error => {
            reject(error);
        });
    });
}

const baseUrl = 'https://reqres.in/api/users'; 
fetchData(baseUrl)
    .then(() => console.log('Data successfully fetched'))
    .catch(error => console.error('Error:', error));
  
