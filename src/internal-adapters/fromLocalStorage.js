export function fromLocalStorage(storageKey, fallbackValue) {

    const storedValue = localStorage.getItem(storageKey);

    if (storedValue !== 'undefined' && storedValue !== null) {
        return typeof fallbackValue === 'object' ? JSON.parse(storedValue) : storedValue;
    }

    return fallbackValue;
}

export default fromLocalStorage