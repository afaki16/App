<template>
    <v-card title="Employees" flat>
    <v-row class="align-center mb-4">
      <!-- Arama Kutusu -->
      <v-col cols="6">
        <v-text-field
          v-model="search"
          label="Search"
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
          hide-details
          single-line
        ></v-text-field>
      </v-col>

      <!-- Employee Create Butonu -->
      <v-col cols="6" class="text-right">
        <v-btn color="primary" @click="goToCreateEmployee">
          Create New Employee
        </v-btn>
      </v-col>
    </v-row>

    <!-- Data Table -->
    <v-data-table
      :headers="headers"
      :items="employees"
      :search="search"
      class="data-table"
    ></v-data-table>
  </v-card>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  
  const headers = [
    { title: 'Id', key: 'id' },
    { title: 'Name', key: 'name' },
    { title: 'Surname', key: 'surname' },
    { title: 'TC', key: 'tc' }
  ]
  
  const employees = ref([])
  const search = ref('')
  const router = useRouter()
  
  const fetchEmployees = async () => {
    try {
      const response = await fetch(`/api/Employee`)
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json(); 
      employees.value = data;
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  }
  const goToCreateEmployee = () => {
  router.push('/employee/create')
}
  onMounted(fetchEmployees)
  </script>
  
 
  