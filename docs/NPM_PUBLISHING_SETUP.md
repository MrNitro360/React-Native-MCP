# GitHub Actions NPM Publishing Setup

This guide explains how to set up automatic npm publishing for the React Native MCP Server.

## Prerequisites

1. **npm Account**: You need an npm account (you already have this: mrnitro360)
2. **GitHub Repository**: Your repository is set up (React-Native-MCP)
3. **npm Token**: You need to create an npm automation token

## Setup Steps

### 1. Create npm Automation Token

1. Go to [npmjs.com](https://www.npmjs.com) and log in
2. Click on your profile → "Access Tokens"
3. Click "Generate New Token" → "Automation"
4. Copy the generated token (it starts with `npm_`)

### 2. Add NPM_TOKEN to GitHub Secrets

1. Go to your GitHub repository: https://github.com/MrNitro360/React-Native-MCP
2. Click "Settings" → "Secrets and variables" → "Actions"
3. Click "New repository secret"
4. Name: `NPM_TOKEN`
5. Value: Paste your npm token from step 1
6. Click "Add secret"

### 3. How the Workflow Works

The updated workflow (`auto-deploy.yml`) now:

1. **Builds and Tests**: Runs your tests and builds the project
2. **Local Deployment**: Updates your local MCP server
3. **Version Management**: 
   - Automatically increments patch version if no version change detected
   - Uses existing version if already incremented in commit
4. **npm Publishing**: Publishes to npm with public access
5. **GitHub Release**: Creates a GitHub release with installation instructions

### 4. Triggering Automatic Publishing

The workflow runs automatically when you:
- Push changes to `master` branch
- Modify files in `src/`, `package.json`, or `tsconfig.json`

### 5. Manual Version Control

If you want to control versioning manually:
```bash
npm version patch  # For bug fixes
npm version minor  # For new features  
npm version major  # For breaking changes
git push
```

The workflow will detect the version change and publish accordingly.

## Security Notes

- The NPM_TOKEN is securely stored in GitHub Secrets
- Only the GitHub Actions runner can access it
- Token is only used for publishing, not for other operations
- You can revoke the token anytime from your npm profile

## Monitoring

You can monitor the deployment process in:
- GitHub Actions tab of your repository
- npm package page: https://www.npmjs.com/package/@mrnitro360/react-native-mcp-guide
- GitHub Releases page of your repository
