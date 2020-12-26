var express       = require('express'),
    path          = require('path'),
    i18n          = require('i18n'),
    Config        = require('./config'),
    Mongoose      = require('mongoose'),
    async         = require('async'),
    _             = require('underscore'),
    bodyParser    = require('body-parser'),
    glob          = require('glob'),
    cookieParser = require('cookie-parser'),
    app = express();

//Database Connection
Mongoose.Promise = global.Promise;
Mongoose
    .connect('mongodb+srv://' + Config.db.user + ':' + Config.db.password + '@' + Config.db.name + '.gzngh.mongodb.net/'+ Config.db.name + '?retryWrites=true&w=majority\n', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(()=> {
        console.error('mongodb+srv://' + Config.db.user + ':' + Config.db.password + '@' + Config.db.name + '.gzngh.mongodb.net/'+ Config.db.name + '?retryWrites=true&w=majority')
    });

//Locale
i18n.configure({
    locales         : ['en', 'fr'],
    directory       : __dirname + '/locales',
    defaultLocale   : Config.mode.lang,
    prefix          : Config.overwrite.locales ? Config.overwrite.locales + '_' : '',
    queryParameter  : 'lang'
})
app.use(i18n.init);
app.locals = function(){};

glob(__dirname + 'locales/@(??).json', {}, (err, files)=> {
    async.waterfall([
            (callback) => {
                var locales = {};
                files.forEach((file)=> {
                    if (file) {
                        locales[path.basename(file, '.json')] = require(file);
                    }
                });
                callback(null, locales);
            },
            (locales, callback) => {
                if(Config.overwrite.locales) {
                    files.forEach((file)=> {
                        if (file) {
                            var over = require('./locales/' + Config.overwrite.locales + '_' + path.basename(file));
                            if (!_.isEmpty(over)) {
                                _.each(over, (value, key) => {
                                    if (key && value) {
                                        locales[path.basename(file, '.json')][key] = value;
                                    }
                                });
                            }
                        }
                    })
                }
                callback(null, locales);
            }
        ],
        (err, locales) => {
            global.i18n = locales;
            console.info('i18n ready');
        });
});

app
    .use(bodyParser.json({limit: '100mb'}))
    .use(bodyParser.urlencoded({limit: '100mb', extended: false}))
    .use(express.static(path.join(__dirname, 'src')))
    .use(express.static(path.join(__dirname, 'src')))
    .use(cookieParser());
//Routing
app
    .use('/', require('./routes/home'))

    //Exemple
    .use('/api/formations',   require('./routes/formations'))
    .use('/api/v1/generate_uid', require('./routes/generate_uid'));

module.exports = app;
