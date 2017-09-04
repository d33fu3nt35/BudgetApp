/**
 * Created by daniel on 9/3/17.
 */

var budgetController = (function () {

    var x = 23;

    var add = function (a) {
        return x + a;
    }

    return {
        publicTest: function (b) {
            return add(b)
        }
    }

})();



var UIController = (function () {

    // Some code

})();



var Controller = (function (budgetCtrl, UICtrl) {

    var z = budgetCtrl.publicTest(5);

    return {
        anotherPublicTest: function () {
            console.log(z);
        }
    }

})(budgetController, UIController);