// Given array
let employees = [
    {id: 1, name: "john", age: "18", profession: "developer"},
    {id: 2, name: "jack", age: "20", profession: "developer"},
    {id: 3, name: "karen", age: "19", profession: "admin"}
];

// 1. PrintDeveloperbyMap - console.log all the employees which have the profession of developer using the map function.
function PrintDeveloperbyMap() {
    employees.map(employee => {
        if (employee.profession === "developer") {
            console.log(employee);
        }
    });
}

// 2. PrintDeveloperbyForEach - console.log all the employees which have the profession of developer using the forEach function.
function PrintDeveloperbyForEach() {
    employees.forEach(employee => {
        if (employee.profession === "developer") {
            console.log(employee);
        }
    });
}

// 3. addData - In this function make another such employee object and append that in this array. Example - push this in the array - {id: 4, name: "susan", age: "20", profession: "intern"} and then console.log it.
function addData() {
    const newEmployee = {id: 4, name: "susan", age: "20", profession: "intern"};
    employees.push(newEmployee);
    console.log(employees);
}

// 4. removeAdmin - In this function remove the object where the profession is admin. console.log the changed array.
function removeAdmin() {
    employees = employees.filter(employee => employee.profession !== "admin");
    console.log(employees);
}

// 5. ConcatinateArray - Make another array with 3 objects just like the one in the above given array. The objects should be different, with different ids and all other parameters should be different too. Then concatinate these 2 arrays, and console.log
function ConcatinateArray() {
    const newEmployees = [
        {id: 5, name: "lisa", age: "22", profession: "designer"},
        {id: 6, name: "mike", age: "23", profession: "manager"},
        {id: 7, name: "emma", age: "21", profession: "developer"}
    ];
    const concatenatedArray = employees.concat(newEmployees);
    console.log(concatenatedArray);
}