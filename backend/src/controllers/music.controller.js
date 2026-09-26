const musicModel = require('../models/music.model');
const { uploadFile } = require('../services/storage.service');
const jwt = require('jsonwebtoken');

async function createMusic(req, res) {
    // Check both cookie and Authorization header
    const authHeader = req.headers.authorization;
    const token = req.cookies?.token || (authHeader && authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null);

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    let decoded;
    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
        return res.status(401).json({ message: 'Unauthorized: Invalid or expired token' });
    }

    if (decoded.role !== 'artist') {
        return res.status(403).json({ message: 'Forbidden: Only artists can upload music' });
    }

    const { title } = req.body;
    const file = req.file;

    if (!title || !title.trim()) {
        return res.status(400).json({ message: 'Title is required' });
    }

    if (!file) {
        return res.status(400).json({ message: 'Music file is required' });
    }

    try {
        const result = await uploadFile(file.buffer.toString('base64'));

        const music = await musicModel.create({
            uri: result.url,
            title: title.trim(),
            artist: decoded.id
        });

        return res.status(201).json({
            message: 'Music created successfully',
            music: {
                id: music._id,
                uri: music.uri,
                title: music.title,
                artist: music.artist
            }
        });
    } catch (uploadOrDbErr) {
        console.error('Music creation error:', uploadOrDbErr);
        return res.status(500).json({ message: 'Failed to upload and save music' });
    }
}

async function getMusic(req, res) {
    try {
        const music = await musicModel
            .find()
            .populate('artist', 'username');

        return res.status(200).json({
            message: 'Music fetched successfully',
            music
        });
    } catch (err) {
        console.error('Fetch music error:', err);
        return res.status(500).json({
            message: 'Failed to fetch music'
        });
    }
}

module.exports = { createMusic, getMusic };