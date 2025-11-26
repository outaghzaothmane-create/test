import { createClient } from '@sanity/client';

const client = createClient({
    projectId: '1m78vl74',
    dataset: 'production',
    useCdn: false, // Use false to get freshest data
    apiVersion: '2023-05-03',
});

async function testFetch() {
    try {
        console.log('Fetching products...');
        const products = await client.fetch('*[_type == "product"]');
        console.log(`Successfully fetched ${products.length} products.`);
        if (products.length > 0) {
            console.log('First product:', products[0].name);
        }
    } catch (error) {
        console.error('Error fetching products:', error.message);
    }
}

testFetch();
