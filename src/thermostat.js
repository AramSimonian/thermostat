function Thermostat() {
  this.temperature = 20
  this.powerSavingMode = true
  this.up = function(amount) {
    this.temperature+=amount
    if (this.powerSavingMode)
      this.temperature = Math.min(this.temperature, 25)
    else
      this.temperature = Math.min(this.temperature, 32)
  }
  this.down = function(amount) {
    this.temperature-=amount
    this.temperature=Math.max(this.temperature, 10)
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

// Thermostat.prototype.up = function() {
//   this.temperature = this.temperature + 1
// }
