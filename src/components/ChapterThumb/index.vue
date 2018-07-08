<script>
export default {
  name: 'chapterThumb',
  props: {
    page: {
      type: Number,
      default: 0
    },
    pages: {
      type: Array,
      required: true
    },
    prevPage: {
      type: Object,
      default: null
    },
    nextPage: {
      type: Object,
      default: null
    }
  },
  methods: {
    clickHandler(index) {
      this.$emit('update:page', index)
    }
  },
  watch: {
    page() {
      // 等畫面更新完後才進行處理,避免抓到上一個li.active座標
      this.$nextTick(() => {
        // 防止觸發當下還未渲染出dom
        if (!this.$el) return false
        let target = this.$el.querySelector('li.active')
        if (!target) return false
        let ul = this.$el.querySelector('ul')
        ul.scrollLeft =
          target.offsetLeft -
          ul.offsetLeft -
          ul.offsetWidth / 2 +
          target.offsetWidth / 2
      })
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="sass" src="./style.sass" scoped></style>
