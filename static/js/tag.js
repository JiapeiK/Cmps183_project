var form = document.getElementById('form');

function add(){
var form = document.getElementById('form');
  var text = "";
  var schoolkey = "";
  var akey = "";
  var vkey = "";
  var rkey = "";
  var ckey = "";
  var trappedkey = "";
  var housekey = "";
  var stakey = "";
  var brikey = "";
  var boatkey = "";
  var waterkey = "";
  var hospkey = "";
  var latekey = "";
  var mount = "";
  var barkey = "";
  var promkey = "";
  var churchkey = "";
  var circuskey = "";
  var forestkey = "";
  var motherkey = "";
  var fatherkey = "";
  var grandkey = "";
  var sonkey = "";
  var daugkey = "";
  var wifekey = "";
  var huskey = "";
  var friendskey = "";
  var loverkey = "";
  var collkey = "";
  var auth = "";
  var fantas ="";
  var cele ="";
  var chas ="";
  var toil ="";
  var fly = "";
  var fall = "";
  if (school.style.backgroundColor == "red"){
      console.log("I got my school");
      schoolkey = "school ";
    }
        if (air.style.backgroundColor == "red"){
          console.log("I got the air");
          akey = "in the air";
        }
        if(vehicle.style.backgroundColor == "red"){
          console.log("car");
          vkey = "vehicle "
        }
        if(road.style.backgroundColor == "red"){
          console.log("road");
          rkey = "road ";
        }if(cave.style.backgroundColor == "red"){
          console.log("cave");
          ckey = "cave ";
        }if(trapped.style.backgroundColor == "red"){
          console.log("trapped someplace");
          trappedkey= "trapped someplace "

        }if(house.style.backgroundColor == "red"){
          console.log("house");
          housekey = "house ";
        }if(stair.style.backgroundColor == "red"){
          console.log("stairs");
          stakey = "stairs ";
        }if(bridge.style.backgroundColor == "red"){
          console.log("bridge");
          brikey = "bridge ";
        }if(boat.style.backgroundColor == "red"){
          console.log("boat");
          boatkey = "boat "
        }if(water.style.backgroundColor == "red"){
          console.log("under water");
          waterkey = "under water ";
        }if(hospital.style.backgroundColor == "red"){
          console.log("hospital");
          hospkey = "hosiptal "
        }if(mountains.style.backgroundColor == "red"){
          console.log("mounrains");
          mount = "mountains ";
        }if(bar.style.backgroundColor == "red"){
          console.log("barss");
          barkey = "bar ";
        }if(prom.style.backgroundColor == "red"){
          console.log("prom");
          promkey = "prom ";
        }if(church.style.backgroundColor == "red"){
          console.log("church");
          churchkey = "church ";
        }if(circus.style.backgroundColor == "red"){
          console.log("circus");
          circuskey = "circus ";
        }if(forest.style.backgroundColor == "red"){
          console.log("forest");
          forestkey = "forest ";
        }

        if(mother.style.backgroundColor == "red"){
          console.log("mother");
          motherkey = "mother ";
        }if(father.style.backgroundColor == "red"){
          console.log("father");
          fatherkey = "father ";
        }if(grandparents.style.backgroundColor == "red"){
          console.log("grandparents");
          grandkey = "grandparents ";
        }if(son.style.backgroundColor == "red"){
          console.log("son");
          sonkey = "son ";
        }if(daughter.style.backgroundColor == "red"){
          console.log("daughter");
          daugkey = "daughter ";
        }if(husband.style.backgroundColor == "red"){
          console.log("husband");
          huskey = "husband ";
        }if(wife.backgroundColor == "red"){
          console.log("wife");
          wifekey = "wife ";
        }if(friends.style.backgroundColor == "red"){
          console.log("friends");
          friendskey = "friends ";
        }if(lover.style.backgroundColor == "red"){
          console.log("lover");
          loverkey ="lover ";
        }if(colleagues.style.backgroundColor == "red"){
          console.log("colleagues");
          collkey = "colleagues";
        }if(figures.style.backgroundColor == "red"){
          console.log("authority figures");
          auth = "authority figures ";
        }if(fantasy.style.backgroundColor =="red"){
          console.log("fantasy characters");
          fantas = "fantasy characters ";
        }if(celebrities.style.backgroundColor =="red"){
          console.log("celebrities");
          cele = "celebrities ";
        }
        if(chased.style.backgroundColor=="red"){
          console.log("being chased");
          chas = "being chased ";
        }if(toilet.style.backgroundColor){
          console.log("unable to find toilet");
          toil = "unable to find toilet ";
        }if(flying.style.backgroundColor=="red"){
          console.log("flying");
          fly = "flying ";
        }if(falling.style.backgroundColor=="red"){
          console.log("falling");
          fall = "falling ";
        }if(late.style.backgroundColor=="red"){
          console.log("being late");
          latekey = "being late ";
        }
        form_content = schoolkey + akey + vkey + rkey + ckey + trappedkey + housekey + stakey +brikey +boatkey +waterkey + hospkey + latekey + mount + barkey +promkey + churchkey +circuskey + forestkey + motherkey + fatherkey + grandkey + daugkey + sonkey + wifekey + auth + loverkey + friendskey + collkey + fantas + cele + chas + toil + fly + fall;
        console.log(form_content);

       // "el" is the parameter that references the "this" argument that was passed
        form.innerHTML = form_content; // set its content to the value of the "el"
  }


