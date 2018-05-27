<template>
    <a @click="linkTo()" >              
        <i :class=tag.icon></i>
        {{tag.name}}
    </a>
</template>

<script>

export default {
  props: ['tag'],
  name: 'tag',
  data () {
    return {
    }
  },
  methods: {
    linkTo: function() {
      this.$router.push({name: 'TagDetail', params:{'tag': this.$props.tag}})
    }
  },
}
</script>

<style scoped>
.tags a{background: #6780af46;; padding:10px; color:black; display:inline-block; font-size:11px; line-height:11px; border-radius:2px; margin-bottom:5px; margin-right:2px; text-decoration:none;}
.tags a:hover{background-color:#fafafa;}
</style>
