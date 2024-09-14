<template>
    <v-card title="Pays" flat>
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
        <v-btn color="primary" @click="goToCreatePay">
          Create New Pay
        </v-btn>
      </v-col>
    </v-row>
      <v-data-table
        :headers="headers"
        :items="pays"
        :search="search"
        class="data-table"
      ></v-data-table>
      <template v-slot:[`item.date`]="{ value }">
  <td>{{ formattingDate(value) }}</td>
</template>
<template v-slot:[`item.salaryType`]="{ item }">
  <td>{{ enumValues[item.salaryType].text }}</td>
</template>
    </v-card>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
   import { useRouter } from 'vue-router'
   
   const router = useRouter()

  const headers = [
    { title: 'Id', key: 'id' },
    { title: 'Salary', key: 'salary' },
    { title: 'SalaryType', key: 'salaryType' },
    { title: 'EmployeeId', key: 'employeeId' },
    { title: 'Date', key: 'date' }
  ]
  
  const pays = ref([])
  const search = ref('')
  const enumValues = {
    0:{text:'Sabit Maaş'},
    1:{text:'Günlük Ücret'},
    2:{text:'Sabit Maaş + Fazla Mesai'},
    
  }


  const fetchPays = async () => {
    try {
      const response = await fetch(`/api/Pay`)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json(); 
      pays.value = data;
    } catch (error) {
      console.error('Error fetching pays:', error);
    }
  }

  const formattingDate = (value) => {
    debugger    
  return value != null ? moment(value).format('DD/MM/YYYY - HH:mm:ss') : ''
}
const goToCreatePay = () => {
  router.push('/pay/create')
}
  onMounted(fetchPays)
  </script>
  
 
  