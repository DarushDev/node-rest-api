// <========== CALL THE PACKAGES WE NEED ==========>
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var config = require('./config.json');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; // set our port

var mongoose = require('mongoose');
//paste your own mongoDB database url instead. in my case it was:
//mongodb://<dbuser>:<dbpassword>@ds135812.mlab.com:35812/mydb1
mongoose.connect(config.dbUrl);

var Bear = require('./app/models/bear');

// <========== ROUTES FOR OUR API ==========>
var router = express.Router(); // get an instance of the express Router

// middleware to use for all requrests
router.use(function (req, res, next) {
    console.log('A request came.');
    next();// make sure we go to the next routes and don't stop here
});


// test route to make sure everything is working
router.get('/', function (req, res) {
    res.json({message: 'Welcome to our API!'});
});

router.route('/bears').post(function (req, res) {
    var bear = new Bear();
    bear.name = req.body.name;

    bear.save(function (err) {
        if(err)
            res.send(err);

        res.json({message: 'Bear created!'});
    })
});

//<========== REGISTER OUR ROUTES ==========>
// all of our routes will be prefixed with /api
app.use('/api', router);

//<========== START THE SERVER ==========>
app.listen(port);
console.log('Server is running on port ' + port);