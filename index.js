// Write your solution in this file!
const employee={
    name:"said baradai",
    streetAddress:"Kutahya/Turkey"
}

function updateEmployeeWithKeyAndValue(employee,key,value){

    const newObj={...employee}
    newObj[key]=value
    return newObj
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    const newObj=employee
    newObj[key]=value
    return newObj
}

function deleteFromEmployeeByKey(employee, key){

    const newObj={...employee}
    delete newObj[key]

    return newObj
}

function destructivelyDeleteFromEmployeeByKey(employee, key){

    const newObj=employee
    delete employee[key]

    return newObj
}