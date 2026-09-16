# QA Capstone — Automation Exercise (Manual, API, UI, CI/CD & SQL)

A complete QA portfolio project combining manual testing, API 
automation, UI automation, continuous integration, and SQL 
validation, built against the Automation Exercise e-commerce 
platform.

## Objective

This project demonstrates the ability to architect a complete QA 
testing strategy from scratch, combining manual testing, API 
automation, UI automation with the Page Object Model, continuous 
integration, and SQL data validation — applied to a real, unfamiliar 
web application rather than a familiar one from earlier projects.

## What's Included

- **Manual Testing** — Test Plan, 12 Test Cases, and 4 Bug Reports 
  covering login, registration, product search, cart, and checkout
- **API Tests** — 8 Playwright tests covering products, brands, 
  search, and login endpoints, including success and error scenarios
- **UI Tests** — 3 Playwright tests using the Page Object Model, 
  covering login, product search, and adding a product to the cart
- **CI Pipeline** — GitHub Actions workflow running the full 
  automated test suite on every push and pull request
- **SQL Validation** — Local SQLite database seeded with real product 
  data, with 3 queries validating filtering, partial search, and 
  table joins

  ## Key Findings

- **CI-specific instability from third-party bot protection:** API 
  tests passed consistently when run locally, but occasionally 
  received an HTML challenge page instead of a JSON response when 
  executed in GitHub Actions — likely due to Cloudflare treating 
  cloud/CI IP ranges as suspicious. Since Automation Exercise is a 
  third-party service, IP allowlisting isn't possible; retrying the 
  workflow resolved it, confirming the issue was intermittent rather 
  than a permanent block.

- **Non-standard API response pattern:** The Automation Exercise API 
  always returns HTTP status 200, embedding the real result in a 
  custom `responseCode` field within the JSON body (e.g., 405 for an 
  unsupported method, 400 for a missing parameter). Tests were 
  adapted to validate `responseCode` rather than relying on the HTTP 
  status.

- **Non-functional cart quantity field:** The quantity field in the 
  shopping cart accepts clicks but does not update its value through 
  any tested method (direct click, typed input), preventing users 
  from adjusting item quantities without removing and re-adding 
  products.

  ## Skills Demonstrated

- End-to-end QA strategy design, combining manual and automated testing
- Manual testing: Test Plans, Test Cases, and Bug Reports
- API test automation with Playwright and TypeScript
- UI test automation with the Page Object Model design pattern
- Cross-browser testing (Chromium, Firefox, WebKit)
- Continuous Integration with GitHub Actions
- SQL querying (filtering, pattern matching, joins)
- Git branching workflow (feature branches, Pull Requests, squash merge)
- Conventional Commits standard
- Root cause investigation of environment-specific test failures