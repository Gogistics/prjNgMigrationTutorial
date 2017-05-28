import * as d3 from 'd3';

(<any>d3.prototype).functor = function(v) {
  return typeof v === 'function' ? v :function() {
    return v;
  }
}

(<any>d3.prototype).tip = function() {
  // variables declaration
  let direction: Function,
      offset: Function,
      html: Function,
      node: any,
      svg: null,
      point: null,
      target: null;
}

export default d3;
