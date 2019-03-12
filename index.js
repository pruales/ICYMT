var dayProgress = setInterval(function() {
  
  // Get todays date and time
  var eod = moment().add(1, 'd').startOf('day');
  var now = moment();
  // Find the distance between now and the count down date
  var distance = eod.diff(now);
  var total = (24*60*60*1000);
  var percentage = 100 - (distance/total * 100);

  var majorMinor = percentage.toFixed(4).toString().split('.');
    
  // Output the result in an element with id="demo"
  document.getElementById("progress-day").innerHTML = majorMinor[0] + "<sup>."+majorMinor[1]+"%</sup>";
  // document.getElementById("progress-day-minor").innerHTML = majorMinor[1] + "%";
    
}, 100);

var weekProgress = setInterval(function() {

  // Get todays date and time
  var sow = moment().startOf('isoWeek');
  var eow = moment().add(1, 'w').startOf('isoWeek');
  var total = eow.diff(sow)
  var now = moment();
  var distance = eow.diff(now);

  var percentage = 100 - (distance/total * 100);

  var majorMinor = percentage.toFixed(4).toString().split('.');
    
  // Output the result in an element with id="demo"
  document.getElementById("progress-week").innerHTML = majorMinor[0] + "<sup>."+majorMinor[1]+"%</sup>";
  // document.getElementById("progress-day-minor").innerHTML = majorMinor[1] + "%";
    
}, 100);

var monthProgress = setInterval(function() {

  // Get todays date and time
  var som = moment().startOf('month');
  var eom = moment().add(1, 'M').startOf('month');
  var total = eom.diff(som);
  var now = moment();
  var distance = eom.diff(now);

  var percentage = 100 - (distance/total * 100);

  var majorMinor = percentage.toFixed(4).toString().split('.');
    
  // Output the result in an element with id="demo"
  document.getElementById("progress-month").innerHTML = majorMinor[0] + "<sup>."+majorMinor[1]+"%</sup>";
  // document.getElementById("progress-day-minor").innerHTML = majorMinor[1] + "%";
    
}, 100);

var yearProgress = setInterval(function() {

  // Get todays date and time
  var soy = moment().startOf('year');
  var eoy = moment().add(1, 'y').startOf('year');
  var total = eoy.diff(soy);
  var now = moment();
  var distance = eoy.diff(now);

  var percentage = 100 - (distance/total * 100);

  var majorMinor = percentage.toFixed(4).toString().split('.');
    
  // Output the result in an element with id="demo"
  document.getElementById("progress-year").innerHTML = majorMinor[0] + "<sup>."+majorMinor[1]+"%</sup>";
  // document.getElementById("progress-day-minor").innerHTML = majorMinor[1] + "%";
    
}, 100);
    