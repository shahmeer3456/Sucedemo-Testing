const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');


setHeadlessWhen(process.env.HEADLESS);

setCommonPlugins();

exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'http://35.225.134.67:5173',
      show: true
    },
    REST: {
      endpoint: 'http://35.225.134.67:5173/ambassador/manageParticipants'
    },
    JSONResponse: {},
  },
  include: {
    I: './steps_file.js',
    test: './pages/testingPage.js',
    
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [
    {
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './*_test.js',
  name: 'framework'
};