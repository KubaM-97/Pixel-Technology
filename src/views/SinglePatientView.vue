<template>
  <div class='container'>

    <div class='loader' v-if='isLoading'>
      <Loader/>
    </div>

    <div class='card' v-else>
      <div class='patient' v-if="patient">
        <div class='patientAvatar'>
          <img :src="getImgSrc()" :alt='`${patient.gender}avatar`' />        
        </div>
        <div class='personalData'>
          <span class='patientName'>
            <span class='personalDataLabel'>imię i nazwisko: </span>
            <span class='personalDataValue'>{{patient.name}} {{patient.lastName}}</span>
          </span>
          <span class='patientAge'>wiek: {{patient.age}}</span>
          <span class='patientGender'>płeć: {{translateGender(patient.gender)}}</span>
          <span class='patientPhoneNumber'>telefon: {{patient.phoneNumber}}</span>
          <span class='patientAdress'>{{patient.adress}}</span>
        </div>
      </div>
      <div class='medicines' v-if="medicines">
        <div class='medicineData' v-for="medicine in medicines" :key="medicine.id">
          <p class='medicineLabel'>
            <span class='medicineName'> {{medicine.medicationName}} </span>
            <span class='medicineExpDate'> - data ważności {{medicine.expDate}} </span>
          </p>
          <div class="medicineStrength">Siła leku:
            <div v-for="n in 10" :key="n" class="rating" :class="{'rating-active': checkRating(medicine.strength, n)}"> 
              <img src="../assets/images/capsule.png" alt="capsule" />
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { computed, ref, } from 'vue';
import { useRoute } from 'vue-router'
import { useStore } from 'vuex';
import Loader from '../components/Loader.vue';
export default {
    name: 'SinglePatientView',
    components: {
      Loader,
    },
    setup(){

      const route = useRoute();
      const store = useStore();

      const allPatients = computed(()=>store.state.patients)
      const allMedicines = computed(()=>store.state.medicines)
      
      const patient = ref({});
      const patientMedicines = ref({})

      const isLoading = ref(false)

      if (!route?.params?.patient) {
        fetchData()
      } 
      else {
        patient.value = JSON.parse(route?.params?.patient)
        patientMedicines.value = JSON.parse(route?.params?.medicines)
      }

      async function fetchData() {
        await fetchPatients();
        await fetchMedicines();
        patient.value = allPatients.value.find( patient => patient.id === route.params.id)
        patientMedicines.value = allMedicines.value.filter( medicine => medicine.patientIds.includes(patient.value.id))
      }

      async function fetchPatients() {
        try {
          isLoading.value = true;
          await store.dispatch('fetchPatients')
        } catch (err) {
          console.error(err);
        } finally {
          isLoading.value = false;
        }
      }

      async function fetchMedicines() {
        try {
          isLoading.value = true;
          await store.dispatch('fetchMedicines')
        } catch (err) {
          console.error(err);
        } finally {
          isLoading.value = false;
        }
      }

      function translateGender(gender) {
        return gender === 'male' ? 'mężczyzna' : 'kobieta';
      }

      function getImgSrc() {
        return patient.value.gender ? require(`../assets/images/${patient.value.gender}Avatar.png`) : null;
      }

      function checkRating(strength, n) {
        return strength - n >= 0;
      }
      
      return {
        patient,
        medicines: patientMedicines,
        isLoading,
        translateGender,
        getImgSrc,
        checkRating,
      }
    }
}
</script>

<style scoped>
.container {
  margin-top: 100px;
  padding: 20px;
  background: linear-gradient(311deg, rgba(2,0,36,1) 0%, rgba(111,111,204,1) 17%, rgba(0,212,255,1) 100%);
  border: 4px solid rgb(3, 207, 3);
  border-radius: 20px;
  width: 60%;
}
.card{
  width: 90%;
  margin: auto;
}
.loader {
  width: 400px;
  height: 300px;
}
.patient {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.patientAvatar{
  width: 180px;
  height: 180px;
}
.patientAvatar img {
  display: flex;
  align-self: center;
  width: 100%;
  border: 7px solid black;
  border-radius: 20px;
}
.personalData {
  margin-left: 20px;
}
.personalData span {
  display: block;
  font-size: 1rem;
  text-align: left;
  text-transform: uppercase;
}
.medicines {}
.medicineData {
  text-align: center;
  margin: 12px 0;
}
.medicineLabel {
  display: flex;
  justify-content: space-between;
}
.medicineName {
  font-size: 1rem;
}
.medicineExpDate {
  margin-left: 30px;
  font-size: 1rem;
}
.medicineStrength {
  display: flex;
  justify-content: space-between;
  font-size: .9rem;
}
.rating {
  filter: grayscale(100%);
  display: inline-flex;
  flex-wrap: nowrap;
  width: 50px;
  height: 30px;
}
.rating-active {
  color: white;
  filter: grayscale(0%)
}
.rating img{
  width: 100%;
}
@media (max-width: 768px) {
  .container {
    margin-top: 30px;
    width: 100%;
  }
  .card {
    width: 100%;
  }
  .patient {
    flex-wrap: wrap;
  }
  .patientAvatar {
    margin-bottom: 10px;
  }
  .personalData {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .personalData > span {
    display: flex;
    width: 100%;
  }
  .personalData span {
    font-size: .8rem;
  }
  .medicineName {
    font-size: .7rem;
  }
  .medicineExpDate {
    font-size: .7rem;
  }
  .medicineStrength {
    font-size: .7rem;
  }
  .rating {
    width: 31px;
    height: 20px;
  }
}
</style>