(function() {
    console.log('BylbaHub is loading');
    
    const script = document.createElement('script');
    script.src = 'https://bylbahub.onrender.com/static/main.js';
    
    script.onload = () => {
        console.log('BylbaHub successfully injected');
    };
    
    script.onerror = (error) => {
        console.error('Failed inject: ', error);
        fallbackLoad();
    };
    
    document.documentElement.appendChild(script);
    
    function fallbackLoad() {
        console.log('Another inject');
        
        fetch('https://bylbahub.onrender.com/static/main.js')
            .then(response => response.text())
            .then(code => {
                const fallbackScript = document.createElement('script');
                fallbackScript.textContent = code;
                document.documentElement.appendChild(fallbackScript);
                console.log('BylbaHub successfully injected');
            })
            .catch(err => {
                console.error('Failed inject: ', err);
            });
    }
})();
