import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.join(__dirname, 'test-data.db');
const db = new Database(dbPath);

export function setupDatabase() {

    db.exec(`
        DROP TABLE IF EXISTS products;
        DROP TABLE IF EXISTS brands;
        
        CREATE TABLE brands(
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL
        );
        
        CREATE TABLE products(
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            price TEXT NOT NULL,
            brand_id INTEGER,
            FOREIGN KEY (brand_id) REFERENCES brands(id)
        );
    `)

    const insertBrand = db.prepare('INSERT INTO brands (id, name) VALUES (?, ?)');
    insertBrand.run(1, 'Polo');
    insertBrand.run(2, 'H&M');
    insertBrand.run(3, 'Madame');
    insertBrand.run(5, 'Mast & Harbour');

    
    const insertProduct = db.prepare('INSERT INTO products (id, name, price, brand_id) VALUES (?, ?, ?, ?)');
    insertProduct.run(1, 'Blue Top', 'Rs. 500', 1);
    insertProduct.run(2, 'Men Tshirt', 'Rs. 400', 2);
    insertProduct.run(3, 'Sleeveless Dress', 'Rs. 1000', 3);
    insertProduct.run(5, 'Winter Top', 'Rs. 600', 5);
}

export default db;