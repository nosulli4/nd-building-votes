exports.index = function(req, res, next) {
    res.render('index', { about: 'Welcome to Notre Dame!' , buildingName:
   'Notre Dame Buildings'});
  }
  
  exports.zoom = function(req, res, next) {
    res.render('zoom', {about:'ND Time'});
  }
  
  exports.map = function(req, res, next) {
    res.render('map', { markers: 'Markers will go here.'}); 
 }
  
  exports.nd = function(req, res, next) {
     res.render('index', { about: 'Welcome to Notre Dame!', buildingName:'Notre Dame Buildings'}); 
  }
  
  exports.debart = function(req, res, next) {
     console.log("Clicked on Debart button")
     res.render('debart', { about: 'Debart has classes for every major\
     and terrible water.', buildingName:'Debart'});
  }
  
  exports.dome = function(req, res, next) {
     console.log("Clicked on Dome button")
     res.render('dome', { about: 'The Dome is the heart of campus.' , buildingName:'Dome'}); 
  }
  
  exports.fitzCushing = function(req, res, next) {
     console.log("Clicked on Fitzpatrick-Cushing button")
     res.render('fitzCushing', { about: 'Fitzpatrick-Cushing looks like one building but it is two separate buildings conjoined!' , buildingName:'Fitzpatrick-Cushing'}); 
  }
  
  exports.stinRem = function(req, res, next) {
     res.render('stinRem', { about: 'Stinson-Remick is the newer of the Engineering Buildings' , animal_name:'Stinson-Remick'}); 
  }
  
  