var school_clicks = 0;
  function select_school(_this) { 
  if(school_clicks%2 == 0){
    _this.style.backgroundColor = "red";
    school_clicks = school_clicks + 1;
  }
  else {
    _this.style.backgroundColor = "rosybrown";
    school_clicks = school_clicks + 1;
  }
}
var air_clicks = 0;
  function select_air(_this) {  
  if(air_clicks%2 == 0){
    _this.style.backgroundColor = "red";
    air_clicks = air_clicks+1;
  }
  else {
    _this.style.backgroundColor = "rosybrown";
    air_clicks = air_clicks + 1;
  }
}
var vehicle_clicks = 0;
  function select_vehicle(_this) {  
  if(vehicle_clicks%2 == 0){
    _this.style.backgroundColor = "red";
    vehicle_clicks = vehicle_clicks+1;
  }
  else {
    _this.style.backgroundColor = "rosybrown";
    vehicle_clicks = vehicle_clicks + 1;
  }
}
var road_clicks = 0;
  function select_road(_this) { 
  if(road_clicks%2 == 0){
    _this.style.backgroundColor = "red";
    road_clicks = road_clicks+1;
  }
  else {
    _this.style.backgroundColor = "rosybrown";
    road_clicks = road_clicks + 1;
  }
}
var cave_clicks = 0;
  function select_cave(_this) { 
  if(cave_clicks%2 == 0){
    _this.style.backgroundColor = "red";
    cave_clicks = cave_clicks+1;
  }
  else {
    _this.style.backgroundColor = "rosybrown";
    cave_clicks = cave_clicks + 1;
  }
}

var trapped_clicks = 0;
  function select_trapped(_this) { 
  if(trapped_clicks%2 == 0){
    _this.style.backgroundColor = "red";
    trapped_clicks = trapped_clicks+1;
  }
  else {
    _this.style.backgroundColor = "rosybrown";
    trapped_clicks = trapped_clicks + 1;
  }
}

var house_clicks = 0;
  function select_house(_this) { 
  if(house_clicks%2 == 0){
    _this.style.backgroundColor = "red";
    house_clicks = house_clicks+1;
  }
  else {
    _this.style.backgroundColor = "rosybrown";
    house_clicks = house_clicks + 1;
  }
}

var stairs_clicks = 0;
  function select_stairs(_this) { 
  if(stairs_clicks%2 == 0){
    _this.style.backgroundColor = "red";
    stairs_clicks = stairs_clicks+1;
  }
  else {
    _this.style.backgroundColor = "rosybrown";
    staris_clicks = stairs_clicks + 1;
  }
}

var bridge_clicks = 0;
  function select_bridge(_this) { 
  if(bridge_clicks%2 == 0){
    _this.style.backgroundColor = "red";
    bridge_clicks = bridge_clicks+1;
  }
  else {
    _this.style.backgroundColor = "rosybrown";
    bridge_clicks = bridge_clicks + 1;
  }
}

var boat_clicks = 0;
  function select_boat(_this) { 
  if(boat_clicks%2 == 0){
    _this.style.backgroundColor = "red";
    boat_clicks = boat_clicks+1;
  }
  else {
    _this.style.backgroundColor = "rosybrown";
    boat_clicks = boat_clicks + 1;
  }
}


