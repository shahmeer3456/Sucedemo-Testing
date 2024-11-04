# Sucedemo-Testing
Here’s a README setup guide for integrating **Playwright** testing with **JavaScript** in **VS Code** and setting it up in a GitHub repository.

```markdown
# Playwright Testing Setup in JavaScript

This guide will help you set up Playwright with JavaScript in Visual Studio Code, and configure it for GitHub integration to run automated tests.

## Prerequisites

- **Node.js**: Make sure Node.js is installed. You can download it from [nodejs.org](https://nodejs.org/).
- **VS Code**: Visual Studio Code should be installed as your code editor.
- **Git**: To manage code versioning and push changes to GitHub.

## Step 1: Initialize Node.js Project

1. Open your project in VS Code.
2. Initialize a Node.js project by running:

    ```bash
    npm init -y
    ```

This creates a `package.json` file, which will manage dependencies for your project.

## Step 2: Install Playwright

Install Playwright and its test runner:

```bash
npm install -D @playwright/test
```

The `-D` flag ensures that Playwright is saved as a development dependency in your `package.json`.

## Step 3: Configure Playwright

1. Run Playwright’s configuration command to set up the default config file:

    ```bash
    npx playwright install
    ```

2. Generate a basic configuration file:

    ```bash
    npx playwright codegen
    ```

   - This command opens Playwright Inspector, where you can record interactions to generate tests.
   - Save the output to `tests/example.spec.js` or a similar path.

## Step 4: Add Test Scripts in `package.json`

Update `package.json` to include a script for running tests:

```json
"scripts": {
  "test": "npx playwright test"
}
```

You can now run Playwright tests with:

```bash
npm test
```

## Step 5: Run Tests in VS Code

To run tests directly in VS Code:

1. Open the **Run and Debug** pane (or press `Ctrl+Shift+D`).
2. Choose **Add Configuration…** and select **Node.js** to run Node scripts.
3. Save this configuration in `.vscode/launch.json`.

Alternatively, use the command line to run Playwright tests directly:

```bash
npx playwright test
```

## Step 6: Configure GitHub Actions for CI Testing

To automatically run Playwright tests on GitHub, add a GitHub Actions workflow.

1. In your project, create a `.github/workflows` directory.
2. Inside this directory, create a file named `playwright.yml` with the following content:

    ```yaml
    name: Playwright Tests

    on:
      push:
        branches:
          - main
      pull_request:
        branches:
          - main

    jobs:
      test:
        runs-on: ubuntu-latest

        steps:
        - name: Checkout code
          uses: actions/checkout@v2

        - name: Set up Node.js
          uses: actions/setup-node@v2
          with:
            node-version: '16'

        - name: Install dependencies
          run: npm install

        - name: Install Playwright Browsers
          run: npx playwright install --with-deps

        - name: Run Playwright Tests
          run: npm test
    ```

This workflow will trigger on every push or pull request to the `main` branch, run Playwright tests on GitHub's virtual environment, and display results on the Actions tab.

## Step 7: Running and Writing Tests

1. To create tests, write your test cases in `.spec.js` files inside a `tests` directory.
2. Example test (`tests/example.spec.js`):

    ```javascript
    const { test, expect } = require('@playwright/test');

    test('basic test', async ({ page }) => {
      await page.goto('https://example.com');
      const title = await page.title();
      expect(title).toBe('Example Domain');
    });
    ```

Run this test with:

```bash
npx playwright test
```

## Step 8: View Test Results

After running tests locally, results will appear in your terminal. In GitHub, go to the **Actions** tab to view automated test results from your CI workflow.

---

## Additional Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

This setup provides a basic testing environment for Playwright in JavaScript, suitable for local testing and CI integration with GitHub.
```

This README provides instructions for setting up, running, and automating Playwright tests with GitHub Actions. Let me know if you need any modifications!
