require('chai').should();

var poissonDiscSampler = require('..');
var XorShift = require('xorshift').constructor;

describe('poisson-disc-sampler', function () {
  it('should sample points correctly', function () {
    var WIDTH = 1000;
    var HEIGHT = 500;

    var sampler = poissonDiscSampler(WIDTH, HEIGHT, 10);

    var sample;

    var points = 0;

    while ((sample = sampler())) {
      points++;

      sample[0].should.be.within(0, WIDTH);
      sample[1].should.be.within(0, HEIGHT);
    }

    points.should.be.at.least(2500);
  });

  it('should sample points correctly with a specified RNG', function () {
    var WIDTH = 1000;
    var HEIGHT = 500;

    var xorshift = new XorShift([1, 0, 2, 0]);

    // wrap this because we can't just pass the xorshift.random function to the
    // sampler since it relies on the rest of the object (it calls
    // this.randomint);
    function random() {
      return xorshift.random();
    }

    var sampler = poissonDiscSampler(WIDTH, HEIGHT, 10, random);

    var sample;

    var points = 0;

    while ((sample = sampler())) {
      points++;

      sample[0].should.be.within(0, WIDTH);
      sample[1].should.be.within(0, HEIGHT);
    }

    points.should.be.at.least(2500);
  });
});
