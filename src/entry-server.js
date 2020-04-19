const createApp = require('./app.js')

module.exports = context =>{
    return new Promise((resolve, reject) => {
        const { app,router } = createApp(context);
        resolve(app)
    })
}