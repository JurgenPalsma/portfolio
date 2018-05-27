<template>
<div>
  <div id="wrapper" class="animate">
    <div class="container-fluid">
        <button type="button" class="btn btn-secondary" @click="linkTo('Home')">Back</button>
        <br/>        <br/>
        <h2>University Research</h2>
        <div class="row">
        
        <div class="col">
          <div class="card">
            <div class="card-body">
              <p class="card-text">
                Here you can find a list of research documents about Data Mining and Algorithms I produced. 
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
                <ul>
                    <li>
                        <a href="https://jurgenpalsma.github.io/portfolio/static/pdfs/decisiontrees.pdf" target="_blank"> Producing C4.5 decision trees to classify cars for insurance policies </a>
                    </li>
                    <li>
                        <a href="https://jurgenpalsma.github.io/portfolio/static/pdfs/variableimportance.pdf" target="_blank"> Researching measures of variable importance in Random Forests </a>
                    </li>
                    <li>
                        <a href="https://jurgenpalsma.github.io/portfolio/static/pdfs/rulediscovery.pdf" target="_blank"> Litterature review of Rule Discovery with Evolutionary Algoritms </a>
                    </li>
                    <li>
                        <a href="https://jurgenpalsma.github.io/portfolio/static/pdfs/learningfinance.pdf" target="_blank"> A short vulgarisation article about how Deep Learning and Big Data change Finance </a>
                    </li>
                </ul>
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
  name: 'Uni',
  data () {
    return {
    }
  },
  computed: {
    tags: function() {
      let tgs = []
      Object.keys(Projects).forEach(function(p) {
        if (Projects[p].name == 'University Research') {
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
