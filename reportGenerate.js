const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./test-result/report/",
  reportPath: "./test-result/report/",
  metadata: {
    browser: {
      name: "Chromium",
      version: "112",
    },
    device: "Mac",
    platform: {
      name: "mac",
      version: "m3",
    },
  },
  customData: {
    title: "Testtribe Playwright Demo",
    data: [
      { label: "Project", value: "TTT PW Demo" },
      { label: "Release", value: "1.1" },
      { label: "Cycle", value: "B11221.34321" },
      { label: "Execution Start Time", value: Date.now() },
      { label: "Execution End Time", value: Date.now() },
    ],
  },
});