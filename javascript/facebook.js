var database = [
    {   
        username: 'Taylor',
        password: 'dunkindonuts333',
    },
    {   
        username: 'Tobias',
        password: 'blueduck7',
    },
    {   
        username: 'Mitch',
        password: 'twiddle66',
    }
];

var newsFeed = [
    {
        username: 'klassi6',
        timeline: 'Great workout today!'
    },
    {
        username: 'jbowers12',
        timeline: 'Another long day at Prometric...'
    },
    {
        username: 'gwilly13',
        timeline: 'Clients drove me insane today!'
    }
]

function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if (username === database[i].username && password === database[i].password) {
            return true;
        }
    } 
    return false;
}

function signIn(username, password) {
    if (isUserValid(username, password) === true) {
        console.log(newsFeed);
    } else {
        alert('Sorry, wrong username or password!');
    }
}

var userNamePrompt = prompt('What\'s your username?');
var passwordPrompt = prompt('What\'s your password?');

signIn(userNamePrompt, passwordPrompt);