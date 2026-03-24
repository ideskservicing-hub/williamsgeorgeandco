# GitHub Pages Deployment Instructions

If the `.github/workflows/deploy.yml` file was not automatically created during export, follow these steps to enable automatic deployment:

1. **Move the Workflow File**:
   - In your GitHub repository, click on the file `GITHUB_DEPLOY_WORKFLOW.yml`.
   - Click the **Pencil icon** (Edit) in the top right.
   - Change the filename at the top to: `.github/workflows/deploy.yml`
   - Click **Commit changes...** at the bottom.

2. **Enable GitHub Actions for Pages**:
   - Go to **Settings** > **Pages** in your GitHub repository.
   - Under **Build and deployment** > **Source**, select **GitHub Actions** from the dropdown.

3. **Verify the Build**:
   - Go to the **Actions** tab. You should see a workflow running.
   - Once it finishes, your site will be live at: `https://ideskservicing-hub.github.io/williamsgeorgeandco/`

## Local Development
To run this project locally:
1. Download the ZIP and extract it.
2. Run `npm install` in the terminal.
3. Run `npm run dev` to start the development server.
4. Open `http://localhost:3000` in your browser.
