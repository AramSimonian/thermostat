'use strict';

function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.MEDIUM_ENERGY_USAGE_TEMP = 18;
  this.MAXIMUM_TEMPERATURE_PSM_ON = 25;
  this.MAXIMUM_TEMPERATURE_PSM_OFF = 32;

  this.temperature = this.DEFAULT_TEMPERATURE;
  this.powerSavingMode = true;

  this.up = function(amount) {
    this.temperature+=amount
    if(this.isPowerSavingOn()){
      this.temperature = Math.min(this.currentTemperature(), this.MAXIMUM_TEMPERATURE_PSM_ON)
    }
    else{
      this.temperature = Math.min(this.currentTemperature(), this.MAXIMUM_TEMPERATURE_PSM_OFF)
    }
  }

  this.down = function(amount) {
    this.temperature-=amount
    this.temperature=Math.max(this.currentTemperature(), this.MINIMUM_TEMPERATURE)
  }

  this.reset = function() {
    this.temperature = this.DEFAULT_TEMPERATURE
  }
  
  this.currentUsage = function() {
    if (this.temperature < this.MEDIUM_ENERGY_USAGE_TEMP)
      return 'low-usage'
    else if (this.temperature < this.MAXIMUM_TEMPERATURE_PSM_ON)
      return 'medium-usage'
    else
      return 'high-usage'
  }
}

Thermostat.prototype.currentTemperature  = function(){
  return this.temperature;
}

Thermostat.prototype.switchPowerSavingOn = function() {
  this.powerSavingMode = true;
}

Thermostat.prototype.switchPowerSavingOff = function() {
  this.powerSavingMode = false;
}

Thermostat.prototype.isPowerSavingOn = function() {
  return this.powerSavingMode === true;
}


// Thermostat.prototype.up = function() {
//   this.temperature = this.temperature + 1
// }
