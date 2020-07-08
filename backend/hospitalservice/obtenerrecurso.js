// Endpoints for external data
const { Router } = require('express');
const router = new Router();

const fetch = require('node-fetch');

router.get('/', async (req, res) => {
    const response = await fetch('http://104.131.21.224:8000/api/recurso/');
    const data = await response.json();
    res.json(data);
});

module.exports = router;

//almacenar id de solicitudes realizadas de los recursos