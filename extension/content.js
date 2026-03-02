async function InjectBylbaHub() {
    try {
        await import('https://bylbahub.onrender.com/static/main.js');
    } catch (error) {
        console.error('Error: ', error);
    }
}

InjectBylbaHub();
