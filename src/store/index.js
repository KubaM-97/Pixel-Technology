import { createStore } from 'vuex'

import axios from 'axios'

export default createStore({
  state: {
    patients: [],
    medicines: [],
  },
  getters: {
    
  },
  mutations: {
    setPatients(state, patients){
      state.patients = patients
    },
    setMedicines(state, medicines){
      state.medicines = medicines
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