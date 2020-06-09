const express     =  require('express') 
const mongoose    =  require('mongoose') 

const morgan      =  require('morgan') 
const bodyParser  =  require('body-parser')
const path        =  require('path')


const EmployeeRoute = require('./routes/employee')
const AuthRoute     = require('./routes/auth')
const LostpassRoute = require('./routes/lostpass')
const CalRoute      = require('./routes/calRoute')

mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost:27017/testdb',{ useNewUrlParser: true,useUnifiedTopology:true })


const db = mongoose.connection

db.on('error',(err)=>{
    console.log(err)
})

db.once('open',()=>{
    console.log('Database Connection Established!')
})

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use('/uploads', express.static('uploads'))
app.use('/api/employee',EmployeeRoute)
app.use('/api',AuthRoute)
app.use('/api/lostpass',LostpassRoute)
app.use('/api',CalRoute)

app.use(express.static('public'))

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log('Server is running on port ' + PORT)
})

app.get('/', function(req,res){
    res

        .status(200)
        .sendFile(path.join(__dirname, '../public', 'index.html'));
})


