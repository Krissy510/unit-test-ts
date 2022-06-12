export function merge(collection_1:number[], collection_2:number[]): number[]{
    var combined: number[] = [];
    var index_1: number = 0;
    var index_2:number = 0;
    var length_1:number = collection_1.length;
    var length_2:number = collection_2.length;

    while(index_1 < length_1 || index_2 < length_2){
        if (!(index_1 < length_1)){ // If index_1 already exceed or equal to length_1
            var item_2 = collection_2[index_2];
            combined.push(item_2);
            index_2++;
        }
        else if(!(index_2 < length_2)){ // If index_2 already exceed or equal to length_2
            var item_1 = collection_2[index_1];
            combined.push(item_1);
            index_1++;
        }
        else{ // If both index did not reach their length yet

            var item_1 = collection_1[index_1];
            var item_2 = collection_2[index_2];

            if(item_1 > item_2){ // If item_2 is less than item_1
                combined.push(item_2);
                index_2++;
            }
            else{   // If item_1 is less than or equal to item_2
                combined.push(item_1);
                index_1++;
            }
        }
    }
    return combined;
}

var col_1: number[] = [];
var col_2: number[] = [];

console.log(merge(col_1,col_2))