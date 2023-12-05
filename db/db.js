import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./fish.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to the database');

        // Create tables and perform other initializations here
        // (Code for creating products, users, and carts tables)
        db.run(`
            CREATE TABLE IF NOT EXISTS account (
               id INTEGER PRIMARY KEY AUTOINCREMENT,
               fullName Text NOT NULL,
               age INTEGER NOT NULL,
               email TEXT NOT NULL,
            )
        `, (createErr) => {
            if (createErr) {
                console.error('Error creating create table:', createErr.message);
            } else {
                console.log(' CreateTable created successfully');
            }
        });
    }
});

// Function to query the database
async function queryDatabase(query, params) {
    return new Promise((resolve, reject) => {
        const db = new sqlite3.Database('./fish.db');
        db.all(query, params, (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
            db.close();
        });
    });
}
// Export the initialized database and query function
export { db, queryDatabase };