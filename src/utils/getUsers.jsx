


export async function getUsers() {
    const res = await fetch('https://api.escuelajs.co/api/v1/users');
    const json = await res.json();

    if (json.error) {
        throw new Error(json.error);
    }
    console.log(json)
    return json
}