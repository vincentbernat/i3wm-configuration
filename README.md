# Vincent Bernat's i3 configuration

This is my [i3](https://i3wm) configuration. It does not exactly
feature the same keybindings as the default configuration. I don't
recommend using it as-is by you can pick anything you need in it.

![Screenshot](https://d1g3mdmxf8zbo9.cloudfront.net/images/i3/desktop@1x.jpg)

More details in this [blog post](https://vincent.bernat.ch/en/blog/2021-i3-window-manager).

Here some of the things you may be interested in:

 - I use a Python script `bin/wallpaper` to build the wallpaper
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
[Puppet configuration][]. Packages are basically pulled from Debian
unstable.

[Puppet configuration]: https://github.com/vincentbernat/puppet-workstation/blob/master/local-modules/desktop/manifests/i3.pp

However, I am recompiling some stuff to get more recent versions:

 - `i3-gaps` (check `vbe/master` branch)
 - `dunst` (check `vbe/master` branch)
 - `polybar` (check `vbe/master` branch)
 - `picom` (`next` branch)
 - `rofi` (1.7.1)

The binaries are put in `~/.local/bin`.

## Interesting links

 - [/r/unixporn on reddit](https://www.reddit.com/r/unixporn/search?q=i3&restrict_sr=1)
 - [Hacking i3: Automatic Layout](https://aduros.com/blog/hacking-i3-automatic-layout/)
 - [__luccy desktop](https://www.reddit.com/r/unixporn/comments/odlf79/i3gaps_simple_minimal_round/)
 - [SI7Bot desktop](https://github.com/cosmicraccoon/thinky-nature-dots)
