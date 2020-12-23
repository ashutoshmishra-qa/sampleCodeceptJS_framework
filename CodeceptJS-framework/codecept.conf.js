exports.config = {
  tests: './tests/features/*_test.js',
  output: './tests/output',
  helpers: {
    WebDriver: {
      smartwait: 10000,
      waitForTimeout: 10000,
      url: 'https://example.com',
      browser: 'chrome',
      windowSize: 'maximize'
    }
  },
  include: {
    I: './steps_file.js',
    createDatasetPage: 'tests/pages/createDataset.js',
    createDatasourcePage: 'tests/pages/createDatasource.js',
    createProfilePage: 'tests/pages/createProfile.js',
    createProjectPage: 'tests/pages/createProject.js',
    dataSetListingsPage: 'tests/pages/dataSetListings.js',
    datasetOverviewPage: 'tests/pages/dataSetOverview.js',
    dataSourceListingsPage: 'tests/pages/dataSourceListings.js',
    datasourceOverviewPage: 'tests/pages/datasourceOverview.js',
    loginPage: 'tests/pages/login.js',
    profileOverviewPage: 'tests/pages/profileOverview.js',
    profileListingsPage: 'tests/pages/profileListings.js',
    profileSwitcherPage: 'tests/pages/profileSwitcher.js',
    projectListingsPage: 'tests/pages/projectListings.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'dashboard',
  plugins: {
    "allure": {
      "enabled": true
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    }
  }
}
