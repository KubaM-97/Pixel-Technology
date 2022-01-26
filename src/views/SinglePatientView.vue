<template>
  <div class='card'>
    <div class='patient'>
      <div class='patientAvatar'>
        <img :src="getImgSrc()" :alt='`${patient.gender}avatar`' />        
      </div>
      <div class='personalData'>
        <span class='patientName'>
          <span class='personalDataLabel'>imię i nazwisko:</span>
          <span class='personalDataValue'>{{patient.name}} {{patient.lastName}}</span>
        </span>
        <span class='patientAge'>wiek: {{patient.age}}</span>
        <span class='patientGender'>płeć: {{defineGender(patient.gender)}}</span>
        <span class='patientPhoneNumber'>telefon: {{patient.phoneNumber}}</span>
        <span class='patientAdress'>{{patient.adress}}</span>
      </div>
    </div>
    <div class='medicines'>
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
</template>

<script>
import { useRoute } from 'vue-router'
export default {
    name: 'SinglePatientView',
    setup(){
      const route = useRoute();
      const patient = JSON.parse(route.params.patient);
      const medicines = JSON.parse(route.params.medicines);

      function defineGender(gender) {
        return gender === 'male' ? 'mężczyzna' : 'kobieta';
      }

      function getImgSrc() {
        return require(`../assets/images/${patient.gender}Avatar.png`);
      }

      function checkRating(strength, n) {
        return strength - n >= 0;
      }

      return {
        route,
        patient,
        medicines,
        defineGender,
        getImgSrc,
        checkRating,
      }
    }
}
</script>

<style scoped>
.card {
  margin-top: 100px;
  padding: 20px;
  background: linear-gradient(311deg, rgba(2,0,36,1) 0%, rgba(111,111,204,1) 17%, rgba(0,212,255,1) 100%);
  border: 4px solid rgb(3, 207, 3);
  border-radius: 20px;
}
.patient {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.patientAvatar img {
  display: flex;
  align-self: center;
}
.patientAvatar img {
  width: 180px;
  height: 180px;
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
  font-size: .75rem;
}
.medicineExpDate {
  margin-left: 30px;
  font-size: .7rem;
}
.medicineStrength {
  display: flex;
  justify-content: space-between;
  font-size: .7rem;
}
.rating {
  filter: grayscale(100%);
  display: inline-flex;
  flex-wrap: nowrap;
}
.rating-active {
  color: white;
  filter: grayscale(0%)
}
.rating img{
  width: 40px;
  height: 20px;
}
</style>