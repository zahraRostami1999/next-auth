import db from './db';

export function CreateUser(email, password) {
  const result = db
    .prepare('INSERT INTO users (email, password) VALUES (?, ?)')
    .run(email, password);
  return result.lastInsertRowid;
}

export function GetUserByEmail(email) {
  return db.prepare('SELECT * FROM users WHERE email = ?').get(email)
}