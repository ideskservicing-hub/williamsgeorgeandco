# Why is my site blank?
If your site is blank, it's because **GitHub Pages is trying to show your source code instead of your built website.**

React apps (like this one) must be "built" (compiled) before they can be viewed in a browser. By default, GitHub Pages doesn't know how to do this, so it just shows a blank page.

## The Solution: Enable Automatic Building
You MUST follow these steps to tell GitHub to build your app automatically:

1. **Move the Workflow File**:
   - In your GitHub repository, find the file `GITHUB_DEPLOY_WORKFLOW.yml`.
   - Click the **Pencil icon** (Edit) in the top right.
   - Change the filename at the top to: `.github/workflows/deploy.yml`
   - Click **Commit changes...** at the bottom.
   - *This tells GitHub: "Every time I push code, build it and put it on the web."*

2. **Switch to GitHub Actions**:
   - Go to **Settings** > **Pages** in your GitHub repository.
   - Under **Build and deployment** > **Source**, change the dropdown from "Deploy from a branch" to **GitHub Actions**.

3. **Wait for the Green Checkmark**:
   - Go to the **Actions** tab. You will see a "Deploy static content to Pages" workflow running.
   - Wait for it to finish (it will turn green).
   - Your site will then be live at your GitHub URL!

## Local Use (Download)
If you downloaded the ZIP and opened `index.html` directly, it will be blank because browsers block certain features for security. You **must** run a local server:
1. Extract the ZIP.
2. Open a terminal in that folder.
3. Run `npm install` then `npm run dev`.
4. Open the link it gives you (usually `http://localhost:3000`).
