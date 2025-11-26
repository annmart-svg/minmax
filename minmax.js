const arr = [7, 3, 15, -2, 0, 99, 12];

if (!arr || arr.length === 0) {
    console.log("Масив порожній");
} else {
    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    }

    console.log(`Min = ${min}, Max = ${max}`);
}