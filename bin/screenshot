#!/bin/bash

set -euf -o pipefail

case $1 in
    desktop)
        target=~/.config/i3/screenshots/$(date -Iseconds).jpg
        maim -u -m 9 $target
        notify-send -i camera-photo "Desktop screenshot" "Saved in ${target##*/}"
        echo -n $target | xclip -selection clipboard
        ;;
    window)
        maim -u -s -b 5 -l -c 0.3,0.4,0.6,0.4 \
            | xclip -selection clipboard -t image/png
        notify-send -i camera-photo "Screenshot" "Saved to clipboard"
        ;;
esac
