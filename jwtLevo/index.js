const express = require('express');
const cors = require('cors');
const jwt = require('jwt-simple');
const moment = require('moment');
const app = express();
app.use(cors());
const JWTKEY = 'JWTKEY';

app.use(express.json());

app.get('/', (req, res) => {
    res.send('api works');
});

app.post('/api/login', (req, res) => {
    let payload = req.body;
    if(payload.user !== 'admin' || payload.password !== '1234'){
        return res.send({success: false, message: 'Credenciales inválidas'});
    }
       
    const user = {
        username: "admin",
        password: "1234",
        iat: moment().unix(),
        exp: moment().add(1,'minutes').unix()
    };

    const _token = jwt.encode(user, JWTKEY);
    return res.send({ success: true, token: _token, user: user});
});

app.get('/api/isValidToken', (req, res) => {
    
    let token = req.headers.authorization.replace(/['"]+/g, '');
    try{
        var payload = jwt.decode(token, JWTKEY);
        if(payload.exp <= moment().unix()){
            return res.status(403).send({success: false, message: 'token expiró'});
        }
    }catch(e){
        return res.status(200).send({ sucess: false, message: 'token inválido'} );
    }
    return res.status(200).send({success: true, message: 'token válido', user: payload});
});


app.listen(3000, () => {
    console.log('server on port 3000')
});