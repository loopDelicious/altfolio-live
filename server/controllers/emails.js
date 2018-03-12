const Email = require('../models').Email;

module.exports = {
    create(req, res) {
        return Email
            .create({
                email: req.body.email,
            })
            .then(email => res.status(201).send(email))
            .catch(error => res.status(400).send(error));
    },

    list(req, res) {
        return Email
            .all()
            .then(emails => res.status(200).send(emails))
            .catch(error => res.status(400).send(error));
    },
};