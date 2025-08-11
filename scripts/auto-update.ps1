# React Native MCP Server Auto-Update Script
# Run this script to check for updates and auto-deploy

param(
    [switch]$Force,
    [switch]$Watch
)

$MCPPath = "C:\Users\david\Desktop\React-Native MCP"
$GlobalMCPPath = "C:\mcp-servers\react-native-guide"

function Update-MCPServer {
    Write-Host "🚀 Checking for React Native MCP Server updates..." -ForegroundColor Cyan
    
    # Navigate to MCP directory
    Set-Location $MCPPath
    
    # Get current commit hash
    $currentCommit = git rev-parse HEAD
    
    # Fetch latest changes
    git fetch origin master
    
    # Get latest commit hash
    $latestCommit = git rev-parse origin/master
    
    if ($currentCommit -eq $latestCommit -and -not $Force) {
        Write-Host "✅ MCP server is already up to date!" -ForegroundColor Green
        return
    }
    
    Write-Host "📥 New changes detected, updating..." -ForegroundColor Yellow
    
    # Pull latest changes
    git pull origin master
    
    # Check if source files changed
    $changedFiles = git diff --name-only HEAD~1 HEAD
    $sourceChanged = $changedFiles | Where-Object { $_ -match "(src/|package\.json|tsconfig\.json)" }
    
    if ($sourceChanged -or $Force) {
        Write-Host "🔧 Source changes detected, rebuilding..." -ForegroundColor Yellow
        
        # Install dependencies if package.json changed
        if ($changedFiles -contains "package.json") {
            Write-Host "📦 Installing dependencies..." -ForegroundColor Blue
            npm install
        }
        
        # Build the project
        Write-Host "🏗️ Building project..." -ForegroundColor Blue
        npm run build
        
        if ($LASTEXITCODE -ne 0) {
            Write-Host "❌ Build failed!" -ForegroundColor Red
            return
        }
        
        # Copy to global MCP directory
        Write-Host "📋 Copying to global MCP directory..." -ForegroundColor Blue
        Copy-Item -Path "build\*" -Destination $GlobalMCPPath -Recurse -Force
        
        # Restart MCP server
        Write-Host "🔄 Restarting MCP server..." -ForegroundColor Blue
        claude mcp remove react-native-guide
        claude mcp add react-native-guide node "$GlobalMCPPath/build/index.js" -s user
        
        Write-Host "✅ MCP server updated successfully!" -ForegroundColor Green
        claude mcp list
    } else {
        Write-Host "ℹ️ No source changes detected, skipping rebuild." -ForegroundColor Gray
    }
}

if ($Watch) {
    Write-Host "👀 Starting watch mode - checking for updates every 5 minutes..." -ForegroundColor Magenta
    Write-Host "Press Ctrl+C to stop" -ForegroundColor Gray
    
    while ($true) {
        Update-MCPServer
        Start-Sleep -Seconds 300  # 5 minutes
    }
} else {
    Update-MCPServer
}
