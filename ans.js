function migratoryBirds(arr, n) {
    let sorted = arr.sort();
    let ans = sorted[0];
    let maxOccur = 1,
        counter = 0;

    //finding Maximum frequency
    for (let i = 0; i < sorted.length; i++) {
        counter = (sorted[i] === sorted[i - 1]) ? counter + 1 : 0;
        if (counter > maxOccur) {
            ans = sorted[i];
            maxOccur = counter;
        }
    }

    console.log("Maximun Occurance="+ans);

    arr = arr.sort()
    arr = arr.reverse()
    var hash = new Map();
    for (var i = 0; i < n; i++) {
        if (hash.has(arr[i]))
            hash.set(arr[i], hash.get(arr[i]) + 1)
        else
            hash.set(arr[i], 1);
    }


    // find the min frequency
    var min_count = n + 1, res = -1;

    hash.forEach((value, key) => {

        if (min_count >= value) {
            res = key;
            min_count = value;
        }
    });

    console.log("Minimum Occurance="+ res);
}

migratoryBirds([4, 6, 4, 2, 2, 4], 6)