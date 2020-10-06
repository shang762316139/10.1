const express = require('express')
const app = new express()
const cors = require('cors')


app.use(cors())

//获取商品分类列表
app.get('/proList', (req, res) => {
    res.json({
        code: 200,
        proList: {
            title: '小米手机',
            proImg: "../src/assets/hongmi5.jpg",
            price: 1999
        }
    })
})

app.listen(3333, '127.0.0.1')