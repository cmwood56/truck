var express = require("express");
console.log(express);

var app = express();
var router = express.Router();
router.get('/', function(req, res) {
    res.send('../app/index.html');
});

app.use('/', router);
app.listen(3000, function() {
    console.log("Server listening on port %d", 3000);

});