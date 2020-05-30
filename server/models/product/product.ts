import fs from 'fs';
import path from 'path';
import util from 'util';
import { getImageFilePath } from '../../helpers';

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const deleteFile = util.promisify(fs.unlink);

const DATA_FILE_NAME = 'data.json';
const filePath = path.join(process.cwd(), DATA_FILE_NAME)

interface Product {
    id: string;
    name: string;
    quantity: number;
    price: number;
    fileName: string;
    colour: string;
}

class ProductModel {
    static ID = 0;
    static instance: ProductModel | null = null;
    static async get(): Promise<ProductModel> {
        const data = JSON.parse(
            await readFile(filePath, { encoding: 'utf-8' })
        );

        ProductModel.ID = data.ID;
        return new ProductModel(data.products);
    }

    private products: Record<string, Product>;

    constructor(products: Record<string, Product>) {
        this.products = products;
    }

    private async persist() {
        await writeFile(
            filePath,
            JSON.stringify({
                ID: ProductModel.ID,
                products: this.getProducts(),
            })
        );
    }

    public getProducts(): Record<string, Product> {
        return this.products;
    }

    public async deleteProduct(id: string): Promise<boolean> {
        if (this.products[id]) {
            const imagePath = getImageFilePath(this.products[id].fileName);

            if (fs.existsSync(imagePath)) {
                await deleteFile(imagePath);
            }

            delete this.products[id];
            await this.persist();
            return true;
        }

        return false;
    }

    public async addProduct(product: Omit<Product, 'id'>): Promise<Product> {
        const newProduct = { ...product, id: ProductModel.ID.toString() };
        this.products[newProduct.id] = newProduct;

        ProductModel.ID++;

        await this.persist();

        return newProduct;
    }

    public getProductById(id: string): Product {
        return this.products[id];
    }
}

export const { get } = ProductModel;
