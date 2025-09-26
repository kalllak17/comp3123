var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// GET /hello
// Returns Hello Express JS as plain text.
router.get('/', function (req, res, next) {
    res
        .status(200)
        .send('Hello Express JS');
})

router.get('/user', function (req, res, next) {
    var {firstname, lastname} = req.query;

    if (!firstname || !lastname) {
      firstname = "Pritesh";
      lastname = "Patel";
    }

    res
        .status(200)
        .json({"firstname": firstname, "lastname": lastname});
})

router.get('/user/:firstname/:lastname', function (req, res, next) {
  var {firstname, lastname} = req.params;

  if (!firstname || !lastname) {
    firstname = "Pritesh";
    lastname = "Patel";
  }

  res
      .status(200)
      .json({"firstname": firstname, "lastname": lastname});
})

router.post('/users', function (req, res, next) {
  let arr = [
    { "firstname": "Pritesh", "lastname": "Patel" },
    { "firstname": "John", "lastname": "Doe" },
    { "firstname": "John", "lastname": "Rome" }
  ]
  res
      .status(200)
      .json(arr)
})


module.exports = router;
