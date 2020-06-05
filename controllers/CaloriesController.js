const User = require("../models/User");

const addCal = (req, res, next) => {
  var name = "alex";
  date = new Date();
  year = date.getFullYear();
  month = date.getMonth() + 1;
  day = date.getDay();
  const fullDate = `${day}/${month}/${year}`;
  User.findOne({ name }).then((user) => {
    if (user) {
      let flag = false;
      for (const calory of user.calories) {
        //console.log(calory.date)
        if (calory.date === fullDate) {
          calory.total = req.body.totalCal;
          flag = true;
          break;
        }
      }

      if (!flag) {
        user.calories.push({
          date: fullDate,
          total: req.body.totalCal,
        });
      }

      user.save();
    }
  });
  res.send(true);
};


const takeDate = (req, res, next) => {
  const askedDate = req.body.askedDate
  console.log(askedDate)
  var name = "alex";
  User.findOne({ name }).then((user) => {
    if (user) {
      for (const date of user.calories) {
        //console.log(JSON.stringify(date.date))
        if (JSON.stringify(date.date) == JSON.stringify("5/6/2020")) { // == askedDate
          console.log(date.total)
          res.json({
            status: true,
            calories: date.total
          })
        }
        else{
          res.json({
            status: false,
            message: "No calories found"
          })
        }
      }
    }
  })
}

const showCal = (req, res, next) => {
  Calories.find()
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: "An error occured",
      });
    });
};
module.exports = {
  addCal,
  showCal,
  takeDate,
};
