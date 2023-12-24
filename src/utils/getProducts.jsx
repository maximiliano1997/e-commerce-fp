

export async function getProducts() {
    const res = await fetch('https://api.escuelajs.co/api/v1/products')
    const json = await res.json();

    if (json.error) {
        throw new Error(json.error);
    }

    return json
}