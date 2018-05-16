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
                Hi, welcome to my portfolio website
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
                Here is a nice p describing my m asters project. it should probs have the same length as the 
              </p>
              <router-link to="Dc">Check it out</router-link>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card card-clickable" @click="linkTo('Modimo')">
            <div class="card-body">
              <h5 class="card-title">Modimo</h5>
              <h6 class="card-subtitle mb-2 text-muted">Epitech Innovative Project</h6>
              <p class="card-text">
                Here is a nice p describing Modimo project. it should pr obs have the same length as the ohter cards. and say that its good
              </p>
              <router-link to="Modimo">Check it out</router-link>
            </div>
          </div>
        </div>
        <div class="col"></div>
      </div>

    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
    padding: 1px;
}

.profile-header-img > img.img-circle {
    width: 120px;
    height: 120px;
    border: 2px solid rgb(0, 0, 0);
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


</style>
