---
title: Organising backups in a monthly folder structure
tags:
  - powershell
  - organised
  - backups
  - monthly
  - archive
---

If you've ever thought of completing a degree in Computer Science, then chances are you're already interested enough in the topic. But is completing a degree in Computer Science really worth the money?

In this post I will share my personal experience and give you some hints for learning three years of computer science in a single day.

<!--more-->

Today I want to share a super handy Powershell snippet for creating monthly archives

$LogArchiveDirectory = "G:\_awstats_temp"

get-childitem | % {

    $file = $_.FullName
    $date = Get-Date ($_.LastWriteTime)
    $month = $date.month
    $year = $date.year

    new-item -type Directory -path "$LogArchiveDirectory\$year\$month" -Force
    move-item $file "$LogArchiveDirectory\$year\$month"
}