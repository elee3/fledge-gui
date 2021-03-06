
### Create RPM package

Make sure [RHEL/ CentOS prerequisites](prerequisite-redhat.md), [rpm-build and other packages](https://rpm-packaging-guide.github.io/#prerequisites) are installed.

Use `sudo ./make_rpm` script to create RPM package, the package will be placed in `packages/build/`

```
$sudo ./make_rpm
Red Hat
The package root directory is         : /home/fledge/fledge-gui
The Fledge gui version is            : 1.6.0
The package will be built in          : /home/fledge/fledge-gui/packages/build
The package name is                   : fledge-gui-x.y.z

INFO:  Cleaning the build and dependencies ...
yarn run v1.3.2
$ rm -rf dist && rm -rf node_modules && yarn cache clean
success Cleared cache.
Done in 1.98s.
INFO:  Installing dependencies ...
yarn install v1.3.2
[1/4] Resolving packages...
[2/4] Fetching packages...
...

Done in 320.72s.
INFO:  Creating production build ...
yarn run v1.3.2
$ ng build --prod --build-optimizer
.....

Done in 56.37s.
INFO:  Build distribution contents  ...
...
4.0K    dist/fledge.html
1.2M    dist/main.104c5596418ab60d3be6.js
64K     dist/polyfills.69e1297e41447c327ff4.js
...
INFO   Size: 8.0M       dist
INFO:  Removing unwanted contents ...
INFO:  Deployable dist size   2.4M      dist
Copying custom nginx conf file ...
INFO:  Creating compressed build artifacts for release ...
Created fledge-gui-x.y.z.tar.gz
INFO:  Done.
Populating the package and updating version file...
Done.
Copy build artifacts for nginx webroot directory...
Done.
Building the new rpm package...
Processing files: fledge-gui-x.y.z-1.x86_64
Provides: fledge-gui = x.y.z-1 fledge-gui(x86-64) = x.y.z-1
...
Wrote: /fledge-gui/packages/build/fledge-gui-x.y.z/RPMS/x86_64/fledge-gui-x.y.z-1.x86_64.rpm
Done.

```

> You may want to check the created RPM package content with `sudo rpm -qplv fledge-gui-x.y.z-1.x86_64.rpm`


### Installing rpm package

**Install and enable the EPEL rpm package**

```
sudo yum install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
sudo yum -y update
```

```
$ cp packages/build/fledge-gui-x.y.z/RPMS/x86_64/fledge-gui-x.y.z-1.x86_64.rpm /var/cache/yum/x86_64/.

$ yum install /var/cache/yum/x86_64/fledge-gui-x.y.z-1.x86_64.rpm
```

> In case of local install, the `nginx` package should be installed first i.e. `sudo yum install nginx`.

### Uninstalling rpm package

```
$ yum list installed | grep fledge-gui
$ yum remove fledge-gui.x86_64
```
