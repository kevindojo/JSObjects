

let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

for (let x in students) {
    console.log("Name: " + students[x].name + ", Cohort: " + students[x].cohort)
}

// x is like 'i' in for loops. This is how we can look at each object in the array //



// count the characters in each name

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };


for( var p in users) {
    console.log(p.toUpperCase())
    for(let i = 0; i < users[p].length; i++) {
        
        let num = i + 1;
        let first = users[p][i].first_name.toUpperCase();
        let last = users[p][i].last_name.toUpperCase();
        let total = first.length + last.length;
        console.log(num + " - " + last + "," + first + "-" + total)
    }
}

