const express = require('express');
const musicController = require('../controllers/music.controller');
const multer = require('multer');

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 15 * 1024 * 1024 // 15MB limit
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('audio/')) {
            cb(null, true);
        } else {
            cb(new Error('Only audio files are allowed'), false);
        }
    }
});

const router = express.Router();

router.post('/upload', upload.single('music'), musicController.createMusic);
router.get('/', musicController.getMusic);

module.exports = router;