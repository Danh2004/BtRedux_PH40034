import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { View, FlatList } from 'react-native';
import { Text, Button, TextInput, Card } from 'react-native-paper';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  padding: 16px;
  background-color: #f5f5f5;
`;

const StyledTextInput = styled(TextInput)`
  margin-bottom: 12px;
`;

const StyledCard = styled(Card)`
  margin-bottom: 12px;
`;

const HomeScreen1 = ({ navigation }) => {
  const expenses = useSelector(state => state.expenses.expenses);
  const [search, setSearch] = useState('');
  const filteredExpenses = expenses.filter(expense => expense.title.includes(search));

  const totalIncome = expenses.filter(expense => expense.type === 'income').reduce((sum, expense) => sum + expense.amount, 0);
  const totalExpense = expenses.filter(expense => expense.type === 'expense').reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <Container>
      <Text variant="headlineSmall">Total Income: {totalIncome}</Text>
      <Text variant="headlineSmall">Total Expense: {totalExpense}</Text>
      <StyledTextInput
        label="Search by title"
        value={search}
        onChangeText={setSearch}
      />
      <Button mode="contained" onPress={() => navigation.navigate('AddExpense')}>Add Expense</Button>
      <FlatList
        data={filteredExpenses}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <StyledCard>
            <Card.Content>
              <Text variant="titleMedium">{item.title}</Text>
              <Text>{item.description}</Text>
              <Text>{item.date}</Text>
              <Text>{item.type}</Text>
              <Text>{item.amount}</Text>
            </Card.Content>
          </StyledCard>
        )}
      />
    </Container>
  );
};

export default HomeScreen1;
