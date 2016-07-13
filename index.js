//node side - what goes down to the ROV 
function sensor(name, deps) {
  console.log('This is where sensor graph code would execute in the node process.');

}
module.exports = function (name, deps) {
  return new sensor(name,deps);
};
