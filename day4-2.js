var express = require('express'); // read execute return one object

var app = express();

const students = [
    {
        name: 'Rajshekhar',
        age: 28,
        city: 'solapur'
    },
    {
        name: 'Siva',
        age: 22,
        city: 'Pune'
    }
];

app.get('/', (req, res)  => {
    res.send('<h1>Hello Siva</h1>');
}).get('/students', (req, res) => {
    let temp = '<table border="1" cellspacing="2" cellpadding="4"><tr><th>Name</th><th>Age</th><th>City</th></tr>';
    students.forEach(student => {
        temp = temp + '<tr><td>'+ student.name +'</td><td>'+ student.age +'</td><td>'+ student.city +'</td></tr>';
    });
    temp = temp + '</table>';
    res.send(temp);
}).get('/student/:id', (req, res) => {
    res.send('<h1>Hello student with ID'+ req.params.id +'</h1>');
});
app.listen(8081, () => {
    console.log('server started');
});



