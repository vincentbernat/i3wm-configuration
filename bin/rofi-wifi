#!/bin/sh

# Wifi selection menu with rofi

if [ -z "${ROFI_OUTSIDE}" ]; then
    yoffset=$(( $(xrdb -query | sed -n 's/^Xft.dpi:\t\([0-9]*\)$/\1/p')*20/96 ))
    exec rofi -show-icons -no-custom -modi m:$0 -show m -location 3 -yoffset $yoffset
fi

case $ROFI_RETV in
    0)
        # Prompt
        printf "\00prompt\037wifi\n"
        printf "\00markup-rows\037true\n"

        case $(nmcli radio wifi) in
            enabled)
                printf "Turn wifi off\00info\037off\n"
                printf "Scan wifi networks...\00info\037rescan\n"
                ;;
            disabled)
                printf "Turn wifi on\00info\037on\n"
                ;;
        esac

        nmcli -f IN-USE,SSID,BSSID,SECURITY,FREQ,SIGNAL -m multiline device wifi list --rescan no \
            | sed -e 's/&/\&amp;/g' -e 's/</\&lt;/g' \
            | awk -F': *' '{
                             property=$1;
                             value=gensub(property ": *", "", 1);
                             p[property]=value;
                           }
                           ($1 == "SIGNAL") {
                             if (p["IN-USE"] == "*") {
                               printf("\00message\x1fConnected to <i>%s</i> (%s, %s, %s%%)\n",
                                      p["SSID"], p["FREQ"], p["SECURITY"], p["SIGNAL"]);
                             } else {
                               printf("%s (<i><small>%s, %s</small></i>)",
                                      p["SSID"], p["FREQ"], p["SECURITY"]);
                               signal=p["SIGNAL"]
                               printf("\00info\x1f%s\x1ficon\x1fnm-signal-%s%s\n",
                                      p["BSSID"],
                                      (signal > 75)?"100":\
                                      (signal > 50)?"75":\
                                      (signal > 25)?"50":\
                                      "00",
                                      (p["SECURITY"] == "--")?"":"-secure");
                             }
                           }'

        ;;
    1)
        case ${ROFI_INFO} in
            rescan)
                >/dev/null nmcli device wifi list --rescan yes
                ;;
            on)
                >&2 nmcli radio wifi on
                >/dev/null nmcli device wifi list --rescan yes
                ;;
            off)
                >&2 nmcli radio wifi off
                ;;
            *)
                >&2 nmcli -w 0 device wifi connect ${ROFI_INFO}
                exit 0
                ;;
        esac
        export ROFI_RETV=0
        exec $0
        ;;
esac
