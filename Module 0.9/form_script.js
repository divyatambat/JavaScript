const form = document.getElementById('blog-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  const data = {
    title,
    content,
  };

  // Send data to reqres.in API endpoint
  fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
      alert('Blog submitted successfully!');
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('There was an error submitting your blog.');
    });
});
