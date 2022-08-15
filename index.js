const express = require('express');
const app = express();

//ejs
app.set("view engine", 'ejs');

//routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/create-nft-contract', () => {
    var axios = require('axios');
    var data = {
        "key": "MgeNlKqabZ4MuwnkQ1fwDTSHoc3AoPHo",
        "chain_id": 97, // BSC Testnet
        "name": "Test NFT",
        "short_name": "TNFT",
        "webhook_url": "https://webhook.site/3f1cd270-30d4-4f6e-956a-ae47407a32e7",
        "redirect_url": "https://thentic.tech/"
    };

    var config = {
        method: 'post',
        url: 'https://thentic.tech/api/nfts/contract',
        headers: {},
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });

});

//port
app.listen(3000, console.log("Listening at port 3000..."));