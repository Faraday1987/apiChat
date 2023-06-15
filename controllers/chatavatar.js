const { db } = require('../config/firebaseConfig');

const { response, request } = require('express');

const contactPost = async (req = request, res = response) => {

    const { email, information } = req.body;

    const message = {
        email,
        information,
        timestamp: new Date(Date.now()).toLocaleString()
    }
    try {
        await db.collection('contactform').add(message).then((codRef) => {
            res.status(201).json({ message: 'Message send successfully', message: codRef.id });
        }).catch((err) => {
            res.status(400).json({ error: err.message });
        });
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

module.exports = {
    contactPost,
}