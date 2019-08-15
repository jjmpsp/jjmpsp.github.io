---
title: How to install SQL Server Drivers for Apache and PHP on Windows
tags:
  - apache
  - windows
  - php
  - drivers
  - sqlsrv
---

If you're getting errors in your PHP application when running ```sqlsrv_``` functions, such as ```sqlsrv_connect()``` or ```sqlsrv_query()```, this is more than likely because Microsoft's Drivers for PHP for SQL Server have been mis-configured, or haven't been installed yet in Apache.

Installing the drivers is pretty straightforward if you've got a guide in front of you, which is exactly what this post aims to cover.

<!--more-->

Some of the most common errors people face when installing Microsoft's Drivers for PHP for SQL Server are:
- Editing the wrong php.ini file (we've all done it!) To ensure we're editing the correct file, place a phpinfo.php file on your server (but remember to delete it once you're done with it!).
Forgetting to restart Apache.


When installing extensions, you should ensure that all compilation parameters match with the environment you're trying to install the extension to.

Here are some environment variables that you need to look out for:

- PHP version
- Architecture (32/64 bits)
- Compiler (VC9, VC10, VC11...)
- Thread safety

Source of ```phpinfo.php```:
```
<?php
    phpinfo(); // This displays a fancy table showing all environment configurations.
```

Locate your PHP.ini file and add the following line to your 

```
extension=php_sqlsrv_72_ts.dll  
```

Now restart apache.

You should now see ````sqlsrv```` listed in your PHP configuration file 


If you don't see sqlsrv support in the list then you may have configured something incorrectly. Be sure that you're definitely using the correct .dll for your installation.

That concludes this post and I hope you can now successfully install Microsoft's Drivers for PHP for SQL Server on your own Windows Servers.