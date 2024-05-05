export const setLocalStorage = (name, items) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(name, JSON.stringify(items));
    } 
};

export const getLocalStorage = (name) => {
    if (typeof window !== 'undefined') {
        const data = localStorage.getItem(name);
        if (data) {
            return JSON.parse(data);
        } else {
            localStorage.setItem(name, JSON.stringify([]));
            return [];
        }
    } else {
        // Handle server-side or other non-browser environments
        return [];
    }

};