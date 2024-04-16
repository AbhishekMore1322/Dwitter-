var express = require('express'); 
var app = express();
app.use(express.static(__dirname + '/src'));

app.listen(process.env.PORT || 5500,()=>{
    console.log('\x1b[32m'," WEBAPP STARTED AT http://localhost:"+(process.env.PORT||5500));
});