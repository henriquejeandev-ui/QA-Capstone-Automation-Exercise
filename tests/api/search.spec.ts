import {test, expect} from '@playwright/test';

test('should return matching products when searching with a valid term', async({request}) => {
    const response = await request.post('/api/searchProduct', {
        form: { search_product: 'top'},
});

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.responseCode).toBe(200);
    expect(Array.isArray(body.products)).toBe(true);

});

test('should return 400 in responseCode when search_produt parameter is missing', async({request}) => {
    const response = await request.post('/api/searchProduct');

    const body = await response.json();
    expect(body.responseCode).toBe(400);
    expect(body.message).toBe('Bad request, search_product parameter is missing in POST request.')
})