
import {test, expect} from '@playwright/test';

test('sould return the brand list when requesting GET /brandsList', async({request}) => {
    const response = await request.get('/api/brandsList');

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.responseCode).toBe(200);
    expect(Array.isArray(body.brands)).toBe(true);
});

test('should return 405 is responseCode when using PUT on/brandsList', async({request}) => {
    const response = await request.put('/api/brandsList');

    const body = await response.json();
    expect(body.responseCode).toBe(405);
    expect(body.message).toBe('This request method is not supported.');
});