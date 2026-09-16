import { test, expect} from '@playwright/test'
import db, { setupDatabase } from '../../database/setup'

test.beforeEach(() => {
    setupDatabase();
});

test('should return all products belonging to a specific brand', async () => {
    const products = db.prepare('SELECT * FROM products WHERE brand_id = ?').all(1);

    expect(products).toHaveLength(1);
    expect((products[0] as any).name).toBe('Blue Top');
});

test('should find a product by partial name match', async () => {
    const products = db.prepare("SELECT * FROM products WHERE name LIKE ?").all('%Top%');

    expect(products.length).toBeGreaterThan(0);
});

test('should return product name joined with its brand name', async () => {
    const result = db.prepare(`
        SELECT products.name AS product_name, brands.name AS brand_name
        FROM products
        JOIN brands ON products.brand_id = brands.id
        WHERE products.id = 1
        `).get() as any;

    expect(result.product_name).toBe('Blue Top');
    expect(result.brand_name).toBe('Polo');
});