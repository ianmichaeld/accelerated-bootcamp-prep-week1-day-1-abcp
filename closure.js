function parent() {
  var innerVariable = "Go to your room!";
  // console.log(inaccessible)
  return function child() {
    var inaccessible = "**sneaks out the bedroom window**";
    return inaccessible;
  }
}

var outerScope = parent;

var innerScope = outerScope();

console.log(outerScope());

console.log(innerScope());
