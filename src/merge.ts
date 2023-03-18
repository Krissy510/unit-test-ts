export function merge(collection_1: readonly number[], collection_2: readonly number[]): number[] {
    const combined: number[] = [];
    let index_1 = 0;
    let index_2 = 0;
    const length_1 = collection_1.length;
    const length_2 = collection_2.length;

    for (let i = 0; i < length_1 + length_2; i++) {
        const item_1 = collection_1[index_1];
        const item_2 = collection_2[index_2];

        if (item_1 !== undefined && (item_2 === undefined || item_1 <= item_2)) {
            combined.push(item_1);
            index_1++;
        } else if (item_2 !== undefined) {
            combined.push(item_2);
            index_2++;
        }
    }

    return combined;
}

const col_1: readonly number[] = [4,5,6,9];
const col_2: readonly number[] = [1,2,3,7];

console.log(merge(col_1, col_2));
