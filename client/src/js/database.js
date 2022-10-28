import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate-store')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate-store', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  try {
    console.log('Post to the ase');
    const jateDb = await openDB('jate', 1);
    const tx = jateDb.transaction('jate-store', 'readwrite');
    const store = tx.objectStore('jate-store');
    const request = store.add({ notes: content });
    const result = await request;
    console.log('🚀 - data saved to the database', result);
  } catch (err) {
    console.error('putDb not implemented', err)
  };
}


// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  try {
    console.log('GET all from the database');
    const jateDb = await openDB('jate', 1);
    const tx = jateDb.transaction('jate-store', 'readonly');
    const store = tx.objectStore('jate-store');
    const request = store.getAll();
    const result = await request;
    console.log('result.value', result);
    return result;
  } catch (err) {
    console.error('getDb not implemented', err)
  };
};

initdb();
