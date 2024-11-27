window.function = async function(url) {
    if (url.value === undefined) return "En attente ...";
    
    const requestOptions = {
        method: 'GET'
    };
const response = await fetch(url.value, requestOptions);
const data = await response.text();
        return data;}
