window.function = async function (link) {
	try {
		const url = link.value;
		
		// Use AllOrigins as CORS proxy to fetch content
		const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`;
		
		// Fetch content from the URL via proxy
		const response = await fetch(proxyUrl, {
			method: 'GET'
		});
		
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		
		// Get the content as text
		const content = await response.text();
		return content;
		
	} catch (error) {
		// Return error information
		return `Error: ${error.message}`;
	}
};
