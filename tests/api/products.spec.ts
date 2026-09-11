import test, { expect, request } from "@playwright/test";

test('should return the product list when requesting GET /productsList', async({request}) => {
    const response = await request.get('/api/productsList');

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.responseCode).toBe(200);
    expect(Array.isArray(body.products)).toBe(true);
});

test('sould return 405 is responseCode when using POST on /productsList', async({request}) => {
    const response = await request.post('/api/productsList');

    const body = await response.json();
    expect(body.responseCode).toBe(405);
    expect(body.message).toBe('This request method is not supported.');
});