var water_clicks = 0;
  function select_water(_this) { 
  if(water_clicks%2 == 0){
    _this.style.backgroundColor = "red";
    water_clicks = water_clicks+1;
  }
  else {
    _this.style.backgroundColor = "rosybrown";
    water_clicks = water_clicks + 1;
  }
}

var hospital_clicks = 0;
  function select_hospital(_this) { 
  if(hospital_clicks%2 == 0){
    _this.style.backgroundColor = "red";
    hospital_clicks = hospital_clicks+1;
  }
  else {
    _this.style.backgroundColor = "rosybrown";
    hospital_clicks = hospital_clicks + 1;
  }
}


var mountains_clicks = 0;
  function select_mountains(_this) { 
  if(mountains_clicks%2 == 0){
    _this.style.backgroundColor = "red";
    mountains_clicks = mountains_clicks+1;
  }
  else {
    _this.style.backgroundColor = "rosybrown";
    mountains_clicks = mountains_clicks + 1;
  }
}


var bar_clicks = 0;
  function select_bar(_this) { 
  if(bar_clicks%2 == 0){
    _this.style.backgroundColor = "red";
    bar_clicks = bar_clicks+1;
  }
  else {
    _this.style.backgroundColor = "rosybrown";
    bar_clicks = bar_clicks + 1;
  }
}


var prom_clicks = 0;
  function select_prom(_this) { 
  if(prom_clicks%2 == 0){
    _this.style.backgroundColor = "red";
    prom_clicks = prom_clicks+1;
  }
  else {
    _this.style.backgroundColor = "rosybrown";
    prom_clicks = prom_clicks + 1;
  }
}

var church_clicks = 0;
  function select_church(_this) { 
  if(church_clicks%2 == 0){
    _this.style.backgroundColor = "red";
    church_clicks =+1;
  }
  else {
    _this.style.backgroundColor = "rosybrown";
    church_clicks = church_clicks + 1;
  }
}

var circus_clicks = 0;
  function select_circus(_this) { 
  if(circus_clicks%2 == 0){
    _this.style.backgroundColor = "red";
    circus_clicks = circus_clicks+1;
  }
  else {
    _this.style.backgroundColor = "rosybrown";
    circus_clicks = circus_clicks + 1;
  }
}

var forest_clicks = 0;
  function select_forest(_this) { 
  if(forest_clicks%2 == 0){
    _this.style.backgroundColor = "red";
    forest_clicks = forest_clicks+1;
  }
  else {
    _this.style.backgroundColor = "rosybrown";
    forest_clicks = forest_clicks + 1;
  }
}

var mother_clicks = 0;
  function select_mother(_this) { 
  if(mother_clicks%2 == 0){
    _this.style.backgroundColor = "red";
    mother_clicks = mother_clicks+1;
  }
  else {
    _this.style.backgroundColor = "rosybrown";
    mother_clicks = mother_clicks + 1;
  }
}

var father_clicks = 0;
  function select_father(_this) { 
  if(father_clicks%2 == 0){
    _this.style.backgroundColor = "red";
    father_clicks = father_clicks+1;
  }
  else {
    _this.style.backgroundColor = "rosybrown";
    father_clicks = father_clicks + 1;
  }
}

var grandparents_clicks = 0;
  function select_grandparents(_this) { 
  if(grandparents_clicks%2 == 0){
    _this.style.backgroundColor = "red";
    grandparents_clicks = grandparents_clicks+1;
  }
  else {
    _this.style.backgroundColor = "rosybrown";
    grandparents_clicks = grandparents_clicks + 1;
  }
}

var son_clicks = 0;
  function select_son(_this) { 
  if(son_clicks%2 == 0){
    _this.style.backgroundColor = "red";
    son_clicks = son_clicks+1;
  }
  else {
    _this.style.backgroundColor = "rosybrown";
    son_clicks = son_clicks + 1;
  }
}


var daughter_clicks = 0;
  function select_daughter(_this) { 
  if(daughter_clicks%2 == 0){
    _this.style.backgroundColor = "red";
    daughter_clicks = daughter_clicks+1;
  }
  else {
    _this.style.backgroundColor = "rosybrown";
    daughter_clicks = daughter_clicks + 1;
  }
}

