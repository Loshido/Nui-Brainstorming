import { createStorage } from "unstorage";
import memoryDriver from "unstorage/drivers/memory";

export const storage = createStorage({
   driver: memoryDriver(),
});

type Callback<T> = () => Promise<T>
// Mise en cache
export async function cache<T>(key: string, ttl: number, callback: Callback<T>): Promise<T> {
    const data = await storage.getItem<[T, number]>(key);
    if(data && Date.now() < data[1]) {
        return data[0];
    } else {
        const payload =  await callback();
        await storage.setItem(key, [payload, Date.now() + ttl * 1000])
        return payload;
    }
}