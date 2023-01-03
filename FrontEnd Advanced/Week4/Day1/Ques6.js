function max() {
    var ar = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ar[_i] = arguments[_i];
    }
    var s = 0;
    for (var _a = 0, ar_1 = ar; _a < ar_1.length; _a++) {
        var n = ar_1[_a];
        if (s < n)
            s = n;
    }
    console.log("Maximum Value: " + s);
}
max(10, 20, 40, 50, 30, 90, 60, 150, 100);
