const {nanoid} = require('nanoid');
const URL = require("../models/url")

async function handleGenerateNewShortUrl(req, res) {
    if (!req.body || !req.body.url) {
        return res.status(400).json({ error: 'URL is required' });
    }
    
    try {
        const shortId = nanoid(8);
        await URL.create({
            shortId: shortId,
            redirectUrl: req.body.url,
            visitHistory: [],
        });
        return res.render( "home" , 
            { id: shortId });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    handleGenerateNewShortUrl
}