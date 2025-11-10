# Playwright Automation with GitHub Actions

This repository demonstrates automated web testing using [Playwright](https://playwright.dev/) and continuous integration with GitHub Actions. It includes accessibility and performance audits using Lighthouse CI.

## Features

- **End-to-end tests** for Amazon India using Playwright.
- **Accessibility, performance, SEO, and best-practices audits** via Lighthouse CI.
- **GitHub Actions workflow** for automated CI/CD.
- **Parallel test execution** and HTML reporting.

## Project Structure
├── accessibility-test/ # Lighthouse CI configuration
├── data/ # Test data: selectors, URLs, paths
├── pattern/ # Page object pattern base classes
├── playwright-report/ # Playwright HTML reports
├── support/ # Helper methods and global setup
├── test-results/ # Test run outputs
├── tests/ # Test specs
├── .github/workflows/ # GitHub Actions workflow
├── playwright.config.ts # Playwright configuration
├── package.json # Project dependencies and scripts
└── README.md # Project documentation

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.x recommended)
- [npm](https://www.npmjs.com/)

### Installation

```sh
npm ci
npx playwright install
