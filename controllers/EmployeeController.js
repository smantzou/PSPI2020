const Employee = require('../models/Employee')

//Show list of Employees

const index = (req,res,next) => {
   
    Employee.find()
    .then(response => {
            res.json({
                response
            })
        })
    .catch(error =>{
            res.json({
                message:'An error Occured!!'
            })
        })
}

const show = (req,res,next) => {
    let employeeID = req.body.employeeID
    Employee.findbyID(employeeID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error has occured!'
        })
    })
}

const store = (req,res,next) =>{
    let employee = new Employee({
        name: req.body.name,
        designation : req.body.designation,
        email: req.body.email,
        phone : req.body.phone,
        age: req.body.age

    })
    employee.save()
    .then(response =>{
        res.json({
            message : 'Employee Added Successfully!'
         })
    })
    .catch(error =>{
        res.json({
            message : 'An error has Occured!'
        })
    })

}
//update an employee
const update = (req,res,next) => {
    let employeeID = res.body.employeeID

    let updatedData = {
        name : req.body.name,
        designation : req.body.designation,
        email : req.body.email,
        phone : req.body.phone,
        age : req.body.age

    }

    Employee.findByIdAndUpdate(employeeID,{$set: updatedData})
    .then(() =>{
        res.json({
            message : 'Employee updated successfully!'
        })
    })
    .catch(error =>{
        res.json({
            message : 'An error has Occured!'
        })
    })
}

const destroy = (req,res,next) => {
    let employeeID = req.body.employeeID
    Employee.findByIdAndRemove(employeeID)
    .then(() =>{
        res.json({
            message : 'Employee deleted successfully!'
        })
    })
    .catch(error =>{
        res.json({
            message : 'An error has Occured!'
        })
    })
}
    module.exports = {
       index,store,show,destroy,update
    }
