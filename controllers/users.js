const { db, authapp } = require('../config/firebaseConfig');
const { response, request } = require('express');

const registerUser = async (req = request, res = response) => {
    const { email, displayName, password, language = 2 } = req.body;

    try {
        const userRecord = await authapp.createUser({ email, password, displayName });

        const newUser = {
            userId: userRecord.uid,
            email: userRecord.email,
            displayName: String(displayName).toLocaleLowerCase(),
            language: language,
            timestamp: new Date(Date.now()).toLocaleString()
        };

        await db.collection('users').add(newUser);
        const reserved = {
            userId: newUser.userId,
            displayName: newUser.displayName,
            language: newUser.language
        };

        const codRef = await db.collection('nicks').add(reserved);
        res.status(200).json({ message: 'User created successfully', ref: codRef.id });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    registerUser,
}


// const usuariosGet = (req = request, res = response) => {

//     const { q, nombre = 'No name', apikey, page = 1, limit } = req.query;

//     res.json({
//         msg: 'get API - controlador',
//         q,
//         nombre,
//         apikey,
//         page, 
//         limit
//     });
// }

// const usuariosPost = (req, res = response) => {

//     const { nombre, edad } = req.body;

//     res.json({
//         msg: 'post API - usuariosPost',
//         nombre, 
//         edad
//     });
// }

// const usuariosPut = (req, res = response) => {

//     const { id } = req.params;

//     res.json({
//         msg: 'put API - usuariosPut',
//         id
//     });
// }

// const usuariosPatch = (req, res = response) => {
//     res.json({
//         msg: 'patch API - usuariosPatch'
//     });
// }

// const usuariosDelete = (req, res = response) => {
//     res.json({
//         msg: 'delete API - usuariosDelete'
//     });
// }

// module.exports = {
//     usuariosGet,
//     usuariosPost,
//     usuariosPut,
//     usuariosPatch,
//     usuariosDelete,
// }