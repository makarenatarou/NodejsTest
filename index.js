// https://cloudsteady.jp/post/8867/

var express = require("express");
var app = express();

app.set("view engine", "ejs");

// 静的ファイルの読み込み
app.use(express.static('css'))
app.use(express.static('js'))

// 最初のget
app.get('/', (req, res)=> {
    
    // indexのviewを返しますよ。
    res.render("index", {
        hello: "hello world",
        ako:"makakama"
    });
});

// ゴミ
app.get('/ageo/index',(req, res)=> {

    res.render("ageo/index", {
        a: "a"
    });

});

app.listen(8080,()=>console.log('access -> http://localhost:8080/'))