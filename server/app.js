const express = require("express");
const app = new express();
app.use('/assets', express.static('assets'))
    // const cors = require('cors')

// app.use(cors())
// app.use(express.static())
//获取商品分类列表
app.get("/proList", (req, res) => {
    res.json({
        code: 200,
        proList: [{
                id: 100,
                imgurl: "/assets/hongmi5.jpg",
                title: "小米手机1",
                brief: "年轻人的酷玩具",
                price: 1999,
            },
            {
                id: 101,
                imgurl: "/assets/hongmi5.jpg",
                title: "小米手机2",
                brief: "年轻人的酷玩具",
                price: 2999,
            },
            {
                id: 102,
                imgurl: "/assets/hongmi5.jpg",
                title: "小米手机3",
                brief: "年轻人的酷玩具",
                price: 2999,
            },
            {
                id: 103,
                imgurl: "/assets/hongmi5.jpg",
                title: "小米手机4",
                brief: "年轻人的酷玩具",
                price: 2999,
            },
            {
                id: 104,
                imgurl: "/assets/hongmi5.jpg",
                title: "小米手机5",
                brief: "年轻人的酷玩具",
                price: 2999,
            },
            {
                id: 105,
                imgurl: "/assets/hongmi5.jpg",
                title: "小米手机6",
                brief: "年轻人的酷玩具",
                price: 2999,
            },
        ],
    });
});
//产品详情页的
// app.get("/cpxiangqing", (req, res) => {
//     res.json({
//         code: 200,
//         xiangqing: [{
//             title: "小米手机1",
//             brief: "年轻人的酷玩具",
//             price: 1999,
//         }]
//     })
// })



app.listen(3333, "127.0.0.1");