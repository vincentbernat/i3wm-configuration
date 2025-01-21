// Preferences for Firefox. To be symlinked in the profile as user.js.
// Settings synced through Firefox Accounts may not be present.

// Theme
user_pref("extensions.activeThemeID", "firefox-compact-dark@mozilla.org");
user_pref("layout.css.prefers-color-scheme.content-override", 1); // light

// Fonts
user_pref("font.name.monospace.x-western", "Source Code Pro");
user_pref("font.name.monospace.x-unicode", "Source Code Pro");
user_pref("font.name.sans-serif.x-western", "Source Sans Pro");
user_pref("font.name.sans-serif.x-unicode", "Source Sans Pro");
user_pref("font.name.serif.x-western", "Source Serif Pro");
user_pref("font.name.serif.x-unicode", "Source Serif Pro");

// Ensure context menus stay open after left-click (useful when scale
// == 1.5)
user_pref("ui.context_menus.after_mouseup", true);

// Don't display menubar when pressing Alt
user_pref("ui.key.menuAccessKeyFocuses", false);
// Keep GTK keybindings
user_pref("ui.key.use_select_all_in_single_line_editor", false);

// Don't beep when using type ahead find
user_pref("accessibility.typeaheadfind.enablesound", false);

// Be more compact
user_pref("browser.uidensity", 1);

// No popup at all!
user_pref("browser.link.open_newwindow.restriction", 0);

// Search settings
user_pref("browser.search.region", "FR");
user_pref("browser.search.suggest.enabled", false);

// Homepage is newtab. On launch, restore session.
user_pref("browser.startup.homepage", "about:newtab");
user_pref("browser.startup.page", 3);

// Sort tabs by recently used
user_pref("browser.ctrlTab.sortByRecentlyUsed", true);

// Languages
user_pref("intl.accept_languages", "en");

// Disable pocket
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("extensions.pocket.enabled", false);

// Don't recommend extensions
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.discovery.enabled", false);

// Backspace is like back
user_pref("browser.backspace_action", 0);

// Don't allow detaching a tab by pulling it
user_pref("browser.tabs.allowTabDetach", false);

// Don't display a close button for tabs
user_pref("browser.tabs.tabClipWidth", 1000);

// Don't display fullscreen warning
user_pref("full-screen-api.warning.timeout", 0);
user_pref("full-screen-api.transition.timeout", 0);

// Don't autoplay videos (except when no audio)
user_pref("media.autoplay.default", 1);

// And VAAPI decoding with ffmpeg
user_pref("media.ffmpeg.vaapi.enabled", true);

// Legacy indicator is buggy (no content)
user_pref("privacy.webrtc.legacyGlobalIndicator", false);
user_pref("privacy.webrtc.globalMuteToggles", true);

// Disable DoH for now
user_pref("network.trr.mode", 5);

// Disable auto-update
user_pref("app.update.auto", false);
user_pref("app.update.interval", 259200);

// Let beacon enabled. This is disabled by uBlock Origin.
user_pref("beacon.enabled", true);

// Disable annoying prompts
user_pref("browser.aboutConfig.showWarning", false);
user_pref("browser.disableResetPrompt", true);
user_pref("browser.tabs.firefox-view", false);

//Don't close on last tab
user_pref("browser.tabs.closeWindowWithLastTab", false);

// Don't allow sites to override shortcurs
user_pref("permissions.default.shortcuts", 2);

// Disable safebrowsing malware (sends hash of each file to Google)
user_pref("browser.safebrowsing.malware.enabled", false);

// Don't trim URLs
user_pref("browser.urlbar.trimURLs", false);

// Don't show recent searchs
user_pref("browser.urlbar.suggest.recentsearches", false);

// Don't offer translating
user_pref("browser.translations.automaticallyPopup", false);
user_pref("browser.translations.panelShown", true);

// Enable userContent.css (disabled)
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", false);

// Disable some telemetry stuff releated to search engines
user_pref("browser.search.serpEventTelemetry.enabled", false);
user_pref("browser.search.serpEventTelemetryCategorization.enabled", false);

// Disable anonymized tracker
user_pref("dom.private-attribution.submission.enabled", false);
