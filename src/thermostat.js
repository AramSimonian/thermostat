'use strict';

function Thermostat() {
  this.MINIMUM_TEMPERATURE = 10;
  this._temperature = 20;
  this.powerSavingMode = true;
  this.up = function(amount) {
    this._temperature+=amount
    if(this.isPowerSavingOn()){
      this._temperature = Math.min(this.currentTemperature(), 25)
    }
    else{
      this._temperature = Math.min(this.currentTemperature(), 32)
    }
  }
  this.down = function(amount) {
    this._temperature-=amount
    this._temperature=Math.max(this.currentTemperature(), this.MINIMUM_TEMPERATURE)
  }
  this.reset = function() {
    this._temperature = 20
  }
  this.currentUsage = function() {
    if (this._temperature < 18)
      return 'low-usage'
    else if (this._temperature < 25)
      return 'medium-usage'
    else
      return 'high-usage'
  }
}

Thermostat.prototype.currentTemperature  = function(){
  return this._temperature;
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
