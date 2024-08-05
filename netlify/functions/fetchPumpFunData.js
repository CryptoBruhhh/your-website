const fetch = require('node-fetch');

exports.handler = async function(event, context) {
    try {
        const response = await fetch('https://pump.fun/board');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const text = await response.text();
        return {
            statusCode: 200,
            body: text,
        };
    } catch (error) {
        console.error('Error fetching data from Pump.fun:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to fetch data from Pump.fun' }),
        };
    }
};