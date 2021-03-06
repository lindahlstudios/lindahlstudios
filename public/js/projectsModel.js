'use strict';

let $sourceHTML = $('#projects-template').html();
let $compiledTemplate = Handlebars.compile($sourceHTML);
var $newHTML = $($compiledTemplate({
  project: [
    {
      title: 'the loop network | website & app',
      url: `#`,
      img: `assets/imgs/mockup.png`,
      projectDescription: `currently under development - coming soon.`
    },
    {
      title: 'posy rae | website',
      url: `http://posyrae.com`,
      img: `assets/imgs/posyrae-mockup.png`,
      projectDescription: `we spearheaded a website redesign on squarespace for this very talented paper florist.`
    },
    {
      title: 'moving forward leadership | website',
      url: `http://movingforwardleadership.com`,
      img: `assets/imgs/movingforwardleadership-mockup.png`,
      projectDescription: `we designed and developed a new website with a clean, modern visual appearance and added functionality to store podcasts, show notes for podcasts and leadership articles linked in from medium.com.`
    },
    {
      title: 'fraction calculator | ios app',
      url: `https://itunes.apple.com/us/app/fraction-calculator-pro/id398107543`,
      img: `assets/imgs/app-mockup.png`,
      projectDescription: 'we designed and developed an ios app for calculating fractions.'
    }
  ]
}));
$('#projects-anchor').append($newHTML);

// TODO: pass in objects from JSON into the above function rather than manual coding it.

// (function(module) {
  // function Project (projects) {
  //   this.title = projects.title;
  //   this.url = projects.url;
  //   this.img = projects.img;
  //   this.projectDescription = projects.projectDescription;
  // }
  //
  // projects.all = [];
  //
  // Project.prototype.toHtml = function() {
  //   let sourceHTML = $('#projects-template').html();
  //   let compiledTemplate = Handlebars.compile(sourceHTML);
  //   return compiledTemplate(this);
  //   // $('#projects-anchor').append(compiledTemplate);
  // }
  //
  // rawData.forEach(function(projectObject) {
  //   projects.all.push(new Project(projectObject));
  // });
  //
  // projects.all.forEach(function(project){
  //   $('#projects-anchor').append(project.toHtml());
  // });
// };
