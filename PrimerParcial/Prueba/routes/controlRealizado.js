const { Router } = require('express');



const { metodoControlRealizado,
    controlReplica
      } = require('../controllers/controlRealizado');


const router= Router();

router.post('/', metodoControlRealizado );


 router.get('/', controlReplica );




module.exports = router;