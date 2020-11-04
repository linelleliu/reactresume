import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">

      <div class="pageContainer">
        <div class="grid">
          <div class="leftGrid">

            <div class="backgroundColor skillTitle card">
              <div class="name">
                <h2>LINELLE LIU</h2>
              </div>

              <div class="container">
                <p><i class="fa fa-briefcase fa-fw columns"></i>Front End Developer</p>
                <p><i class="fa fa-home fa-fw columns"></i>Milwaukee</p>
                <p><i class="fa fa-envelope fa-fw columns"></i>linelle.liu@gmail.com</p>
                <p><i class="fa fa-linkedin fa-fw columns"></i><a href="https://www.linkedin.com/in/linelleliu/">linkedin.com/in/linelleliu</a></p>
                <p><i class="fa fa-github fa-fw columns"></i><a href="https://github.com/linelleliu?tab=repositories">github.com/linelleliu</a></p>
                <p><i class="fa fa-internet-explorer fa-fw columns"></i><a href="https://linelleliu.com">linelleliu.com</a></p>
                <hr />
                <p class="largeFont"><b><i class="fa fa-asterisk fa-fw columns"></i>TECHNICAL SKILLS</b></p>
                <p>•	HTML5 / CSS / JavaScript / React.js</p>
                <p>•	Node.js / AWS </p>
                <p>•	Database programming (MS SQL Server)</p>
                <p>•	UI/UX </p>
                <p>•	Adobe XD/ Photoshop/ Figma</p>
                <p>•	Microsoft Office</p>
                <p>•	Google Apps / Slack / Trello</p>
                <hr />

                <p class="largeFont"><b><i class="fa fa-asterisk fa-fw columns"></i>SOFT SKILLS</b></p>
                <p>•	Adaptable and flexible</p>
                <p>•	Analytical and detailed oriented</p>
                <p>•	Critical thinker with a willingness to learn</p>
                <p>•	Proven ability to work with people at all levels of an organization</p>
                <hr />

                <p class="largeFont"><b><i class="fa fa-globe fa-fw columns"></i>LANGUAGES</b></p>
                <p>•	Vietnamese </p>
                <p>•	Chinese</p>
                <p>•	English</p>
                <br />
              </div>
            </div>
            <br />
          </div>


          <div class="rightGrid">

            <div class="container card backgroundColor">
              <h2 class="skillTitle"><i class="fa fa-suitcase fa-fw columns extraLargeFont"></i>EXPERIENCE</h2>
              <div class="container1">
                <h5 class="experienceTitle"><b>SMALLNEIGHBORHOOD • FRONT END DEVELOPER</b></h5>
                <h6 class="textTeal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>June 2020 - <span class="w3-tag w3-teal w3-round">Current</span></h6>
                <p>•	Designed and built UI in React for SmallNeighborhood.com – An online ordering platform in Milwaukee.</p>
                <p>•	Developed 15+ clients’ websites using open source libraries such as reactstrap and Material-UI.</p>
                <p>•	Redesigned Business dashboard from a hybrid mobile app to a progressive web app.</p>
                <p>•  Discussed with stakeholders to get feedback on our products to improve the user experience.</p>
                <p>•  Optimized SmallNeighborhood platform and clients’ websites for SEO.</p>
                <p>•  Created reusable responsive React components for business ordering menus.</p>
                <hr />
              </div>
              <div class="container1">
                <h5 class="experienceTitle"><b>POLICYBOT.IO FRONT END DEVELOPER</b></h5>
                <h6 class="textTeal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>March 2020 - July 2020</h6>
                <p>•	Designed landing page for policybot.io a policy data analytics tool from open source governments.</p>
                <hr />
              </div>
              <div class="container1">
                <h5 class="experienceTitle"><b>I.C.STARS |* MILWAUKEE • INTERN • SOFTWARE DEVELOPER</b></h5>
                <h6 class="textTeal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>March 2020 - June 2020</h6>
                <p>•	Completed competitive and intensive technology and leadership program with 1000+ hours of training in 4 months.<br />
                  -	Immersive, hands-on, project-based learning.</p>
                <p>•	Developed MPS/Building2Learn app using HTML/CSS, JavaScript, React.js, Node.js, MySQL, and AWS.</p>
                <p>•	Collaborated with a team using agile development methodology; administered group tasks and managed team productivity in order to ensure successful execution of our projects.</p>
                <hr />
              </div>
              <div class="container1">
                <h5 class="experienceTitle"><b>SISTERS OF ST. FRANCIS OF ASSISI • CERTIFIED NURSING ASSISTANT • VOLUNTEER</b></h5>
                <h6 class="textTeal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>September 2016 - October 2019</h6>
                <p>•	Provided excellent assist and care for patients along with nurses.</p>
                <p>•	Raised money for the sisters by doing baked sales every Chr/istmas season.</p>
                <hr />
              </div>
              <div class="container1">
                <h5 class="experienceTitle"><b>AURORA SINAI MEDICAL CENTER • VOLUNTEER • DATA ENTRY</b></h5>
                <h6 class="textTeal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>September 2016 - December 2016</h6>
                <p>•	Followed guideline and entered patient information accurately into a database.</p>
                <p>•	Completed enter two years of data.</p>
                <hr />
              </div>
              <div class="container1">
                <h5 class="experienceTitle"><b>ALVERNO COLLEGE • BIOCHEMISTRY TUTOR</b></h5>
                <h6 class="textTeal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>September 2012 - May 2013</h6>
                <p>•	Able to success tutor students one on one.</p>
                <p>•	Researched and learned more about biochemistry when I'm able to teach.</p>
                <hr />
              </div>
            </div>

            <div class="container card backgroundColor">
              <h2 class="skillTitle"><i class="fa fa-certificate fa-fw columns extraLargeFont"></i>EDUCATION</h2>
              <div class="container1">
                <h5 class="experienceTitle"><b>UNIVERSITY OF WISCONSIN – MILWAUKEE • BIOMEDICAL SCIENCES – SONOGRAPHY</b></h5>
                <hr />
              </div>
              <div class="container1">
                <h5 class="experienceTitle"><b>ALVERNO COLLEGE • NURSING</b></h5>
                <hr />
              </div>
            </div>

          </div>
        </div>
      </div>

      <footer class="container footer">
        <p>Thank You</p>
      </footer>


    </div>
  );
}

export default App;
