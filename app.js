const express = require('express'); // npm i express
const router = express();
// api npm // npm i axios

const bodyParser = require("body-parser"); // npm i body-parser
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

//테스트 라우터
router.get('/test', (req, res) => {
    res.json({'code':'S001'});
})

//get gateway
router.get('/*', (req, res) => {

    let startPath = req.path.split('/', 2)[1];
    let url = require('./config/urlConfig')[startPath].url;
    if (!url) return res.json({'code':'E001', 'msg':'유효하지 않은 요청입니다.'});
    url = `${url}${req.path}`;
    console.log(url);

    res.json({'code':'S001', 'url':url});
})

//포트 연결
router.listen(3000,()=>console.log(`http://localhost:3000`));