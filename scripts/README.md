# Auto-Update System for React Native MCP Server

This directory contains scripts and configurations to automatically update your MCP server when changes are pushed to the GitHub repository.

## 🚀 Quick Setup Options

### Option 1: Manual Updates (Simplest)
```powershell
# Update immediately
npm run deploy

# Check for updates and apply if needed
npm run auto-update
```

### Option 2: Automatic Daily Updates
```powershell
# Run as Administrator to set up daily automatic updates
powershell -ExecutionPolicy Bypass -File scripts/setup-auto-update.ps1

# Or run the auto-update in watch mode (checks every 5 minutes)
npm run watch-updates
```

### Option 3: GitHub Actions (Advanced)
The `.github/workflows/auto-deploy.yml` file sets up automatic deployment on every push to the master branch.

## 📋 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run deploy` | Build and deploy to global MCP directory immediately |
| `npm run auto-update` | Check for GitHub updates and deploy if needed |
| `npm run watch-updates` | Continuously watch for updates (5-minute intervals) |
| `npm run update-global` | Build and copy files to global directory |
| `npm run restart-mcp` | Restart the MCP server with Claude CLI |

## 🔧 Manual Setup Steps

### 1. Set Execution Policy (First Time Only)
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### 2. Test Auto-Update
```powershell
cd "C:\Users\david\Desktop\React-Native MCP"
npm run auto-update
```

### 3. Set Up Scheduled Task (Optional)
```powershell
# Run as Administrator
.\scripts\setup-auto-update.ps1
```

## 📊 How It Works

1. **Detection**: Scripts check for new commits on GitHub
2. **Validation**: Only updates if source files (src/, package.json, tsconfig.json) changed
3. **Build**: Runs `npm run build` to compile TypeScript
4. **Deploy**: Copies built files to `C:\mcp-servers\react-native-guide\`
5. **Restart**: Removes and re-adds MCP server to Claude CLI
6. **Verify**: Confirms the server is connected

## 🛠️ Customization

### Change Update Frequency
Edit the watch interval in `auto-update.ps1`:
```powershell
Start-Sleep -Seconds 300  # 5 minutes (change as needed)
```

### Change Scheduled Time
Modify the trigger in `setup-auto-update.ps1`:
```powershell
$Trigger = New-ScheduledTaskTrigger -Daily -At "02:00AM"  # Change time here
```

### Custom MCP Path
Update the paths in scripts if your MCP is installed elsewhere:
```powershell
$GlobalMCPPath = "C:\mcp-servers\react-native-guide"  # Update this path
```

## 📝 Logs

Auto-update logs are saved to:
- **Manual runs**: Console output
- **Scheduled tasks**: `C:\Users\david\Desktop\React-Native MCP\logs\auto-update.log`

## 🚨 Troubleshooting

### Permission Issues
```powershell
# Set execution policy
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# Run as Administrator for scheduled tasks
```

### MCP Server Not Restarting
```powershell
# Manually restart
claude mcp remove react-native-guide
claude mcp add react-native-guide node C:/mcp-servers/react-native-guide/build/index.js -s user
```

### Build Failures
```powershell
# Clean and rebuild
npm install
npm run build
```

## ✅ Verification

After any update, verify the MCP server is working:
```powershell
claude mcp list
# Should show: react-native-guide: ✓ Connected
```

Test the new features:
```bash
claude "analyze_codebase_comprehensive"
```
