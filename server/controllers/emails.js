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

    retrieve(req, res) {
        return Email
            .findById(req.params.email)
            .then(email => {
                if(!email) {
                    return res.status(404).send({
                        message: 'Email not found.',
                    });
                }
                return res.status(200).send(email);
            })
            .catch(error => res.status(400).send(error));
    },

    update(req, res) {
        return Email
            .find({
                where: {
                    email: req.params.email
                },
            })
            .then(email => {
                if (!email) {
                    return res.status(404).send({
                        message: 'Email not found.',
                    });
                }
                return email
                    .update({
                        portfolio: req.body.portfolio || email.portfolio,
                    })
                    .then(() => res.status(200).send(email))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    destroy(req, res) {
        return Email
            .find({
                where: {
                    email: req.params.email
                },
            })
            .then(email => {
                if (!email) {
                    return res.status(404).send({
                        message: 'Email not found.',
                    });
                }
                return email
                    .destroy()
                    .then(() => res.status(200).send({
                        message: "Email deleted successfully."
                    }))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    }
};