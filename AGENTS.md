# Agent Instructions

## Project Shape

- Gherkin scenarios live in `features/`.
- Cucumber step definitions live in `step-definitions/` and are loaded by `cucumber.js` through `ts-node/register`.
- Playwright page objects live in `pages/` and receive a `Page` in their constructor.
- `Playwright.config.js` applies only to Playwright Test files under `tests/`; Cucumber launches its own browser in `step-definitions/commonSteps.ts`.

## Commands

- `npm test` runs the Cucumber scenarios.
- `npm run test:playwright` runs Playwright Test. Add Playwright Test files under `tests/`.
- `npm run allure-report` regenerates the Allure report from `allure-results/`.
- `npm run allure-open` opens the generated Allure report.

## File Exclusions

Do not edit, review as source, or commit generated/dependency content in these paths:

- `node_modules/`
- `allure-results/`
- `allure-report/`
- `test-results/`
- `playwright-report/`

These paths are excluded by `.gitignore`. Update source files, features, configuration, or tests instead of generated report files.

## Implementation Conventions

- Keep new Cucumber steps in `step-definitions/` and match their phrases to the feature files.
- Prefer the existing page-object methods and Playwright locators before adding selectors directly to step definitions.
- Use async Playwright APIs and Node's built-in `assert`, consistent with the existing steps.
- Browser-based tests require network access to `https://www.saucedemo.com/` and run headed by default.