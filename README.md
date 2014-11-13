## poisson-disc-sampler

This code is based on [Mike Bostock's
implementation](http://bl.ocks.org/mbostock/19168c663618b7f07158) of [Jason
Davies' implementation](https://www.jasondavies.com/poisson-disc/) of Bridson's
algorithm.

```js
// width, height, radius
var sampler = poissonDiscSampler(1000, 500, 10);

var sample;

while ((sample = sampler())) {
  console.log('x, y:', sample[0], sample[1]);
}

console.log('no space left for other points now, all done');
```
