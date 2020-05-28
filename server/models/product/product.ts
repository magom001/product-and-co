import fs from 'fs';
import path from 'path';
import util from 'util';

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const DATA_FILE_NAME = 'data.json';

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
        const filePath = path.join(__dirname, DATA_FILE_NAME);
        const data = JSON.parse(
            await readFile(filePath, { encoding: 'utf-8' })
        );

        if (!ProductModel.instance) {
            ProductModel.instance = new ProductModel(data.products);
            ProductModel.ID = data.ID;
        }
        return ProductModel.instance;
    }

    private products: Record<string, Product>;

    constructor(products: Record<string, Product>) {
        this.products = products;
    }

    private async persist() {
        await writeFile(
            path.join(__dirname, DATA_FILE_NAME),
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
}

export const { get } = ProductModel;
