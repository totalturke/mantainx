window.function = async function (link, apiKey) {
	try {
		const url = link.value;
		const api = apiKey.value;
		
		// Make API request with the provided link and API key
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'Authorization': `Bearer ${api}`,
				'Accept': 'application/json'
			},
			mode: 'cors'
		});
		
		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(`HTTP ${response.status}: ${errorText}`);
		}
		
		// Parse and return JSON response
		const jsonData = await response.json();
		return JSON.stringify(jsonData, null, 2);
		
	} catch (error) {
		// Return detailed error information
		return JSON.stringify({
			error: true,
			message: error.message,
			type: error.name,
			url: link.value
		}, null, 2);
	}
};
