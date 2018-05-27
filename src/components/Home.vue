<template>
<div>
    
  <div id="wrapper" class="animate">
    
    <div class="container-fluid">
	<div class="row">
        <div class="profile-header-container">   
    		<div class="profile-header-img">
        <img class="img-circle" src="https://media.licdn.com/dms/image/C4E03AQG-7mPrM3iAiA/profile-displayphoto-shrink_200_200/0?e=1531958400&v=beta&t=Rv7nIMSUcn3Pgw_Wv_iItfi6Wy1fSCh1ag2cJPdW6Ls" />
        </div>
        <div class="profile-header-title"> Jurgen Palsma</div>
        <ul class="profile-header-social">
        <li> <a href="https://www.linkedin.com/in/jurgenpalsma/" target="_blank"> <i class=" fa fa-linkedin">   </i> </a> </li>
        <li> <a href="https://twitter.com/jurgn_" target="_blank"> <i class=" fa fa-twitter  ">   </i> </a> </li>
        <li> <a href="https://github.com/JurgenPalsma" target="_blank"> <i class=" fa fa-github  ">   </i> </a> </li>

        </ul>
        </div> 
	</div>
        
      <h2>Welcome</h2>
        <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <p class="card-text">
                Hi, welcome to my portfolio website. Here you will find my <a target="_blank" href="https://jurgenpalsma.github.io/portfolio/static/pdfs/jurgen-cv-en.pdf">CV</a>
                 as well as all current and past projects I have worked on. 
                <br/> <br/>
                I'm currently looking for a part time job or internship starting from September 2018.
                <br/> <br/>
                Feel free to contact me via
                <a href="https://www.linkedin.com/in/jurgenpalsma/" target="_blank"> Linkedin </a> or  
                <a href="mailto:jurgen.palsma@gmail.com">Email</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <br/>
        <h3>Current Projects</h3>
        <div class="row">
        <div class="col">
          <div class="card card-clickable" @click="linkTo('Dc')">
            <div class="card-body">
              <h5 class="card-title">Testing Directional Changes with Machine Learning Algorithms</h5>
              <h6 class="card-subtitle mb-2 text-muted">Msc Dissertation Project</h6>
              <p class="card-text">
                Generating Trading Strategies using Machine Learning  
              </p>
              <router-link to="Dc">Check it out !</router-link>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card card-clickable" @click="linkTo('Modimo')">
            <div class="card-body">
              <h5 class="card-title">Modimo</h5>
              <h6 class="card-subtitle mb-2 text-muted">Epitech Innovative Project</h6>
              <p class="card-text">
                My EPITECH end of study project. A platform that seeks to disrupt the way accommodation is managed. 
              </p>
              <br/>
              <router-link to="Modimo">Check it out!</router-link>
            </div>
          </div>
        </div>
        <div class="col"></div>
      </div>

      <br/>
      <h3>Search by tags</h3>
        <div class="row">
        <div class="col">
          <div class="card">
            
            <div class="card-body">
                <div v-for="(tags, theme) in filteredTags">
                  <h6>{{theme}}</h6>
                  <div class="item-content-block tags"> 
                    <tag v-for="t in tags" v-bind:key="t.id" :tag=t></tag>
                  </div>
                </div>
              
                </div>
            </div>
          </div>
        </div>


        <br/>
        <h3>Past Projects and works</h3>
        <div class="row">

        <div class="col">
          <div class="card card-clickable">
            <div class="card-body">
              <h5 class="card-title">KentChat</h5>
              <p class="card-text">
                A Python Chat and API running on App Engine  
              </p>
              <a href="https://github.com/JurgenPalsma/KentChat" target="_blank">Check it out !</a>
            </div>
          </div>
        </div>
        
        <div class="col">
          <div class="card card-clickable" @click="linkTo('Uni')">
            <div class="card-body">
              <h5 class="card-title">University research</h5>
              <p class="card-text">
                A list of interesting research documents I produced.  
              </p>
              <router-link to="Uni">Check it out!</router-link>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</div>
</template>

<script>
import Tag from './Tag'
import TagList from '../abs'

export default {
  name: 'Home',
  components:{'tag': Tag},
  data () {
    return {
    }
  },
  computed: {
    filteredTags: function() {
      let tgs = {}
      Object.keys(TagList).forEach(function(t) {
      if (!tgs[String(TagList[t].theme)]) {
        tgs[String(TagList[t].theme)] = []
      }
      tgs[String(TagList[t].theme)].push(TagList[t])
      });
      return tgs;
    }
  },
  methods: {
    linkTo: function(path){
      this.$router.push({name: path})
    }
  }
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



/**
 * Profile
 */
.profile-header-container{
    margin: 0 auto;
    text-align: center;
}

.profile-header-img {
    padding: 0px;
}

.profile-header-img > img.img-circle {
    width: 120px;
    height: 120px;
    border: 2px solid rgba(255, 255, 255, 0);
}

.profile-header-title {

}

.profile-header-social li {
	background: none repeat scroll 0 0 #B5B5B5;
	border: 2px solid #B5B5B5;
	-webkit-border-radius: 50%;
	-moz-border-radius: 50%;
	-o-border-radius: 50%;
	-ms-border-radius: 50%;
	border-radius: 50%;
	float: left;
	height: 36px;
	line-height: 36px;
	margin: 0 8px 0 0;
	padding: 0;
	text-align: center;
	width: 36px;
	transition: all 0.5s ease 0s;
	-moz-transition: all 0.5s ease 0s;
	-webkit-transition: all 0.5s ease 0s;
	-ms-transition: all 0.5s ease 0s;
	-o-transition: all 0.5s ease 0s;
}
.profile-header-social li:hover {
	transform: scale(1.15) rotate(360deg);
	-webkit-transform: scale(1.1) rotate(360deg);
	-moz-transform: scale(1.1) rotate(360deg);
	-ms-transform: scale(1.1) rotate(360deg);
	-o-transform: scale(1.1) rotate(360deg);
}
.profile-header-social li a {
	color: #EDEFF1;
}
.profile-header-social li:hover {
	border: 2px solid #2c3e50;
	background: #2c3e50;
}
.profile-header-social li a i {
	font-size: 16px;
	margin: 0 0 0 5px;
	color: #EDEFF1 !important;
}

.profile-header-social {
	font-size: 13px;
	list-style-type: none;
	margin-left: 0;
	padding-left: 0;
	margin-top: 5px;
	color: #7F8C8D;
}

.profile-header {
    margin-top: 1px;
}

.img-circle {
  border-radius: 100%;
}

.tags a{background: #6780af46; padding:10px; color:black; display:inline-block; font-size:11px; line-height:11px; border-radius:2px; margin-bottom:5px; margin-right:2px; text-decoration:none;}
.tags a:hover{background: #5a78af85}

</style>
