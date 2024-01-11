import { Router } from 'express';
import userController from '../controllers/User'

import loginRequired from '../middlewares/loginRequired'

const router = new Router()

// Rotas Não Convencionais
// router.get('/', userController.index) // Lista Usuarios
// outer.get('/:id', userController.show) // Lista Usuario

router.post('/', loginRequired, userController.store)
router.put('/', loginRequired, userController.update)
router.delete('/', loginRequired, userController.delete)

export default router

/*
index -> lista todos os usuarios -> GET
store/create -> cria um novo usuario -> POST
delete -> apaga um usuario -> DELETE
show -> mostra um usuario -> GET
update -> atualiza um usuario -> PATCH or PUT
*/
