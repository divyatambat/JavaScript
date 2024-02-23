const table = document.getElementById('blog-table');
const tbody = table.getElementsByTagName('tbody')[0];
const loading = document.getElementById('loading');
const searchTerm = document.getElementById('search');
const sortButton = document.getElementById('sort-name');
const spinner = document.createElement('div');

spinner.classList.add('spinner');

let users = [];

// Initial loading message
loading.style.display = 'block';
loading.appendChild(spinner);

// Fetch users from mock API
fetch('https://reqres.in/api/users')
    .then((response) => response.json())
    .then((data) => {
        users = data.data;
        console.log(data);
        renderUsers();
        loading.style.display = 'none';
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('There was an error fetching users.');
        loading.style.display = 'none';
    });

function renderUsers() {
    tbody.innerHTML = '';
    users.forEach((user) => {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        const emailCell = document.createElement('td');

        nameCell.textContent = user.first_name + ' ' + user.last_name;
        emailCell.textContent = user.email;

        row.appendChild(nameCell);
        row.appendChild(emailCell);

        tbody.appendChild(row);
    });
}

function sortByName() {
    loading.style.display = 'block';
    loading.appendChild(spinner);
    setTimeout(() => {
    users.sort((a, b) => {
        const nameA = a.first_name.toLowerCase() + ' ' + a.last_name.toLowerCase();
        const nameB = b.first_name.toLowerCase() + ' ' + b.last_name.toLowerCase();
        return nameA.localeCompare(nameB);
    });
    renderUsers();
    loading.style.display = 'none';
},1000);
}

function filterUsers() {
    const searchTerm = document.getElementById('search').value;

    users = users.filter(user => {
        const fullName = user.first_name.toLowerCase() + ' ' + user.last_name.toLowerCase();
        return fullName.includes(searchTerm);
    });

    renderUsers();
}

sortButton.addEventListener('click', sortByName);
// searchTerm.addEventListener('keygen', filterUsers);
