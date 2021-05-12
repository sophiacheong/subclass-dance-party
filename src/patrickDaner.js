var PatrickDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr('class', 'PatrickDancer');
  this.type = 'PatrickDancer';
};

PatrickDancer.prototype = Object.create(Dancer.prototype);
PatrickDancer.prototype.constructor = PatrickDancer;

PatrickDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.css({
    width: '100px',
    height: '50px',
  });
  this.$node.toggleClass('animate');
};