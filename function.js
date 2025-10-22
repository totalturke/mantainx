window.function = async function (link) {
	try {
		const url = link.value;
		
		// Fetch content from the URL
		const response = await fetch(url, {
			method: 'GET',
			mode: 'cors'
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
