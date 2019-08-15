---
title: Organising backups in a monthly folder structure with Powershell
tags:
  - powershell
  - organised
  - backups
  - monthly
  - archive
---

Today I want to share a super handy Powershell snippet for creating monthly archives

<!--more-->

```
$LogArchiveDirectory = "G:\_awstats_temp"

get-childitem | % {

    $file = $_.FullName
    $date = Get-Date ($_.LastWriteTime)
    $month = $date.month
    $year = $date.year

    new-item -type Directory -path "$LogArchiveDirectory\$year\$month" -Force
    move-item $file "$LogArchiveDirectory\$year\$month"
}
```

