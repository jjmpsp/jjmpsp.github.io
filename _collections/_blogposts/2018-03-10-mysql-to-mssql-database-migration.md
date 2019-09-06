---
title: MySQL to MS SQL Database Migration (without SSMA)
tags:
  - database
  - migration
  - mysql
  - mssql
  - php
description: Sample code demonstrating how to loop over any collection type in Jekyll
ogDescription: Sample code demonstrating how to loop over any collection type in Jekyll
---

This post describes methods you can use to migrate a MySQL database to MSSQL (Microsoft SQL) with the least amount of effort

<!--more-->

If you're in a situation where you need to migrate a mysql database to a mssql database then 

If you're looking for the reverse of this process (MSSQL to MySQL) then you should probably be using SSMA as this is Microsoft's own tool for performing this operation.


Your first thought would be to to configure a MySQL install on the secondary box but the setup isn't quite as simple as this.

SSMA does NOT support Database migrations to Microsoft Server 2008. Why? Because the tool was written when MSSQL Server 2008 was already deprecated.

There are a few things you have to keep in mind with database backup and restore software:
1. The progress indicators are pretty dire. Some softwares do have progress reporting built in, but unless you're running on a Unix operating system you won't have access to pipes for reporting total file size.
2. Restores can fail for a number of reasons. If you already have data inside a database then there's a possibility that you may be trying to reinsert data that violates a unique key (e.g an ID or a Username)

To add even more complexity to the situation, you then have to consider that there are different flavours of SQL syntax used across different installations. E.g. MySQL uses Oracle SQL and Microsoft SQL uses T-SQL syntax.
This means the migration isn't a direct 1:1 mapping and you'll need to make some changes to the syntax before attempting to restore data to another database.




What does a migration actually involve?
Before completing a migration from one Database Engine to another (in this case MySQL to MSSQL) it's important to understand the process that should be carried out.

Understanding why a database migration needs to be performed:
You may be wondering why 


