export function merge(collection_1:number[], collection_2:number[]): number[]{
    var combined: number[] = [];
    var index_1: number = 0;
    var index_2:number = 0;
    var length_1:number = collection_1.length;
    var length_2:number = collection_2.length;

    while(index_1 < length_1 || index_2 < length_2){
        var item_1 = collection_1[index_1];
        var item_2 = collection_2[index_2];

        if (item_1 !== undefined) {
            if (item_2 === undefined) {
                combined.push(item_1);
                index_1++;
            } else {
                if (item_1 <= item_2) {
                    combined.push(item_1);
                    index_1++;
                } else {
                    combined.push(item_2);
                    index_2++;
                }
            }
        } else {
            if (item_2 !== undefined) {
                combined.push(item_2);
                index_2++;
            }
        }
    }
    return combined;
}

var col_1: number[] = [4,5,6,9];
var col_2: number[] = [1,2,3,7];

console.log(merge(col_1,col_2))