// An example configuration file
exports.config = {
  // The address of a running selenium server.
  framework: 'jasmine2',

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  },

  multiCapabilities:[
    {
       browserName: 'chrome',
       chromeOptions:{
        args:['--start-maximinzed']
       }
    }
  ],

  onPrepare:()=> {
    let jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({}));
  },


  // Spec patterns are relative to the configuration file location passed
  // to protractor (in this example conf.js).
  // They may include glob patterns.
  specs: ['example.spec.js'],

  
};
