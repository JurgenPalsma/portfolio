<template>
<div>
  <div id="wrapper" class="animate">
    <div class="container-fluid">
        <button type="button" class="btn btn-secondary" @click="linkTo('Home')">Back</button>
        <br/>        <br/>
        <h2>Modimo</h2>
        <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h4> In a few words... </h4>
              <p class="card-text">
                In this 3 year long student project, I’m leading (as Group Leader) a team of 7 developers and 3 marketers a platform that seeks to disrupt the way accommodation is managed. <br/> I mainly contribute to the project by managing teams, organising the product and deadlines, and by assuming the roles of WebOps Engineer, Data Analyst, and API Architect.
              </p>


                Tags:

                <div class="item-content-block tags">
                  <tag v-for="t in tags" :key="t.id" :tag=t> </tag>
                </div>

              </div>
          </div>
          <br/>
          <div class="card">
            <div class="card-body">

              <h5> Introduction </h5>
              <p class="card-text">
                One of the key aspects of studying at EPITECH is the EIP ("<i>Epitech Innovative Project</i>") - a group project which needs to be innovative and be related to IT. 
                This project lasts 3 years, from the B. Sc. final year (3rd year) to the M2 (5th year), and its goal is to have a polished and complete product ready for commercialisation at the end of your cursus, which you have effectively done from scratch. 
              </p>

              <p class="card-text">
                We started as an ambitious team of 14 developpers (we lost about half of our crew due since), with the ambition to revolutionalise the way we see and live our accomodations. We realised that one of France's biggest private sector - the real estate sector - was lagging behind in terms of digitalisation and innovation, despite contributing as much as 10% of the country's GDP.
                With that in mind, we began developping a platform that allows estate managers and caretakers to communicate more efficiently with their tenants, by digitalising their work.
                The main goal of the project is to <b>maximise efficiency of the workload linked to the management of estates</b> and rental services, whilst <b>increasing the comfort of the property's tenants</b>, in order to <b> increase the property's value </b>
              </p>

              <p class="card-text">
                In order to transform these environments, we propose diverse communication and optimisation tools such as a virtual billboard, a ticketing system, or a workload planning system for the caretakers.
              </p>

              <p class="card-text">
                We are currently launching our <b>Beta</b> (<a href="https://modimo.herokuapp.com/" target="_blank">check it out here</a>) and our looking for beta-tester. Make sure to contact me if you're interested!
              </p>
              <br/>
            </div>
          </div>

        <div class="card">
          <div class="card-body">
              <h5> Awards </h5>
              <div class="row">
              <div class="col">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Hacking Industry Camp - Prix Alsace Digitale 2</h5>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Winner of the <a target="_blank" href="http://www.epitech.eu/blogs/Piscine-Moonshot-2016-Innovation-Prospective-Disruption-1.html" >Moonshot Bootcamp 2016</a> </h5>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
              
        

        <div class="card">
        <div class="card-body">
          
          <h5> Contribution and skills gained </h5>

          <p class="card-text">
            One of the things I really fancy about this project is that it allowed me to learn and apply a lot of new skills. As a result, I often use it as a show-case of some of the techs and skills I use and/or I am learning.   
          </p>
          
          <br/>

<!--
          <h6> Management </h6>  
          <p class="card-text">
             This section will be written soon
          </p>

          <br/>
