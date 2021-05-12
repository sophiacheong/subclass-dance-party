var SlideDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr('class', 'BlueDancer');
  this.type = 'BlueDancer';
};

SlideDancer.prototype = Object.create(Dancer.prototype);
SlideDancer.prototype.constructor = SlideDancer;

SlideDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.animate({
    bottom: '1',
    height: 'toggle',
  });
};