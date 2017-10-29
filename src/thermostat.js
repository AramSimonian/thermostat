'use strict';

function Thermostat() {
  this.MINIMUM_TEMPERATURE = 10;
  this.temperature = 20;
  this.powerSavingMode = true;
  this.up = function(amount) {
    this.temperature+=amount
    if(this.isPowerSavingOn()){
      this.temperature = Math.min(this.currentTemperature(), 25)
    }
    else{
      this.temperature = Math.min(this.currentTemperature(), 32)
    }
  }
  this.down = function(amount) {
    this.temperature-=amount
    this.temperature=Math.max(this.currentTemperature(), this.MINIMUM_TEMPERATURE)
  }
  this.reset = function() {
    this.temperature = 20
  }
  this.currentUsage = function() {
    if (this.temperature < 18)
      return 'low-usage'
    else if (this.temperature < 25)
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
