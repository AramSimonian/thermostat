describe("Thermostat", function() {
  var thermo;

  beforeEach(function() {
    thermo = new Thermostat();
  });

  it("should have an initial temperature of 20 degrees", function() {
    expect(thermo.temperature).toEqual(20)
  })

  it('should increase the temperature after invoking up', function() {
    thermo.up(1)
    expect(thermo.temperature).toEqual(21)
  })

  it('should decrease the temperature after invoking down', function() {
    thermo.down(1)
    expect(thermo.temperature).toEqual(19)
  })

  it('minimum temperature is 10 degrees', function() {
    thermo.down(11)
    expect(thermo.temperature).toEqual(10)
  })

  it('minimum temperature is 10 degrees', function() {
    thermo.down(11)
    expect(thermo.temperature).toEqual(10)
  })

  it('max temperature is 25 degrees if power saving is true', function() {
    thermo.powerSavingMode = true
    thermo.up(20)
    expect(thermo.temperature).toEqual(25)
  })

  it('max temperature is 32 degrees if power saving is true', function() {
    thermo.powerSavingMode = false
    thermo.up(20)
    expect(thermo.temperature).toEqual(32)
  })

  it('reset function sets temperature to 20 degrees', function() {
    thermo.reset()
    expect(thermo.temperature).toEqual(20)
  })

  it('energy usage is low if below 18', function() {
    thermo.down(3)
    expect(thermo.currentUsage()).toEqual('low-usage')
  })

  it('energy usage is low if below 25', function() {
    expect(thermo.currentUsage()).toEqual('medium-usage')
  })

  it('energy usage is low if above 25', function() {
    thermo.powerSavingMode = false
    thermo.up(10)
    expect(thermo.currentUsage()).toEqual('high-usage')
  })
});