var husband_clicks = 0;
  function select_husband(_this) { 
  if(husband_clicks%2 == 0){
    _this.style.backgroundColor = "red";
    husband_clicks = husband_clicks+1;
  }
  else {
    _this.style.backgroundColor = "rosybrown";
    husband_clicks = husband_clicks + 1;
  }
}

var wife_clicks = 0;
  function select_wife(_this) { 
  if(wife_clicks%2 == 0){
    _this.style.backgroundColor = "red";
    wife_clicks = wife_clicks+1;
  }
  else {
    _this.style.backgroundColor = "rosybrown";
    wife_clicks = wife_clicks + 1;
  }
}

var friends_clicks = 0;
  function select_friends(_this) { 
  if(friends_clicks%2 == 0){
    _this.style.backgroundColor = "red";
    friends_clicks = friends_clicks+1;
  }
  else {
    _this.style.backgroundColor = "rosybrown";
    friends_clicks = friends_clicks + 1;
  }
}

var lover_clicks = 0;
  function select_lover(_this) { 
  if(lover_clicks%2 == 0){
    _this.style.backgroundColor = "red";
    lover_clicks = lover_clicks+1;
  }
  else {
    _this.style.backgroundColor = "rosybrown";
    lover_clicks = lover_clicks + 1;
  }
}

var colleagues_clicks = 0;
  function select_colleagues(_this) { 
  if(colleagues_clicks%2 == 0){
    _this.style.backgroundColor = "red";
    colleagues_clicks = colleagues_clicks+1;
  }
  else {
    _this.style.backgroundColor = "rosybrown";
    colleagues_clicks = colleagues_clicks + 1;
  }
}

var figures_clicks = 0;
  function select_figures(_this) { 
  if(figures_clicks%2 == 0){
    _this.style.backgroundColor = "red";
    figures_clicks = figures_clicks+1;
  }
  else {
    _this.style.backgroundColor = "rosybrown";
    figures_clicks = figures_clicks + 1;
  }
}

var fantasy_clicks = 0;
  function select_fantasy(_this) { 
  if(fantasy_clicks%2 == 0){
    _this.style.backgroundColor = "red";
    fantasy_clicks = fantasy_clicks+1;
  }
  else {
    _this.style.backgroundColor = "rosybrown";
    fantasy_clicks = fantasy_clicks + 1;
  }
}

var celebrities_clicks = 0;
  function select_celebrities(_this) { 
  if(celebrities_clicks%2 == 0){
    _this.style.backgroundColor = "red";
    celebrities_clicks = celebrities_clicks+1;
  }
  else {
    _this.style.backgroundColor = "rosybrown";
    celebrities_clicks = celebrities_clicks + 1;
  }
}

var chased_clicks = 0;
  function select_chased(_this) { 
  if(chased_clicks%2 == 0){
    _this.style.backgroundColor = "red";
    chased_clicks = chased_clicks+1;
  }
  else {
    _this.style.backgroundColor = "rosybrown";
    chased_clicks = chased_clicks + 1;
  }
}

var toilet_clicks = 0;
  function select_toilet(_this) { 
  if(toilet_clicks%2 == 0){
    _this.style.backgroundColor = "red";
    toilet_clicks = toilet_clicks+1;
  }
  else {
    _this.style.backgroundColor = "rosybrown";
    toilet_clicks = toilet_clicks + 1;
  }
}

var flying_clicks = 0;
  function select_flying(_this) { 
  if(flying_clicks%2 == 0){
    _this.style.backgroundColor = "red";
    flying_clicks = flying_clicks+1;
  }
  else {
    _this.style.backgroundColor = "rosybrown";
    flying_clicks = flying_clicks + 1;
  }
}

var falling_clicks = 0;
  function select_falling(_this) { 
  if(falling_clicks%2 == 0){
    _this.style.backgroundColor = "red";
    falling_clicks = falling_clicks+1;
  }
  else {
    _this.style.backgroundColor = "rosybrown";
    falling_clicks = falling_clicks + 1;
  }
}

var late_clicks = 0;
  function select_late(_this) { 
  if(late_clicks%2 == 0){
    _this.style.backgroundColor = "red";
    late_clicks = late_clicks+1;
  }
  else {
    _this.style.backgroundColor = "rosybrown";
    late_clicks = late_clicks + 1;
  }
}

