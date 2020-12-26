require('dotenv').config();
const fs = require('fs');

const Client = {
    mode: {
        port        : process.env.PORT,
        env         : process.env.ENV,
        servercode  : "local",
        lang        : "fr",
    },
    app: {
        name    :   "Eportfolio",
        baseUrl :   "",
    },
    db: {
        name: process.env.DBNAME,
        user: process.env.DBUSER,
        password: process.env.DBPASSWORD,
    },
    overwrite: {
        "locales" : ""
    }
};

try {
    require('../client.json');
} catch (e) {
    fs.writeFileSync(__dirname + '/client.json', JSON.stringify(Client, null, 2), 'utf8');
}

module.exports = Client;

console.info('Config Ready, File : client.json');
