const expresss = require("express")
const axios = require("axios");

const router = expresss.Router();

const SERVER_URL = ""

router.get("/", (req, res) => {

    let player = axios({
        method: 'post',
        url: 'http://' + SERVER_URL + '/request/players',
        data: { }
    }).then((response) => {
        console.log(response)
        res.render("client/index", { players: response.data })
    })
})

router.get("/player", (req, res) => {
    let id = req.query.tkn_id;
    let identity = axios({
        method: 'post',
        url: 'http://' + SERVER_URL + ':3500/request/player',
        data: { 
            id: id
        }
    }).then((response) => {
        res.render("client/player", { id: id, identity: response.data })
    })
})

module.exports = router;
