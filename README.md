# Vincent Bernat's i3 configuration

This is my [i3](https://i3wm) configuration. It does not exactly
feature the same keybindings as the default configuration. I don't
recommend using it by you can pick anything you need in it.

Here some of the things you may be interested in:

 - I use a Python script `bin/build-wallpaper` to build the wallpaper
   to be displayed. There is a random selection and it works with
   multihead setup. It seems that classic tools are now able to change
   the wallpaper per screen and therefore, the script may seem a bit
   useless but I keep it.

 - I am using `xss-lock` with `i3lock` as a screensaver. It relies on
   standard X screensaver handling (and therefore is easy for
   application to disable) and also supports systemd
   inhibitors. Nothing fancy but I reuse the wallpaper built above. A
   notification is sent 10 seconds before starting.

 - There is an `i3-companion` (in `bin/`) which I use to implement
   whatever does not match what I want in i3. I prefer to not have
   many Python binaries running.

 - There is a Quake console included.

 - Many stuff is handled by systemd. The session is still expected to
   be handled by Xsession but we invoke a custom `xsession.target`
   which binds to `graphical-session.target`. i3 will then invoke
   `i3-session.target` for stuff needing i3 to run.

Also, I am using my custom terminal (`vbeterm`). You can also find the
sources on [GitHub](https://github.com/vincentbernat/vbeterm).

## Requirements

Required Debian packages to make everything work can be found in my
[Puppet configuration][]. Also, some daemons may be compiled from git
HEAD (`dunst` and `polybar`) to get access to some features.

[Puppet configuration]: https://github.com/vincentbernat/puppet-workstation/blob/master/local-modules/desktop/manifests/i3.pp

## Interesting links

 - [Hacking i3: Automatic Layout](https://aduros.com/blog/hacking-i3-automatic-layout/)
