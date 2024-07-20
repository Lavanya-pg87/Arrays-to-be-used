// Given array
let employees = [
    {id: 1, name: "john", age: "18", profession: "developer"},
    {id: 2, name: "jack", age: "20", profession: "developer"},
    {id: 3, name: "karen", age: "19", profession: "admin"}
];

// 1. PrintDeveloperbyMap 
function PrintDeveloperbyMap() {
    employees.map(employee => {
        if (employee.profession === "developer") {
            console.log(employee);
        }
    });
}

// 2. PrintDeveloperbyForEach 
function PrintDeveloperbyForEach() {
    employees.forEach(employee => {
        if (employee.profession === "developer") {
            console.log(employee);
        }
    });
}

// 3. addData 
function addData() {
    const newEmployee = {id: 4, name: "susan", age: "20", profession: "intern"};
    employees.push(newEmployee);
    console.log(employees);
}

// 4. removeAdmin 
function removeAdmin() {
    employees = employees.filter(employee => employee.profession !== "admin");
    console.log(employees);
}

// 5. ConcatinateArray 
function ConcatinateArray() {
    const newEmployees = [
        {id: 5, name: "lisa", age: "22", profession: "designer"},
        {id: 6, name: "mike", age: "23", profession: "manager"},
        {id: 7, name: "emma", age: "21", profession: "developer"}
    ];
    const concatenatedArray = employees.concat(newEmployees);
    console.log(concatenatedArray);
}