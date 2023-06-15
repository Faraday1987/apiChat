
const { Router } = require('express');
const { registerUser } = require('../controllers/users');
const router = Router();

router.post('/registerUser', registerUser)


module.exports = router;


// const { usuariosGet,
//         usuariosPut,
//         usuariosPost,
//         usuariosDelete,
//         usuariosPatch } = require('../controllers/usuarios');
// router.get('/', usuariosGet );
// router.put('/:id', usuariosPut );
// router.post('/', usuariosPost );
// router.delete('/', usuariosDelete );
// router.patch('/', usuariosPatch );