-->
          <div class="card">
          <div class="card-body">
          <h6> WebOps and Code Architecture </h6>
          <ul>  
            
            <li>
              <h6> Constructing an API </h6 >
              <div>
              <p class="card-text">
                As we might want to export our platform to other services and platforms, we have a Node API which serves as our backend. <br/>
                I am responsible for building the architecture of the API, and started out with very little to no knowledge about APIs and even less so about how to build one. <br/>
                As a result, I learned a lot and manage to: 

                <ul>
                  <li>
                    Research and implement different databases - I opted for a MongoDb NoSql database hosted on Mlab
                  </li>
                  <li>
                    Learn about authentification and develop an authorisation scheme with JWT
                  </li>
                  <li>
                    Construct an API with a somewhat complex hierarchy - our users are seperated in different <i>residences</i> and all have different <i>permissions and priviledges</i> when accessing our API
                  </li>
                  <li>
                    Learn and implement web sockets with Socket.io 
                  </li>
                  <li>
                    Learn and implement templated email sending, first with MailChimp, then with SendGrid 
                  </li>
                </ul>
              </p>
              </div>
            </li>
            <br/> <br/>
            <li>
              <h6> Cloud hosting and Continuous Integration </h6 >
              <div>
              <p class="card-text">
                In order to launch our beta, I managed to: 
                <ul>
                  <li>
                    Host our projects - a Vue.js single page app and the Node API - on Heroku 
                  </li>
                  <li>
                    Develop a mini continuous integration system with Github which automates deployment on peer-reviewed PRs 
                  </li>
                  <li>
                    Add some bots with Zapier to remind devs to review PRs, to warn everyone if a project crashes, and to announce new deployements
                  </li>
                </ul>
              </p>
              </div>
            </li>
          </ul>
          </div>
          </div>

          <br/> 
          <div class="card">
          <div class="card-body">
          <h6> Analytics </h6>  
          <p class="card-text">
            One of my favorite aspects about web development and products is the abudance of <i>data and analytics</i> it can provide. Since we want to optimise the way estates are managed, we must work with a <i>data driven</i> approach.
            <br/>
            We also want to offer managers and caretakers the full digital experience - so  we propose data-driven reports to them. To allow this, I used several tools to measure different KPIs and trends in the use of our platform.
          </p>

              <ul>
              <li>
              <h6> Constructing Reports and Dashboards</h6 >
              <div>
              <p class="card-text">
                I chose the Google Stack (mainly) to yield our analytics, as a result, I:

                <ul>
                  <li>
                    Implemented a system of tags and triggers with Google Tag Manager, using the GTM datalayer for our custom values (for example, which estate the user lives in) as well as the classic html triggers
                  </li>
                  <li>
                    Linked our GTM tags with Google Analytics
                  </li>
                  <li>
                    Used GTM and GA to generate some dashboards with Google Data Studio.
                  </li>
                </ul>

                An example dashboard I made (rather for us than for the clients) is used to visualise how users interact with our different apps and features. In our beta, we only have released some polished features, but we left some "coming soons" and teasers to see if users would click on them. 
                We can see with this dashboard for exampe how many users click on each teasers, distinguished by their residences/estates, so we can focus on the apps that generate the most attention in each estate distinctively. 
              </p>
              </div>
              </li>

              <br/>
              <li>
              <h6> Other Analytics </h6 >
              <div>
              <p class="card-text">
                Another great tool I put into place is Hotjar. It allows us to generate heatmaps and recordings of the users as they use the product in order to analyse and understand their behaviour so that we can fine-tune any problems or dents in their road.
              </p>
              </div> 
              </li>
              </ul>
          </div>
          </div>

<br/> 
          <div class="card">
          <div class="card-body">
          <h6> Web App development </h6>  
          <p class="card-text">
            In addition to the aforementioned work, I also occasionnaly work on our "front-end" of the platform , the web app itself, using the Vue.js library. <br/>
            I implemented a realtime chat interface using Socket.io and work mostly on some UX aspects of the website such as bug fixing, small improvements and optimisations, code reviews, and I help on some back-end work when the front-end developers need help using the API.
            <br/>
          </p>
          </div>
          </div>

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
  name: "Modimo",
  data() {
    return {
    };
  },

  computed: {
    tags: function() {
      let tgs = []
      Object.keys(Projects).forEach(function(p) {
        if (Projects[p].name == 'Modimo') {
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
    linkTo: function(path) {
      this.$router.push({ name: path });
    }
  },
  components:{'tag': Tag},
};
</script>

<style scoped>
body {
  background: #f9f9f9;
}
#wrapper {
  padding: 90px 15px;
}
.navbar-expand-lg .navbar-nav.side-nav {
  flex-direction: column;
}
.card {
  margin-bottom: 15px;
  border-radius: 0;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
}
.card-clickable:hover {
  background-color: rgba(56, 56, 56, 0.1);
}
.header-top {
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
}
.leftmenutrigger {
  display: none;
}
@media (min-width: 992px) {
  .leftmenutrigger {
    display: block;
    display: block;
    margin: 7px 20px 4px 0;
    cursor: pointer;
  }
  #wrapper {
    padding: 90px 15px 15px 15px;
  }
  .navbar-nav.side-nav.open {
    left: 0;
  }
  .navbar-nav.side-nav {
    background: #585f66;
    box-shadow: 2px 1px 2px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 56px;
    flex-direction: column !important;
    left: -220px;
    width: 200px;
    overflow-y: auto;
    bottom: 0;
    overflow-x: hidden;
    padding-bottom: 40px;
  }
}
.animate {
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.card-tech-icon {
   font-size: 0.5rem;
}

.tags a{background: #6780af46;; padding:10px; color:black; display:inline-block; font-size:11px; line-height:11px; border-radius:2px; margin-bottom:5px; margin-right:2px; text-decoration:none;}
.tags a:hover{background-color:#fafafa;}
</style>
