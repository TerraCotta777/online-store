import { toast } from "../libs/toast";

export const alertSuccess = (message: string) => {
    message && toast(`${message}`, { type: 'success' })
    // !message &&  toast(`${message}`, { type: 'success' })
};