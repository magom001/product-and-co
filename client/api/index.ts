interface ApiCallOptions {
    method: 'POST' | 'GET' | 'PUT';
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

export const saveProduct = async (file: File) => {
    console.log('upload image', file);
    const fd = new FormData();
    fd.append('productImage', file);
    fd.append('productName', 'Test name');
    const response = await apiCall('product', { method: 'POST', body: fd });
    console.log(response);
};
