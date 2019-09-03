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

If this link dies in future for whatever reason, just do a quick Google search for your PHP version:

'PHP Version 7.3.6'

'sqlsrv drivers 7.3'


Compiler	MSVC15 (Visual C++ 2017)
Architecture	x64
Debug Build	no
Thread Safety	enabled
Thread API	Windows Threads


To locate your extensions directory, check php.ini output:
extension_dir	C:/Users/joel/Desktop/Bitnami/php/ext	C:/Users/jo209050/Desktop/Bitnami/php/ext


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

In this particular example, I am using a custom Bitnami installation as my environment, so my config file is located at:

Loaded Configuration File	C:\Users\joel\Desktop\Bitnami\php\php.ini

Locate your PHP.ini file and add the following line to it: 

```
extension=php_sqlsrv_73_ts.dll  
```

extension=php_sqlsrv_73_ts_x64.dll  

Now restart apache.

C:\Users\joel\Desktop\Bitnami\apache2\bin>httpd.exe -n "moodleApache-1" -k restart

You should now see ````sqlsrv```` listed in your PHP configuration file 

Now copy the .dll files to your extensions directory:
C:\Users\joel\Desktop\Bitnami\php\ext


If you don't see sqlsrv support in the list then you may have configured something incorrectly. Be sure that you're definitely using the correct .dll for your installation.

That concludes this post and I hope you can now successfully install Microsoft's Drivers for PHP for SQL Server on your own Windows Servers.