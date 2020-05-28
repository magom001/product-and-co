import { Product } from '../features/products/slice';

interface ApiCallOptions {
    method: 'POST' | 'GET' | 'PUT' | 'DELETE';
    body: BodyInit;
    headers?: HeadersInit;
}

const apiCall = async (
    url: string,
    options: ApiCallOptions = {
        method: 'POST',
        body: '',
        headers: {
            'Content-Type': 'application/json',
        },
    }
) => {
    const response = await fetch(`/api/${url}`, options);
    return response.json();
};

export const saveProduct = async (
    input: Omit<Product, 'id' | 'fileName'> & { file: File }
) => {
    const fd = new FormData();
    fd.append('image', input.file);
    fd.append('name', input.name);
    fd.append('price', input.price.toString());
    fd.append('quantity', input.quantity.toString());
    fd.append('colour', input.colour);

    const response = await apiCall('product', { method: 'POST', body: fd });

    return response;
};

export const deleteProduct = async (id: Product['id']) => {
    return await apiCall('product', {
        method: 'DELETE',
        body: JSON.stringify({ id }),
    });
};
