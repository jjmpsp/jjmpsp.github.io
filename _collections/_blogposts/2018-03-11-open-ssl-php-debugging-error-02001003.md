---
title: Debugging OpenSSL Error 02001003 in PHP 
tags:
  - openssl
  - php
  - error
  - fix
description: Sample code demonstrating how to loop over any collection type in Jekyll
ogDescription: Sample code demonstrating how to loop over any collection type in Jekyll
---

````
error:02001003:system library:fopen:No such process
````

<!--more-->

Today I've been working on a feature which requires secure communication. For this, Public/Private keypair generation process is used to 
The OpenSSL library is a really good library for this purpose, but its implementation with PHP is not so good due to the library just being a wrapper pointing to the actual OpenSSL binary.
This makes it extremely hard to pinpoint errors due to there being no single point for source code as the OpenSSL binary is compiled.

In the script I've been developing I kept seeing the following errors:

```
Creation of Private Certificate failed.
error:02001003:system library:fopen:No such process
error:2006D080:BIO routines:BIO_new_file:no such file
error:0E064002:configuration file routines:CONF_load:system lib
error:02001003:system library:fopen:No such process
error:2006D080:BIO routines:BIO_new_file:no such file
error:0E064002:configuration file routines:CONF_load:system lib
error:02001003:system library:fopen:No such process
error:2006D080:BIO routines:BIO_new_file:no such file
error:0E064002:configuration file routines:CONF_load:system lib
error:02001003:system library:fopen:No such process
error:2006D080:BIO routines:BIO_new_file:no such file
error:0E064002:configuration file routines:CONF_load:system lib
```

After hours of searching the internet and debugging various scripts in multiple environments,

So how do you debug such an issue with OpenSSL in PHP?

```
phpinfo();
```

Remember, this code should never be hosted on a production server unless you know what you're doing!

````
error_reporting(E_ALL | E_STRICT);   // NOT FOR PRODUCTION SERVERS!
ini_set('display_errors', '1');         // NOT FOR PRODUCTION SERVERS!
````

Now if you run your OpenSSL script again you should see some output similar to the following:

```
Warning: openssl_csr_sign(): cannot get CSR from parameter 1 in 
C:\web\auth\saml2\setuplib.php on line 81 

Warning: openssl_x509_export(): cannot get cert from parameter 1 in 
C:\web\auth\saml2\setuplib.php on line 82 

Warning: openssl_pkey_export(): cannot get key from parameter 1 in 
C:\web\auth\saml2\setuplib.php on line 83 

Warning: openssl_pkey_export(): cannot get key from parameter 1 in 
C:\web\auth\saml2\setuplib.php on line 84 

Warning: openssl_csr_sign(): cannot get CSR from parameter 1 in 
C:\web\auth\saml2\setuplib.php on line 81 

Warning: openssl_x509_export(): cannot get cert from parameter 1 in 
C:\web\auth\saml2\setuplib.php on line 82 

Warning: openssl_pkey_export(): cannot get key from parameter 1 
in C:\web\auth\saml2\setuplib.php on line 83 

Warning: openssl_pkey_export(): cannot get key from parameter 1 in 
C:\web\auth\saml2\setuplib.php on line 84
```

