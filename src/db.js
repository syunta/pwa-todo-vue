const dbName = 'pwa-todo-vue';
const storeName = 'todos';
let db;

const openDB = function (cb) {
  let DBOpenRequest = window.indexedDB.open(dbName);

  DBOpenRequest.onerror = function(event) {
    console.log('Error loading database');
  };

  DBOpenRequest.onupgradeneeded = function(event) {
    let db = event.target.result;
    db.createObjectStore(storeName, { keyPath: 'content' });
  };

  DBOpenRequest.onsuccess = function(event) {
    db = event.target.result;
    return cb();
  };
};

const waitOpenDB = function(cb) {
  if (!db) {
    return openDB(cb);
  } else {
    return cb();
  }
};

module.exports = {
  getAll(completed) {
    return waitOpenDB(function () {
      let objectStore = db.transaction([storeName], 'readonly').objectStore(storeName);
      let data = [];
      objectStore.openCursor().onsuccess = function(event) {
        let cursor = event.target.result;
        if (cursor) {
          data.push(cursor.value);
          cursor.continue();
        } else {
          completed(data);
        }
      };
    });
  },
  put(todo, completed) {
    waitOpenDB(function () {
      let transaction = db.transaction([storeName], 'readwrite');
      let objectStore = transaction.objectStore(storeName);
      let req = objectStore.put(todo);
      req.onsuccess = completed;
    });
  },
  delete(key, completed) {
    waitOpenDB(function () {
      let transaction = db.transaction([storeName], 'readwrite');
      let objectStore = transaction.objectStore(storeName);
      let req = objectStore.delete(key);
      req.onsuccess = completed;
    });
  }
}
