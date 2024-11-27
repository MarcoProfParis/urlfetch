window.function = async function(url) {
    // Check if the `url` parameter is undefined or does not have a `value` property
    if (!url || url.value === undefined) {
        return "En attente ...";
    }

    try {
        // Define request options
        const requestOptions = {
            method: 'GET'
        };

        // Fetch the data from the URL
        const response = await fetch(url.value, requestOptions);

        // Check if the response is OK (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the response as text
        const data = await response.text();
        return data;

    } catch (error) {
        // Handle errors and return an error message
        return `Erreur: ${error.message}`;
    }
};
