# Update Claude MCP configuration to use npm package
param(
    [switch]$CheckAvailability
)

$packageName = "@mrnitro360/react-native-mcp-guide"
$serverName = "react-native-guide"

Write-Host "Updating Claude MCP configuration to use npm package..." -ForegroundColor Cyan

if ($CheckAvailability) {
    Write-Host "Checking if npm package is available..." -ForegroundColor Yellow
    $npmCheck = npm view $packageName 2>&1
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Package not yet available on npm registry" -ForegroundColor Red
        Write-Host "Package may still be propagating. Try again in a few minutes." -ForegroundColor Yellow
        exit 1
    }
    Write-Host "Package is available on npm!" -ForegroundColor Green
}

try {
    # Remove current configuration
    Write-Host "Removing current local configuration..." -ForegroundColor Yellow
    claude mcp remove $serverName

    # Install package globally
    Write-Host "Installing package globally..." -ForegroundColor Yellow
    npm install -g $packageName

    if ($LASTEXITCODE -eq 0) {
        # Add npm configuration
        Write-Host "Adding npm package configuration..." -ForegroundColor Yellow
        claude mcp add $serverName "npm:$packageName@latest"
        
        # Verify configuration
        Write-Host "Verifying configuration..." -ForegroundColor Yellow
        claude mcp list
        
        Write-Host "Successfully updated to npm package!" -ForegroundColor Green
        Write-Host "Your MCP server is now using: npm:$packageName@latest" -ForegroundColor Cyan
    } else {
        Write-Host "Failed to install npm package" -ForegroundColor Red
        Write-Host "Falling back to local configuration..." -ForegroundColor Yellow
        
        # Fall back to local
        claude mcp add $serverName "node C:/mcp-servers/react-native-guide/index.js"
        Write-Host "Using local configuration as fallback" -ForegroundColor Yellow
    }
} catch {
    Write-Host "Error updating configuration: $_" -ForegroundColor Red
    exit 1
}
