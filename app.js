import express from "express";
import rl from 'readline-sync'
import imeiUtil from './imeiUtil.js'
const router = express.Router();

var app = express();
app.set("view engine", "ejs");

var start = () => {
    var input;
    while(true){
        input = rl.question("how many imeis to generate? ")
        const imeiset = new Set();
        while (imeiset.size < input) {
            imeiset.add(imeiUtil.generateImei())
        }
        // process.stdout.write(`IMEI,ACTION\n`)
        for(let imei of imeiset) {
            // process.stdout.write(`${imei}${--input==0?"":","}`)
            process.stdout.write(`${imei}\n`)
        }
        // for(let imei of imeiset) {
        //     process.stdout.write(`${imei},`)
        // }
        console.log('\n')
    }
}
router.get("/imei", (req, res) => {
    console.log('/imei')
    res.render("index")
})
app.listen(3000, () => {
    console.log(`imei generator app started...`)
    start()
});