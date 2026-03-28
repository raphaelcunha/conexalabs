<template>
  <div class="home">
    <Navbar />
    <Hero />
    <Plans />
    <Services />
    <Benefits />
    <Coverage />
    <FAQ />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Hero from '@/components/Hero.vue';
import Plans from '@/components/Plans.vue';
import Services from '@/components/Services.vue';
import Benefits from '@/components/Benefits.vue';
import Coverage from '@/components/Coverage.vue';
import FAQ from '@/components/FAQ.vue';
import Contact from '@/components/Contact.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Hero,
    Plans,
    Services,
    Benefits,
    Coverage,
    FAQ,
    Contact,
    Footer,
  },
};
</script>
