import {Router} from "express"

const router = Router()

router.get('/greet', async (request, response) =>{
  response.send("Hello Mercy")
})

export default router;