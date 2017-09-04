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

    var ctrlAddItem = function () {

        // 1. Get the field input data

        // 2. Add the item to the budget

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI

        console.log('Testing, Testing.');

    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function (event) {

        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }

    });

})(budgetController, UIController);




