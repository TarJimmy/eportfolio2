let express         =   require('express'),
    path            =   require('path'),
    Mongoose        =   require('mongoose'),
    bodyParser      =   require('body-parser'),
    cookieParser    =   require('cookie-parser'),
    colors          =   require('colors/safe'),
    cors            =   require('cors'),
    config          =   require('./config')
    app = express();

//mongodb+srv://' + Config.db.user + ':' + Config.db.password + '@' + Config.db.name + '.gzngh.mongodb.net/'+ Config.db.name + '?retryWrites=true&w=majority\n
//Database Connection
Mongoose.Promise = global.Promise;
Mongoose
    .connect('mongodb://localhost/eportfolio', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.info(colors.cyan('MongoDB   ', colors.red('Ready'), colors.green('Db : ' + config.db.name))))
    .catch((e) => console.error(colors.red(e)));


//Thread management
process.on('SIGINT', () => {
    Mongoose.disconnect((err) => {
        console.info(colors.cyan('MongoDB    ') + colors.red('disconnected'));
        process.exit(err ? 1 : 0);
    })
});

app
    .use(bodyParser.json({limit: '100mb'}))
    .use(bodyParser.urlencoded({limit: '100mb', extended: false}))
    .use(express.static(path.join(__dirname, 'src')))
    .use(express.static(path.join(__dirname, 'src')))
    .use(cookieParser())
    .use(cors());

//Routing
app
    .use('/', require('./routes/home'))

    //routes
    .use('/formations'          ,   require('./routes/formations'))
    .use('/experiencePro'       ,   require('./routes/experiencePro'))
    .use('/company'              ,   require('./routes/company'))
    .use('/project'              ,   require('./routes/project'))
    .use('/skill'       ,   require('./routes/skill'));


module.exports = app;
