<template>
  <Header />
  <div class="container">
    <Balance :total="+total" />
    <IncomeExpensis :income="+income" :expense="+expense" />
    <TransactionList :transactions="transactions"  @transactionDeleted="handleDeleted"/>
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

import { ref, computed,onMounted } from "vue";
import { useToast } from "vue-toastification";

const toast = useToast()

const transactions =ref([])

onMounted(()=>{
    const savedTransaction = JSON.parse(localStorage.getItem('transactions'))
    if (savedTransaction) {
        transactions.value = savedTransaction
    }
})


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
  saveTransactionToLS()
  toast.success("Transaction Done")
}

const generateId = ()=>{
    return Math.floor(Math.random() *1000)
}


// delete transaction
const handleDeleted = (id) =>{
transactions.value = transactions.value.filter((trans)=> trans.id !== id)
saveTransactionToLS()
toast.success("Transaction Deleted")
} 


// save o local Storage
const saveTransactionToLS = () =>{
    localStorage.setItem('transactions',JSON.stringify(transactions.value))
}

</script>
