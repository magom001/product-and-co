import express from 'express';
import path from 'path';
import { UploadedFile } from 'express-fileupload';

const router = express.Router();

router.post('/product', (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No product image');
    }

    console.log(req.body);
    const file = req.files.productImage as UploadedFile;

    const p = path.join(process.cwd(), process.env.IMAGES_PATH || '', `test${path.extname(file.name)}`);
    file.mv(p, (err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json({ status: 'ok' });
        }
    });
});

export default router;
