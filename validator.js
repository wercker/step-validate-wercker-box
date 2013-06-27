var jsYaml = require("js-yaml")
var fs = require("fs")
var path = require("path")
var JSV = require("JSV").JSV


var werckerBoxSchema = JSON.parse(fs.readFileSync(path.join(__dirname, 'wercker-box-schema.json')).toString())

exports.validate = function (filename, callback) {

  if(!path.existsSync(filename)){
    return callback("File " + filename + " does not exist.")
  }

  var yamlContents = fs.readFileSync(filename).toString();
  var yaml;
  try{
    yaml = jsYaml.load(yamlContents);
  }
  catch(error){
    return callback(error)
  }

  var env = JSV.createEnvironment()
  var report = env.validate(yaml, werckerBoxSchema)

  if(report.errors.length === 0){
    return callback(null)
  }

  return callback(report.errors)
}