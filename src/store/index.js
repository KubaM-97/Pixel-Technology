import { createStore } from 'vuex'

import axios from 'axios'

export default createStore({
  state: {
    patients: [],
    medicines: [],
    minPatientAge: null,
    maxPatientAge: null,
    minMedicineStrength: null,
  },
  getters: {
    
    filteredPatients: (state) => () => {
  
        const { patients, medicines, minPatientAge, maxPatientAge, minMedicineStrength } = state;

        let filteredPatients = patients.filter(patient => patient.age > minPatientAge)

        if(maxPatientAge) filteredPatients = filteredPatients.filter(patient => patient.age < maxPatientAge)

        if(minMedicineStrength) filteredPatients = filteredPatients.filter(patient => medicines
            .filter(medicine => medicine.strength > minMedicineStrength)
            .some(medicine => medicine.patientIds.includes(patient.id)));
        
        return filteredPatients;
  
    }
  
  },
  mutations: {
    setPatients(state, patients){
      state.patients = patients
    },
    setMedicines(state, medicines){
      state.medicines = medicines
    },
    setMinPatientAge(state, minPatientAge){
      state.minPatientAge = minPatientAge
    },
    setMaxPatientAge(state, maxPatientAge){
      state.maxPatientAge = maxPatientAge
    },
    setMinMedicineStrength(state, minMedicineStrength){
      state.minMedicineStrength = minMedicineStrength
    },
  },
  actions: {
     fetchPatients: async ( {commit} ) => {
      await axios.get("https://cerber.pixel.com.pl/api/patients")
      .then(res => commit('setPatients', res.data));
    },
    fetchMedicines: async ( {commit} ) => {
        await axios.get("https://cerber.pixel.com.pl/api/medicine")
      .then(res => commit('setMedicines', res.data));
    },
  },
})