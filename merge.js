function mergeSort(arr) {
    if (arr.length > 1) {
        let mid = Math.round(arr.length / 2);
        let left = arr.slice(0, mid);
        let right = arr.slice(mid);
        mergeSort(left);
        mergeSort(right);
        let i = 0, j = 0, k = 0;
        while (left.length > i && right.length > j) {
            if (left[i] <= right[j]) {
                arr[k] = left[i];
                i += 1;
            }
            else {
                arr[k] = right[j];
                j += 1;
            }
            k += 1
        }
        while (i < left.length) {
            arr[k] = left[i];
            i += 1;
            k += 1;
        }
        while (j < right.length) {
            arr[k] = right[j];
            j += 1;
            k += 1;
        }
    }
}
function takeAction() {
    let data = document.getElementById("data").value;
    let arr = data.split(",")
    arr = arr.map(function (x) {
        return parseInt(x, 10);
    })
    mergeSort(arr); arr = arr.toString();
    document.getElementById("result").textContent = arr;
    document.getElementById("data").value = "";
}
