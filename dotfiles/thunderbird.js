// Preferences for Thunderbird. To be symlinked in the profile as user.js.

// Theme
user_pref("extensions.activeThemeID", "thunderbird-compact-dark@mozilla.org");
user_pref("layout.css.prefers-color-scheme.content-override", 1); // light
user_pref("layout.css.color-scheme.enabled", false);
user_pref("msgcompose.default_colors", false);
user_pref("msgcompose.background_color", "#FFFFFF");
user_pref("msgcompose.text_color", "#000000");
user_pref("mail.uidensity", 1);

// Fonts
user_pref("font.name.monospace.x-western", "Source Code Pro");
user_pref("font.name.monospace.x-unicode", "Source Code Pro");
user_pref("font.name.sans-serif.x-western", "Source Sans Pro");
user_pref("font.name.sans-serif.x-unicode", "Source Sans Pro");
user_pref("font.name.serif.x-western", "Source Serif Pro");
user_pref("font.name.serif.x-unicode", "Source Serif Pro");
user_pref("browser.display.use_document_fonts", false);
user_pref("font.minimum-size.x-western", 14);
user_pref("font.minimum-size.x-unicode", 14);
user_pref("font.size.monospace.x-western", 14);
user_pref("font.size.monospace.x-unicode", 14);
user_pref("font.size.variable.x-western", 14);
user_pref("font.size.variable.x-unicode", 14);

// Ensure context menus stay open after left-click (useful when scale
// == 1.5)
user_pref("ui.context_menus.after_mouseup", true);

// Don't display menubar when pressing Alt
user_pref("ui.key.menuAccessKeyFocuses", false);
// Keep GTK keybindings
user_pref("ui.key.use_select_all_in_single_line_editor", false);

// Calendar
user_pref("calendar.alarms.playsound", false);
user_pref("calendar.alarms.show", false);
user_pref("calendar.alarms.showmissed", false);
user_pref("calendar.week.start", 1);

// Dates
user_pref("intl.date_time.pattern_override.date_short", "yyyy-MM-dd");
user_pref("intl.date_time.pattern_override.time_short", "HH:mm");

// Mail
user_pref("mail.biff.alert.show_preview", false);
user_pref("mail.biff.alert.play_sound", false);
user_pref("mail.biff.alert.show_alert", false);
user_pref("mail.collect_email_address_outgoing", false);
user_pref("mail.compose.catchAllHeaders", "envelope-to, x-original-to, to, cc, x-delivered-to");
user_pref("mail.openpgp.allow_external_gnupg", true);
user_pref("mail.operate_on_msgs_in_collapsed_threads", false);
user_pref("mail.phishing.detection.enabled", false);
user_pref("mail.purge.ask", false);
user_pref("mail.server.default.check_all_folders_for_new", true);
user_pref("mail.warn_on_send_accel_key", false);
user_pref("mail.strip_sig_on_reply", false);
user_pref("mailnews.headers.useMinimalUserAgent", true);
user_pref("mailnews.headers.showUserAgent", true);
user_pref("mailnews.default_sort_order", 2);
user_pref("mailnews.default_sort_type", 22);

// Offline
user_pref("offline.download.download_messages", 1);
user_pref("offline.send.unsent_messages", 1);

// Print
user_pref("print.printer_Mozilla_Save_to_PDF.print_bgcolor", true);
user_pref("print.printer_Mozilla_Save_to_PDF.print_bgimages", true);
user_pref("print.printer_Mozilla_Save_to_PDF.print_paper_id", "iso_a4");
user_pref("print.printer_Mozilla_Save_to_PDF.print_paper_size_unit", 0);
user_pref("print.printer_Mozilla_Save_to_PDF.print_paper_width", "8.26771653543307");
user_pref("print.printer_Mozilla_Save_to_PDF.print_paper_height", "11.6929133858268");
