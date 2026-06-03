export async function GetProducts() {
    const response = await fetch('/products.json');
    const gear = await response.json();
    return gear;
}

