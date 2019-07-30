<template>
  <div>
    <Header>
      <Search :search="search" :loading="loading"></Search>
    </Header>
    <List :companies="list"></List>
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
  mounted() {
    this.list = store.all();
  },

  methods: {
    async search({ cnpj }) {
      try {
        this.loading = true;
        const result = await api.get(cnpj);
        store.set(result.data);
        this.list = store.all();
        this.$toasted.show('Cadastrado com sucesso o CNPJ!', {
          theme: 'outline',
          type: 'success',
          duration: 5000,
        });
      } catch (e) {
        this.$toasted.show('Ocorreu algum error ao buscar o CNPJ', {
          theme: 'outline',
          type: 'error',
          duration: 5000,
        });
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
