---
title: How to pin programs to taskbar with powershell in Windows 10 or Windows Server 2012+
tags:
- windows
- pin
- taskbar
- powershell
---

Today I was looking for a solution to create a shortcut to Windows .exe files / Windows binaries / Windows Applications (whatever you want to call them). For future reference, here is a solution which works perfectly with Windows Server 2016 and Windows 10. All credits go to the original author for the starting point. I just made some simple amends and modified the script to take a list of arguments so multiple applications can be added to the Windows Taskbar at the same time.

This solution can be used with configuration management and provisioning tools. All you have to do is supply a list of applications to be pinned and invoke a powershell script. Awesome!

<!--more-->

{% highlight powershell %}

# Function Credit: https://community.spiceworks.com/topic/2165665-pinning-taskbar-items-with-powershell-script
Function Set-PinTaskbar {
    Param (
        [parameter(Mandatory=$True, HelpMessage="Target item to pin")]
        [ValidateNotNullOrEmpty()]
        [string] $Target
        ,
        [Parameter(Mandatory=$False, HelpMessage="Target item to unpin")]
        [switch]$Unpin
    )
    If (!(Test-Path $Target)) {
        Write-Warning "$Target does not exist"
        Break
    }

    $KeyPath1  = "HKLM:\SOFTWARE\Classes"
    $KeyPath2  = "*"
    $KeyPath3  = "shell"
    $KeyPath4  = "{:}"
    $ValueName = "ExplorerCommandHandler"
    $ValueData =
        (Get-ItemProperty `
            ("HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\" + `
                "CommandStore\shell\Windows.taskbarpin")
        ).ExplorerCommandHandler

    $Key2 = (Get-Item $KeyPath1).OpenSubKey($KeyPath2, $true)
    $Key3 = $Key2.CreateSubKey($KeyPath3, $true)
    $Key4 = $Key3.CreateSubKey($KeyPath4, $true)
    $Key4.SetValue($ValueName, $ValueData)

    $Shell = New-Object -ComObject "Shell.Application"
    $Folder = $Shell.Namespace((Get-Item $Target).DirectoryName)
    $Item = $Folder.ParseName((Get-Item $Target).Name)

    # Registry key where the pinned items are located
    $RegistryKey = "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\Taskband"
    # Binary registry value where the pinned items are located
    $RegistryValue = "FavoritesResolve"
    # Gets the contents into an ASCII format
    $CurrentPinsProperty = ([system.text.encoding]::ASCII.GetString((Get-ItemProperty -Path $RegistryKey -Name $RegistryValue | Select-Object -ExpandProperty $RegistryValue)))
    # Specifies the wildcard of the current executable to be pinned, so that it won't attempt to unpin / repin
    $Executable = "*" + (Split-Path $Target -Leaf) + "*"
    # Filters the results for only the characters that we are looking for, so that the search will function
    [string]$CurrentPinsResults = $CurrentPinsProperty -Replace '[^\x20-\x2f^\x30-\x39\x41-\x5A\x61-\x7F]+', ''

    # Unpin if the application is pinned
    If ($Unpin.IsPresent) {
        If ($CurrentPinsResults -like $Executable) {
            $Item.InvokeVerb("{:}")
        }
    }
    Else {
        # Only pin the application if it hasn't been pinned
        If (!($CurrentPinsResults -like $Executable)) {
            $Item.InvokeVerb("{:}")
        }
    }
    
    $Key3.DeleteSubKey($KeyPath4)
    If ($Key3.SubKeyCount -eq 0 -and $Key3.ValueCount -eq 0) {
        $Key2.DeleteSubKey($KeyPath3)
    }
}

#Set-PinTaskbar("C:\windows\system32\notepad.exe");
#Set-PinTaskbar("C:\windows\system32\calc.exe");

{% endhighlight %}