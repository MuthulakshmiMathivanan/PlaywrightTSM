const report = require("multiple-cucumber-html-reporter");
//report file is not working...
report.generate({
  jsonDir: "test-results/",
  reportPath: "./",
  reportName:"Playwright automation report",
  metadata: {
    browser: {
      name: "chrome",
      version: "91",
    },
    device: "Local test machine",
    platform: {
      name: "windows",
      version: "10",
    },
  },
  customData: {
    title: "HtmlReport",
    data: [
      { label: "Project", value: "swagLabs project" },
      { label: "Release", value: "1.0.0" },
      { label: "Cycle", value: "smoke1" },
      { label: "Execution Start Time", value: new Date().toLocaleString() },
      { label: "Execution End Time", value: new Date().toLocaleString() },
    ],
  },
});
