export default async function LoadData(param) {
    const response = await fetch(`https://rcslabs.ru/ttrp${param}.json`);
    const data = response.json();
    return data
}