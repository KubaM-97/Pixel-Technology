import { useStore } from "vuex";

export default function fetchingDataMixin(){

    const store = useStore();

    async function fetchData() {
      await fetchPatients();
      await fetchMedicines();
    }

    async function fetchPatients() {
      try {
        await store.dispatch('fetchPatients')
      } catch (err) {
        console.error(err);
      }
    }

    async function fetchMedicines() {
      try {
        await store.dispatch('fetchMedicines')
      } catch (err) {
        console.error(err);
      }
    }
    

    return{
      fetchData,
    }

}