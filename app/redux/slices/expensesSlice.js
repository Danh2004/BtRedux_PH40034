import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  expenses: [],
};

const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.expenses.push(action.payload);
    },
    updateExpense: (state, action) => {
      const index = state.expenses.findIndex(expense => expense.id === action.payload.id);
      if (index !== -1) {
        state.expenses[index] = action.payload;
      }
    },
    deleteExpense: (state, action) => {
      state.expenses = state.expenses.filter(expense => expense.id !== action.payload.id);
    },
  },
});

export const { addExpense, updateExpense, deleteExpense } = expensesSlice.actions;
export default expensesSlice.reducer;
