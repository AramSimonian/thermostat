describe("Thermostat", function() {
  var thermo;

  beforeEach(function() {
    thermo = new Thermostat();
  });

  it("should have an initial temperature of 20 degrees", function() {
    expect(thermo.currentTemperature()).toEqual(20)
  })

  it('should increase the temperature after invoking up', function() {
    thermo.up(1)
    expect(thermo.currentTemperature()).toEqual(21)
  })

  it('should decrease the temperature after invoking down', function() {
    thermo.down(1)
    expect(thermo.currentTemperature()).toEqual(19)
  })

  it('minimum temperature is 10 degrees', function() {
    thermo.down(11)
    expect(thermo.currentTemperature()).toEqual(10)
  })

  it('minimum temperature is 10 degrees', function() {
    thermo.down(11)
    expect(thermo.currentTemperature()).toEqual(10)
  })

  it('max temperature is 25 degrees if power saving is true', function() {
    thermo.switchPowerSavingOn()
    thermo.up(20)
    expect(thermo.currentTemperature()).toEqual(25)
  })

  it('max temperature is 32 degrees if power saving is false', function() {
    thermo.switchPowerSavingOff()
    thermo.up(20)
    expect(thermo.currentTemperature()).toEqual(32)
  })

  it('reset function sets temperature to 20 degrees', function() {
    thermo.reset()
    expect(thermo.currentTemperature()).toEqual(20)
  })

  it('energy usage is low if below 18 degrees', function() {
    thermo.down(3)
    expect(thermo.currentUsage()).toEqual('low-usage')
  })

  it('energy usage is low if below 25 degrees', function() {
    expect(thermo.currentUsage()).toEqual('medium-usage')
  })

  it('energy usage is high if 25 degrees or above', function() {
    thermo.switchPowerSavingOff()
    thermo.up(10)
    expect(thermo.currentUsage()).toEqual('high-usage')
  })
});
