const config = require('../config/index.js');
const validUrl = require('valid-url');
const shortid = require('shortid');

//tmp store everything in memory, will use Redis or NoSQL database for storing data
const longToShortDic = {};
const shortToLongDic = {};
const codeToLongDic = {};
const visited = {}

//create a short link from a URL
exports.shortenURL = function(req, res) {
    const { longUrl } = req.body;
    const urlCode = shortid.generate();
    
    if(validUrl.isUri(longUrl)) {
        if(longToShortDic[longUrl]) {
            return res.json({"short link:": longToShortDic[longUrl]})
        } else {
            const shortUrl = config.baseUrl + '/' + urlCode;
            longToShortDic[longUrl] = shortUrl;
            shortToLongDic[shortUrl] = longUrl;
            codeToLongDic[urlCode] = longUrl;
            res.json({"short link:": shortUrl});
        }
    } else {
        res.status(400).json("Invalid long URL.");
    }
};

//follow a short link to destination
exports.getShortLink = function(req, res) {
    const urlCode = req.params.code;
    const longUrl = codeToLongDic[urlCode];
    if(longUrl) {
        //for reporting
        let number = visited[urlCode];
        if(number > 0) {
            number += 1;
            visited[urlCode] = number
        } else {
            visited[urlCode] = 1;
        }

        res.redirect(longUrl);
    } else {
        res.status(400).json("invalid URL");
    }
};

//delete a short link
exports.deleteShortLink = function(req, res) {
    const { shortUrl } = req.body;
    if(shortToLongDic[shortUrl]) {
        const longUrl = shortToLongDic[shortUrl];
        let urlCode = shortUrl.replace(/^(`${config.baseUrl}`)/,''); 
        console.log(urlCode);
        if(delete shortToLongDic[shortUrl] && delete longToShortDic[longUrl]) {
            res.status(200).json("Success fully delete url:" + shortUrl);
        } else {
            res.status(500).json("error in deleteing short URL");
        }
    } else {
        res.status(400).json("short URL not exist.");
    }
}

//record number of visits to a short link for reporting
exports.reportVisitedLink = function(req, res) {
    const report = {};
    for (const [key, value] of Object.entries(visited)) {
        console.log(key, value);
        const shortUrl = config.baseUrl + '/' + key
        report[key] = {
            "visited num": value,
            "shortUrl": shortUrl,
            "longUrl": shortToLongDic[shortUrl]
        }
    }
    res.status(200).json(report);
}
