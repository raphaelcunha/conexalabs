<template>
  <div>
    <Header>
      <Search :search="search"></Search>
    </Header>
    <List :companies="list" :loading="loading"></List>
  </div>
</template>

<script>
import api from '../services/api';
import store from '../services/store';
import Header from '../components/Header.vue';
import Search from '../components/Search.vue';
import List from '../components/List.vue';

export default {
  name: 'Home',
  data() {
    return {
      list: [],
      loading: false,
    };
  },
  components: {
    Header,
    Search,
    List,
  },
  async mounted() {
    this.list = store.all();
  },
  methods: {
    async search(submitEvent) {
      submitEvent.preventDefault();
      const cnpj = submitEvent.target.elements.cnpj.value;
      const result = await api.get(cnpj.replace(/\D/g, ''));
      store.set(result.data);
    },
  },
};
</script>

<style lang="sass" scoped>

</style>
