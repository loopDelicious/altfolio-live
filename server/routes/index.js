const emailsController = require('../controllers').emails;

module.exports = (app) => {

    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the Emails API',
    }));

    app.post('/api/emails', emailsController.create);
    app.get('/api/emails', emailsController.list);
    app.get('/api/emails/:email', emailsController.retrieve);
    app.put('/api/emails/:email', emailsController.update);
    app.delete('/api/emails/:email', emailsController.destroy);

    app.all('/api/todos/:email', (req, res) => {
        res.status(405).send({
            message: "Method not allowed"
        })
    })

};
