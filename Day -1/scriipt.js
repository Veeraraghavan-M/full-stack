(function() {
    var numbers = [10, 20, 30, 40, 50];
    var sum = 0;

    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    var result = (sum - 40) * 30;
    console.log("External JS Result:", result);
})();
