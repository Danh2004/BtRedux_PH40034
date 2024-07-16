import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { addExpense } from '../redux/slices/expensesSlice';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  padding: 16px;
  background-color: #f5f5f5;
`;

const StyledTextInput = styled(TextInput)`
  margin-bottom: 12px;
`;

const AddExpenseScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('expense');
  const [amount, setAmount] = useState('');
  const dispatch = useDispatch();

  const handleAddExpense = () => {
    dispatch(addExpense({
      id: uuidv4(),
      title,
      description,
      date,
      type,
      amount: parseFloat(amount),
    }));
    navigation.goBack();
  };

  return (
    <Container>
      <StyledTextInput
        label="Title"
        value={title}
        onChangeText={setTitle}
      />
      <StyledTextInput
        label="Description"
        value={description}
        onChangeText={setDescription}
      />
      <StyledTextInput
        label="Date"
        value={date}
        onChangeText={setDate}
      />
      <StyledTextInput
        label="Type (income/expense)"
        value={type}
        onChangeText={setType}
      />
      <StyledTextInput
        label="Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <Button mode="contained" onPress={handleAddExpense}>Add Expense</Button>
    </Container>
  );
};

export default AddExpenseScreen;
