function clone(obj){
  var o;
  switch(typeof obj){
    case 'undefined':
      break;
    case 'string':
      o = obj+"";
    case 'number':
      o = obj+0;
    case 'boolean':
      o = obj;
    case 'object':
      if(Object.prototype.toString.call(obj).slice(8,-1) === "Array"){
        o = [];
        for(var i = 0;i<obj.length;i++){
          o.push(clone(obj[i]));
        }
      }else{
        o = {};
        for( var k in obj){
          o[k] = clone(obj[k]);
        }
      }
      break;
    default:
      o = obj;
      break;
  }
  return o;
}
