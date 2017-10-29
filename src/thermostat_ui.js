'use strict';

$(document).ready(function() {

  var thermo = new Thermostat
  $("#current_temp_value").text(thermo.currentTemperature());

  $("#temp_up").click(function() {
    thermo.up(1);
    $("#current_temp_value").text(thermo.currentTemperature());
  })

  $("#temp_down").click(function() {
    thermo.down(1);
    $("#current_temp_value").text(thermo.currentTemperature());
  })

  $("#temp_reset").click(function() {
    thermo.reset();
    $("#current_temp_value").text(thermo.currentTemperature());
  })

});
