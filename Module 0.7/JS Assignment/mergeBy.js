const userNames = [{
    "id": 1,
    "first_name": "Nicki",
    }, {
    "id": 2,
    "first_name": "Raychel",
    }, {
    "id": 3,
    "first_name": "Demetris",
    }, {
    "id": 4,
    "first_name": "Amata",
}];

const userEmails = [{
    "id": 2,
    "email": "rmcgrady1@cpanel.net",
    }, {
    "id": 1,
    "email": "ncrozier0@squarespace.com",
    }, {
    "id": 4,
    "email": "abraiden3@canalblog.com",
    }, {
    "id": 3,
    "email": "dkilshall2@elpais.com",
}];

function mergeById(userNames, userEmails) {
	let mergedArray=[];
	mergedArray = userNames.map((item)=>{
		let user = userEmails.find((i)=>i.id === item.id);
	    console.log(user);
		return {...item, ...user}	
	});
	return mergedArray;
}

console.log(mergeById(userNames, userEmails));

// Function to filter an array of strings to hold only unique values:-

const users = ["Nicki", "Raychel", "Demetris", "Amata", "Nicki", "Amata",];

function uniqueValues(users){
    let unique = [];
    users.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element);
        }
    });
    return unique;
}
console.log(uniqueValues(users));