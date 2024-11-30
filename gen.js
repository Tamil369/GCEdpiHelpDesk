function generateUniqueToken() {
    // Generate 9 random characters
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 9;
    let randomPart = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomPart += characters[randomIndex];
    }
    const datePart = new Date().toISOString().slice(2, 8).replace('-', '').replace('-', '');
    const millisecondsPart = new Date().getMilliseconds(); // Get milliseconds (0 to 999)
    return randomPart + datePart + millisecondsPart;
}

// Example usage:
const uniqueToken = generateUniqueToken();
console.log("Generated Token:", uniqueToken);
