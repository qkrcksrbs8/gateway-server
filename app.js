const express = require('express'); // npm i express
const router = express();
const bodyParser = require("body-parser"); // npm i body-parser
// api npm // npm i axios

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

//테스트 라우터
router.get('/test', (req, res) => {
    res.json({'code':'S001'});
})

//포트 연결
router.listen(3000,()=>console.log(`http://localhost:3000`));