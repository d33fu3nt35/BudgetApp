/**
 * Created by daniel on 9/3/17.
 */

// BUDGET CONTROLLER
var budgetController = (function () {


})();



// UI CONTROLLER
var UIController = (function () {

    // Some code

})();



// GLOBAL APPLICATION CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

    document.querySelector('.add__btn').addEventListener('click', function () {

        console.log('Button Was Clicked!')

    })

})(budgetController, UIController);