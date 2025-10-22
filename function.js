window.function = async function (link, apiKey) {
	try {
		const url = link.value;
		const api = apiKey.value;
		
		// Make API request with the provided link and API key
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'Authorization': `Bearer ${api}`,
				'Content-Type': 'application/json'
			}
		});
		
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		
		// Parse and return JSON response
		const jsonData = await response.json();
		return JSON.stringify(jsonData);
		
	} catch (error) {
		throw new Error(`Failed to fetch data: ${error.message}`);
	}
};
