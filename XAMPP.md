# Running a local installation under XAMPP

This page provides details on how to get a typical course site based on CourseLib
copied locally and running under Xampp. Once you have that up and running, you 
can do whatever you want to the site locally. Then you can either push to the site
itself or push to GIT and someone can update the production site to match. 

It will be much easier to help support a course and develop course material and 
assignments if you can run the course locally. 

You will need to Install the following applications:
Xampp (https://www.apachefriends.org/index.html) (at least version 8.2.4)
Composer (https://getcomposer.org/)
Node.js (https://nodejs.org/en/, use the LTS version)
Yarn (https://yarnpkg.com/lang/en/)

You will need to configure a Github personal access token for composer. 
See: https://www.previousnext.com.au/blog/managing-composer-github-access-personal-access-tokens

You will be provided a course GIT, such as https://git.cse.msu.edu/cbowen/cse335.git

This page will assume the course cse335, but substitute the correct number for the course you are working on.

After you clone the repository, you'll need to add in the provided file `site.php` in the root 
directory. 

Edit site.php and add yourself as a site admin by adding a line like this near the end of the file:

```
$site->users->addUser('cbowen', 'Owen, Charles',  CL\Users\User::ADMIN);
```

*I find it easiest to load the site into PHPStorm, which is free for educational. There is a 
terminal window that really helps load things.*

You will need composer installed on your system. You can use composer from the commmand line directly if you use
the Windows installer or if you follow the instructions on the page on how to install for a Mac or Linux system: https://getcomposer.org/download/

Using the terminal, type these commands:

```
composer install
# (for developers: composer --perfer-install=source install)
composer update
composer update
composer run cl-installer
```

Yes, you do `composer update` twice. 

That should install all components of the system and create a runnable site.

If you get an error when running cl-installer:
	
1. Uncomment this line in \xampp\php\php.ini:
```
		extension=php_openssl.dll
```
2. Add this environment variable, using your xampp path:
```
		Name: OPENSSL_CONF
		Value: C:\xampp8.4\apache\conf\openssl.cnf
```

You need a local domain name: `cse335.localhost` Add the following to the hosts files on your system. 
Under Windows that will be C:\Windows\System32\drivers\etc\hosts, on a Mac it is /etc/hosts

```
127.0.0.1  localhost
127.0.0.1  cse335.localhost
```

Edit the file etc/httpd.conf and ensure this line is not commented out:

`Include etc/extra/httpd-vhosts.conf`

In that same file, find this section (this may only be required under MacOS):

```
<IfModuleunixd_module>
#
#Ifyouwishhttpdtorunasadifferentuserorgroup,youmustrun
#httpdasrootinitiallyanditwillswitch.
#
#User/Group:Thename(or#number)oftheuser/grouptorunhttpdas.
#Itisusuallygoodpracticetocreateadedicateduserandgroupfor
#runninghttpd,aswithmostsystemservices.
#
User daemon
Group daemon
</IfModule>
```

Change the User from "daemon" to your user ID on the system. 

Then edit the file `httpd-vhosts.conf`. In the Xampp system it is located in: etc/extra

Add these lines:

```
<VirtualHost *:80>
    ServerAdmin charl@cse.msu.edu
    DocumentRoot "C:\Users\charl\Documents\Classes\CSE335\web"
    ServerName cse335.localhost
    ServerAlias www.cse335.localhost
    ErrorLog "logs/cse335.localhost-error.log"
    CustomLog "logs/cse335.localhost-access.log" combined
    <Directory "C:\Users\charl\Documents\Classes\CSE335\web">
		Options Indexes FollowSymLinks Includes ExecCGI
		AllowOverride All
		Order allow,deny
		Allow from all
		Require all granted
    </Directory>
</VirtualHost>
```

You’ll need to update the paths as appropriate for your system. 
 
You should be able to browse to http://cse335.localhost It will complain that that it can’t connect to the database.
 
Open PhpMyadmin by browsing to http://localhost/phpmyadmin. Create a new database named **cse335**. Click on it on the 
left and choose the Privileges tab. Add a user:

```
User name: cse335
Host name: localhost
Privileges: All privileges (Check all)
Password: (see the site.php file for the password to use)
``` 

Now browse to: http://cse335.localhost/cl/setup/tables
 
That will create all of the tables and the site should work. When logging on locally, 
you just leave the password blank. The tables will be empty, so you’ll need to create 
yourself in the local system along with any other users you want.
 
I have in the past exported the tables from the live site and loaded them locally as well, 
but it’s hard to get the encodings to completely work for that.

The only other thing you’ll need to do to run the site locally is to enter yourself as an 
admin. The addition to site.php that makes you an admin only gets you logged onto the system.
 
Go to Course Console. Choose the Management tab. Click on Members. Click Add Member and add yourself. Be sure to set yourself as an Admin. 
 
Then log off and back on.
 
Hopefully you’ll have the local site running at this point. 
