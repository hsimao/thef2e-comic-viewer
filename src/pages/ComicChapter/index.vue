<script>
import ArrowButton from '@/components/ArrowButton'
import ImageArea from '@/components/ImageArea'
import ChapterThumb from '@/components/ChapterThumb'

function getPageRoute(id, cid) {
  return {
    name: 'ComicChapter',
    id: id,
    cid: cid
  }
}

export default {
  name: 'comicChapter',
  data() {
    return {
      page: null,
      pages: [],
      nextPage: null,
      prevPage: null,
      currentPage: null
    }
  },
  components: {
    ArrowButton,
    ImageArea,
    ChapterThumb
  },
  methods: {
    nextHandler() {
      if (this.page < this.pages.length - 1) {
        this.page++
      }
    },
    prevHandler() {
      if (this.page > 0) {
        this.page--
      }
    }
  },
  computed: {
    src() {
      return this.pages[this.page]
    }
  },
  mounted() {
    // 頁數id 資料
    // 漫畫1 101~110
    // 漫畫2 201~210
    // 漫畫3 301~310

    // 處理沒有的頁數id
    // 小於101或者大於110 將不處理
    // 取最前面數字,小於100,超過400 將不處理
    this.currentPage = this.$route.params.cid * 1
    if (
      this.currentPage % 100 < 1 ||
      this.currentPage % 100 > 10 ||
      this.currentPage / 100 < 1 ||
      this.currentPage / 100 > 4
    ) {
      // 如果不在頁數範圍內，將導回首頁
      this.$router.replace({
        name: 'Comics'
      })
    } else {
      this.pages = [
        '/static/images/p1.jpg',
        '/static/images/p2.jpg',
        '/static/images/p3.jpg',
        '/static/images/p4.jpg',
        '/static/images/p5.jpg',
        '/static/images/p6.jpg',
        '/static/images/p7.jpg',
        '/static/images/p8.jpg',
        '/static/images/p9.jpg'
      ]
      this.page = 1
      this.nextPage = getPageRoute(this.$route.params.id, this.currentPage + 1)
      this.prevPage = getPageRoute(this.$route.params.id, this.currentPage - 1)
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="sass" src="./style.sass" scoped></style>
