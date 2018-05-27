<template>
<div>
  <div id="wrapper" class="animate">
    <div class="container-fluid">
        <button type="button" class="btn btn-secondary" @click="linkTo('Home')">Back</button>
        <br/>        <br/>
        <h2>Vue.js</h2>
        <div class="row">
        <div class="col">
            <div class="card">
                <div class="card-body">
                    <p class="card-text">
                        This tag appears in the following works and projects: 
                        <div  v-for="tfam in this.$parent.tags">
                            <div v-for="t in tfam.T" v-if="'/portfolio/tags/' + $route.params.name === t.link" >
                                <div v-for="project in t.projects">
                                    <a :href=project.link> {{project.name}} </a> 
                                </div>
                            </div>
                        </div>        
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'tagvue-vuejs',
  data () {
    return {
    }
  },
    methods: {
    linkTo: function(path){
      this.$router.push({name: path})
    }
  },
}
</script>

<style scoped>
body{background:#f9f9f9;}
#wrapper{padding:90px 15px;}
.navbar-expand-lg .navbar-nav.side-nav{flex-direction: column;}
.card{margin-bottom: 15px; border-radius:0; box-shadow: 0 3px 5px rgba(0,0,0,.1); }
.card-clickable:hover { 
    background-color: rgba(56, 56, 56, 0.1);
}
.header-top{box-shadow: 0 3px 5px rgba(0,0,0,.1)}
.leftmenutrigger{display: none}
@media(min-width:992px) {
.leftmenutrigger{display: block;display: block;margin: 7px 20px 4px 0;cursor: pointer;}
#wrapper{padding: 90px 15px 15px 15px; }
.navbar-nav.side-nav.open {left:0;}
.navbar-nav.side-nav{background: #585f66;box-shadow: 2px 1px 2px rgba(0,0,0,.1);position:fixed;top:56px;flex-direction: column!important;left:-220px;width:200px;overflow-y:auto;bottom:0;overflow-x:hidden;padding-bottom:40px}
}
.animate{-webkit-transition:all .3s ease-in-out;-moz-transition:all .3s ease-in-out;-o-transition:all .3s ease-in-out;-ms-transition:all .3s ease-in-out;transition:all .3s ease-in-out}
.tags a{background: #6780af46;; padding:10px; color:black; display:inline-block; font-size:11px; line-height:11px; border-radius:2px; margin-bottom:5px; margin-right:2px; text-decoration:none;}
.tags a:hover{background-color:#fafafa;}
</style>
