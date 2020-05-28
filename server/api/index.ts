import express from 'express';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

import { UploadedFile } from 'express-fileupload';
import { get as getProductModel } from '../models/product/product';

const router = express.Router();

router.post('/product', async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No product image');
    }

    const file = req.files.image as UploadedFile;

    const productModel = await getProductModel();

    const fileName = `${uuidv4()}${path.extname(file.name)}`;

    // TODO: handle data validation
    const productData = {
        name: req.body.name,
        quantity: Number.parseInt(req.body.quantity),
        price: Number.parseFloat(req.body.price),
        colour: req.body.colour,
        fileName,
    };

    const newProduct = await productModel.addProduct(productData);

    const p = path.join(process.cwd(), process.env.IMAGES_PATH || '', fileName);
    file.mv(p, (err) => {
        if (err) {
            productModel.deleteProduct(newProduct.id);
            res.status(500).send(err);
        } else {
            res.status(200).json({ status: 'ok', ...newProduct });
        }
    });
});

router.delete('/product', async (req, res) => {
    if (!req.body.id) {
        return res.status(400).send('Expected an id but none found');
    }

    const productModel = await getProductModel();

    try {
        await productModel.deleteProduct(req.body.id);
        res.status(200).json({ status: 'ok' });
    } catch (_error) {
        res.status(500).json({ error: 'Server error' });
    }
});

export default router;
