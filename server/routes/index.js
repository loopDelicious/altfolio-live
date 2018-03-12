const emailsController = require('../controllers').emails;

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the Emails API',
    }));

    app.post('/api/emails', emailsController.create);
    app.get('/api/emails', emailsController.list);

};