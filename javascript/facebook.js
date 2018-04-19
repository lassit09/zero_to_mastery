var database = [
    {   
        username: 'lassit09',
        password: 'dunkindonuts333',
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

var userNamePrompt = prompt('What\'s your username?');
var passwordPrompt = prompt('What\'s your password?');

function signIn(username, password) {
    if (username === database[0].username && password === database[0].password) {
        console.log(newsFeed);
    } else {
        alert('Sorry, wrong username or password!');
    }
}

signIn(userNamePrompt, passwordPrompt);