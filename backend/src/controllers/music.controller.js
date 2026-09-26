const musicModel = require('../models/music.model')
const {uploadFile} = require('../services/storage.service')
const jwt = require('jsonwebtoken')

async function createMusic(req,res){

    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({message:"unauthorized"})
    }

    let decoded;

    try{
        decoded = jwt.verify(token,process.env.JWT_SECRET)

        if(decoded.role!=="artist"){
            return res.status(403).json({message:"you cannot create music"})
        }



    const{title} = req.body;
    const file = req.file;

        if (!file) {
            return res.status(400).json({
            message: "Music file is required"
        })
    }


        const result = await uploadFile(file.buffer.toString('base64'))

        const music = await musicModel.create({
            uri: result.url,
            title,
            artist: decoded.id,
        })

        res.status(201).json({
            message:"music created successfully",
            music:{
                id: music._id,
                uri:music.uri,
                title: music.title,
                artist: music.artist,
            }
        })

        
    }catch(err){
        return res.status(401).json({message:"unauthorized"})
    }

}

async function getMusic(req, res) {
    try {
        const music = await musicModel
            .find()
            .populate("artist", "username");

        return res.status(200).json({
            message: "music fetched successfully",
            music
        });

    } catch (err) {
        return res.status(500).json({
            message: "failed to fetch music"
        });
    }
}

module.exports = {createMusic,getMusic}