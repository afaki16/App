<template>
    <v-card title="Employees of Pays" flat>
  
      <v-data-table
        :headers="headers"
        :items="employees"
        :search="search"
        class="data-table"
      ></v-data-table>
      <template v-slot:[`item.date`] = "{ value }">
        <p v-text="formattingDate(value)"></p>
      </template>
    </v-card>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import moment from "moment/moment";
  
  const headers = [
    { title: 'TC', key: 'tc' },
    { title: 'Name', key: 'name' },
    { title: 'Surname', key: 'surname' },
    { title: 'SalaryType', key: 'salaryType' },
    { title: 'Salary', key: 'salary' },
    { title: 'Date', key: 'date' },
  ]
  
  const employees = ref([])
  const search = ref('')
  
  const fetchEmployees = async () => {
    try {
      const response = await fetch(`/api/Pay/GetAllEmployeePays`)
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json(); 
      employees.value = data;
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  }
  
  function formattingDate(value){
    return value != null ? moment(value).format('DD/MM/YYYY - HH:mm:ss') : ''
  }
  onMounted(fetchEmployees)
  </script>
  
 
  