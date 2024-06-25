let db: IDBDatabase;
const databaseName = 'swapiDb';
const openRequest: IDBOpenDBRequest = indexedDB.open('myDatabase', 1);

/* 
cache full request responses
*/

// TODO add expiry (short since disney pushes out so much content)

openRequest.onupgradeneeded = function (e: IDBVersionChangeEvent) {
	db = (e.target as IDBOpenDBRequest).result;
	console.log('running onupgradeneeded');
	db.createObjectStore(databaseName, { keyPath: 'url' });
};

openRequest.onsuccess = function (e: Event) {
	console.log('running onsuccess');
	db = (e.target as IDBOpenDBRequest).result;
	// add a sample item for testing
	// TODO remove this
	addItem({ data: { name: 'Tatooine' }, url: 'https://example.com' });
};

openRequest.onerror = function (e: Event) {
	console.log("onerror! doesn't work");
	console.dir(e);
};

function addItem(item: { data: object; url: string }) {
	const tx: IDBTransaction = db.transaction(databaseName, 'readwrite');
	const store: IDBObjectStore = tx.objectStore(databaseName);
	store.add(item);

	tx.oncomplete = () => {
		console.log('Transaction completed: database modification finished.');
	};

	tx.onerror = (event) => {
		console.error('Transaction not opened due to error: ', (event.target as IDBRequest).error);
	};
}

function getItem(url: string) {
	const tx: IDBTransaction = db.transaction(databaseName, 'readonly');
	const store: IDBObjectStore = tx.objectStore(databaseName);
	const request: IDBRequest = store.get(url);

	request.onsuccess = function () {
		console.log('Request successful');
		console.log(request.result);
	};

	request.onerror = function (event) {
		console.error('Request failed');
		console.dir(event);
	};
}

export async function getPlanetsFromLocal(url: string) {
	const item = getItem(url);
	console.log(`item: ${JSON.stringify(item)}`);
	return false;
}
