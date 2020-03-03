const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const clearBtn = document.querySelector('#btn-clear');
const submitBtn = document.querySelector('#btn-submit');
const expensesList = document.querySelector('#expenses-list');
const totalExpensesoutput = document.querySelector('#total-expenses');

let totalExpenses = 0;

const clear = () =>{
    reasonInput.value = '';
    amountInput.value = '';

}; 


submitBtn.addEventListener('click',() => {
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;

    if (enteredReason.trim().length <= 0 ||
        enteredAmount < 0 ||
        enteredAmount.trim().length <=0) 
        {
            return;
        }

        const newItem = document.createElement('ion-item');
        newItem.textContent = enteredReason + ':$' + enteredAmount;
        expensesList.appendChild(newItem);

        totalExpenses += +enteredAmount;
        totalExpensesoutput.textContent = totalExpenses;
        clear();
});

clearBtn.addEventListener('click', clear);