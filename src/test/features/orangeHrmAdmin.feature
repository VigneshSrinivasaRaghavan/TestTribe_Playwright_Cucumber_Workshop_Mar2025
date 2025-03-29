Feature: Orange HRM Admin Feature

Scenario: Navigate to Admin tab
Given user is on the organgehrm login page
When user enters valid username
And user enters valid password
And user clicks on the login button
And user clicks on Admin tab
Then user will be navigated to Admin page