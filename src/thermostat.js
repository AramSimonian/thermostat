'use strict';

function Thermostat() {
  this._temperature = 20
  this.powerSavingMode = true
  this.up = function(amount) {
    this._temperature+=amount
    if (this.powerSavingMode)
      this._temperature = Math.min(this._temperature, 25)
    else
      this._temperature = Math.min(this._temperature, 32)
  }
  this.down = function(amount) {
    this._temperature-=amount
    this._temperature=Math.max(this._temperature, 10)
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

// Thermostat.prototype.up = function() {
//   this.temperature = this.temperature + 1
// }
