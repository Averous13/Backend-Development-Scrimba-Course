function getStockData() {
    return {
        name: 'QtechAI',
        sym: 'QTA',
        price: randomDecimal(3, 0), 
        time: timeStamp(),
    }
}

function randomDecimal(max, min) {
    const result = Math.random() * (max - min) + min;
    return parseFloat(result.toFixed(2));
}

function timeStamp() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2, '0');
    const second = String(now.getSeconds()).padStart(2, '0');
    
    return `${hours}:${minute}:${second}`
}

export default getStockData;
  