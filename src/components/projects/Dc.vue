<template>
<div>
  <div id="wrapper" class="animate">
    <div class="container-fluid">
        <button type="button" class="btn btn-secondary" @click="linkTo('Home')">Back</button>
        <br/>        <br/>
        <h2>Testing Directional Changes with different Machine Learning Algorithms</h2>
        <div class="row">
        
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h4> In a few words... </h4>
              <p class="card-text">
                The goal of this project is to create <b>Trading Strategies</b> in the context of <b>Financial Forecasting and Automated Trading</b>. <br/>
                In order to do so, I will use a novel approach to record price movements, <a href="http://www.bracil.net/finance/DirectionalChanges/" target="_blank">Directional Changes</a>, and <b>Machine Learning Techniques</b>.
              </p>

              Tags:
              <div class="item-content-block tags">
                <tag v-for="t in tags" :key="t.id" v-bind:tag=t> </tag>
              </div>

            </div>
          </div>
          
          <br/>

          <div class="card">
            <div class="card-body">
              <p class="card-text">
                This project is my main focus at the moment, and will officially start in <i>June 2018.</i> <br/> 
                In the meantime, I'm preparing the project by researching financial forecasting (mostly technical analysis) and I'm following a couple of MOOCs to learn to use Tensorflow.
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
import Tag from '../Tag'
import Projects from '../../projects'
import TagList from '../../abs'

export default {
  name: 'Dc',
  data () {
    return {
    }
  },
  computed: {
    tags: function() {
      let tgs = []
      Object.keys(Projects).forEach(function(p) {
        if (Projects[p].name == 'Directional Changes') {
          Object.keys(TagList).forEach(function(t) {
            if (Projects[p].tags.includes(TagList[t].name)){
              tgs.push(TagList[t])
            } 
          });
        }
      });
      return tgs;
    }
  },
  methods: {
    linkTo: function(path){
      this.$router.push({name: path})
    }
  },
  components:{'tag': Tag},
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
