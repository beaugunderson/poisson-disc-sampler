require('chai').should();

var poissonDiscSampler = require('..');

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
});
