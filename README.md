# -playwright-test-DEUNA
# Automated test DEUNA

This repository intends to facilitate the design of user flows using [Playwright](https://playwright.dev/) for purposes of automation and visual regression.

Visual regression is one of the ways to assert expecations using visual snapshots (screenshots) in a user flow using browser automation. More details under "What is this about?".

## Table of Contents


1. [Git Branches](./docs/BRANCHES.md)
2. [Framework](./docs/FRAMEWORK.md)
3. [Playwright Update](./docs/PLAYWRIGHT_UPDATES.md)


# test-runner

![test-runner](/docs/imgs/test-runner-lotr.jpg)
_But as for your gift, lord, I will choose one that will fit my need: swift and sure. Give me test-runner! He was only lent before, if loan we may call it. But now shall ride him into great hazard, setting silver against black: I would not risk anything that is not my own. And already there is a bond of love between us._[Said Gandalf].

## Automation QA Playwright Template_

This repository is intended as as template for functional and visual automation test validation using [Playwright](http://playwright.dev).

Teh framework provides easy setup and a interactive ways to record and save automated test scripts with the additional the visual regression assert expectations.


### Execution

1. Clone this repository
2. Install dependencies 
4. Run all the test:
 npx playwright test --reporter=html
 npx playwright show-report
