<template>
  <Header />
  <div class="container">
    <Balance :total="+total" />
    <IncomeExpensis :income="+income" :expense="+expense" />
    <TransactionList :transactions="transactions" />
    <AddTransaction  @transactinSubmitted="handleTransaction"/>
  </div>
</template>

<!-- script -->
<script setup>
import Header from "./components/Header.vue";
import Balance from "./components/Balance.vue";
import IncomeExpensis from "./components/IncomeExpensis.vue";
import TransactionList from "./components/TransactionList.vue";
import AddTransaction from "./components/AddTransaction.vue";

import { ref, computed } from "vue";
import { useToast } from "vue-toastification";

const toast = useToast()

const transactions = ref([
  { id: 1, text: "task 1", amount: -20 },
  { id: 2, text: "task 2", amount: 20 },
  { id: 3, text: "task 3", amount: 30 },
]);

// Get total
const total = computed(() => {
  return transactions.value.reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0);
});

// Get income
const income = computed(() => {
  return transactions.value
    .filter((transactions) => transactions.amount > 0)
    .reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0)
    .toFixed(2);
});

// Get expense
const expense = computed(() => {
  return transactions.value
    .filter((transactions) => transactions.amount < 0)
    .reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0)
    .toFixed(2);
});


// add transaction

const handleTransaction = (transactionData) =>{
  transactions.value.push({id:generateId, text:transactionData.text,amount:transactionData.amount})
  toast.success("Transaction Done")
}

const generateId = ()=>{
    return Math.floor(Math.random() *1000)
}
</script>
