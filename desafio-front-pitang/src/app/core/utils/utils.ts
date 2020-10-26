export class Utils {
    public static handleSessionStorage(sessionName: string, args: any) {
        let storage = !!sessionStorage.getItem(sessionName) ? JSON.parse(sessionStorage.getItem(sessionName)) : [];
        if (storage[0] !== args) {
            storage.splice(0, 0, args);
        }
        sessionStorage.setItem(sessionName, JSON.stringify(storage));
    }

    public static getSession(sessionName: string): any {
        const storage = sessionStorage.getItem(sessionName);
        if (!!storage) {
            return JSON.parse(storage);
        }
        return [];
    }

    public static getLast(sessionName: string): any {
        const storage = sessionStorage.getItem(sessionName);
        if (!!storage) {
            return JSON.parse(storage)[0];
        }
        return null;
    }
}