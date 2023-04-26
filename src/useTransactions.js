//custom Hook

import { useContext } from 'react';
import { ExpenseTrackerContext } from './context/context';
import { incomeCategories, expenseCategories, resetCategories } from './constants/categories';

//initially the entire account's expense and income are pre-set to 0
const useTransactions = (title) => {
    resetCategories();
    const { transactions } = useContext(ExpenseTrackerContext);
    const selectedTypeTransactions = transactions.filter((t) => t.type === title);
    //0 is initial value of acc
    const total = selectedTypeTransactions.reduce((acc, curVal) => acc += curVal.amount, 0);
    const categories = title === 'Income' ? incomeCategories : expenseCategories;

    console.log({ categories, total, selectedTypeTransactions })

    //populating the expense and income fields
    selectedTypeTransactions.forEach((t) => {
        const category = categories.find((c) => c.type === t.category)
        if (category)
            category.amount += t.amount;
    });

    //category-wise filtering the fields
    const filteredCategories = categories.filter((c) => c.amount > 0);

    //displaying the filtered categories
    const chartData = {
        datasets: [{
            data: filteredCategories.map((c) => c.amount),
            backgroundColor: filteredCategories.map((c) => c.color),
        }],
        labels: filteredCategories.map((c) => c.type),
    }

    return { filteredCategories,chartData, total };
}

export default useTransactions;


