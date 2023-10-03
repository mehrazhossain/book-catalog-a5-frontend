import { persistor } from "../main";

export const clearPersist = async (): Promise<void> => {
    await persistor.purge(); // Clear the root persist
};