# Windows Task Scheduler Setup for MCP Auto-Update
# Run this script as Administrator to set up automatic updates

$TaskName = "ReactNativeMCPAutoUpdate"
$ScriptPath = "C:\Users\david\Desktop\React-Native MCP\scripts\auto-update.ps1"
$LogPath = "C:\Users\david\Desktop\React-Native MCP\logs\auto-update.log"

# Create logs directory
New-Item -ItemType Directory -Force -Path "C:\Users\david\Desktop\React-Native MCP\logs"

# Create the scheduled task
$Action = New-ScheduledTaskAction -Execute "PowerShell.exe" -Argument "-ExecutionPolicy Bypass -File `"$ScriptPath`" >> `"$LogPath`" 2>&1"

$Trigger = New-ScheduledTaskTrigger -Daily -At "02:00AM"  # Run daily at 2 AM

$Settings = New-ScheduledTaskSettingsSet -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries -StartWhenAvailable

$Principal = New-ScheduledTaskPrincipal -UserId $env:USERNAME -LogonType Interactive

# Register the task
Register-ScheduledTask -TaskName $TaskName -Action $Action -Trigger $Trigger -Settings $Settings -Principal $Principal -Description "Auto-update React Native MCP Server from GitHub"

Write-Host "✅ Scheduled task '$TaskName' created successfully!" -ForegroundColor Green
Write-Host "📅 Will run daily at 2:00 AM" -ForegroundColor Cyan
Write-Host "📋 Logs will be saved to: $LogPath" -ForegroundColor Gray
Write-Host "" 
Write-Host "To manage the task:" -ForegroundColor Yellow
Write-Host "• View: Get-ScheduledTask -TaskName '$TaskName'" -ForegroundColor Gray
Write-Host "• Run Now: Start-ScheduledTask -TaskName '$TaskName'" -ForegroundColor Gray  
Write-Host "• Remove: Unregister-ScheduledTask -TaskName '$TaskName'" -ForegroundColor Gray
