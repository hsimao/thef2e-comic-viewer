<template>
  <div id="app">
    <PageHeader/>
    <transition name="fade" mode="out-in" appear>
      <router-view :key="$route.fullPath" />
    </transition>
    <PageFooter/>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
import PageFooter from '@/components/PageFooter'

export default {
  name: 'App',
  components: {
    PageFooter,
    PageHeader
  }
}
</script>

<style lang="sass" src="./assets/style/main.sass"></style>
