#!/usr/bin/env python3

"""Get current weather condition and forecast for Polybar."""

import requests
import logging
import argparse
import sys
import os
import subprocess
import time
from systemd import journal

logger = logging.getLogger("polybar-weather")


def get_location():
    """Return current location as latitude/longitude tuple."""
    logger.debug("query ip-api.com for location")
    r = requests.get("http://ip-api.com/json")
    r.raise_for_status()
    data = r.json()
    logger.debug("current location data: %s", data)
    logger.info(f'current location: {data["city"]}, {data["country"]}')
    return ((data["lat"], data["lon"]), data["city"])


def get_weather(apikey, latitude, longitude):
    """Return data from openweathermap."""
    logger.debug("query openweathermap for %s, %s", latitude, longitude)
    r = requests.get(
        f"https://api.openweathermap.org/data/2.5/onecall",
        params={
            "appid": apikey,
            "lat": latitude,
            "lon": longitude,
            "units": "metric",
            "exclude": "minutely,hourly",
        },
    )
    r.raise_for_status()
    data = r.json()
    logger.debug("weather data: %s", data)
    return data


def format_weather(data, show_temperature=True):
    """Translate OWM icon to WeatherIcons."""
    # https://erikflowers.github.io/weather-icons/
    icon = data["weather"][0]["icon"]
    temperature = data["temp"] if show_temperature else 0
    if icon == "01d" and temperature > 32:
        icon = ""
    else:
        icon = {
            "01d": "",  # Clear sky - day
            "01n": "⏾",  # Clear sky - night
            "02d": "🌤",  # Few clouds (11-25%) - day
            "02n": "",  # Few clouds (11-25%) - night
            "03d": "⛅",  # Scattered clouds (25-50%) - day/night
            "03n": "",  # Scattered clouds (25-50%) - day/night
            "04d": "",  # Broken / Overcast clouds (51-84% / 85-100%) - day/night
            "04n": "",  # Broken / Overcast clouds (51-84% / 85-100%) - day/night
            "09d": "🌦",  # Shower rain - day
            "09n": "",  # Shower rain - night
            "10d": "",  # Moderate / heavy rain - day
            "10n": "",  # Moderate / heavy rain - night
            "11d": "",  # Thunderstorm - day
            "11n": "",  # Thunderstorm - night
            "13d": "",  # Snow - day
            "13n": "❄",  # Snow - night
            "50d": "",  # Fog - day
            "50n": "🌫",  # Fog - night
        }.get(icon, "")
    output = ["%{Tx}", icon, "%{T-}"]
    if show_temperature:
        output += [" ", str(int(round(temperature))), "°C"]
    return "".join(output)


def update_status(status, output):
    """Update current status."""
    # Write it to file
    with open(output, "w") as f:
        f.write(status)

    # Send it to polybar
    subprocess.run(["polybar-msg", "action", f"#weather.send.{status}"], check=True)


if __name__ == "__main__":
    # Parse
    description = sys.modules[__name__].__doc__
    parser = argparse.ArgumentParser(description=description)
    parser.add_argument(
        "--debug",
        "-d",
        action="store_true",
        default=False,
        help="enable debugging",
    )
    parser.add_argument(
        "--owm-api-key",
        default=os.environ.get("OWM_API_KEY"),
        help="OpenWeatherMap API key",
    )
    parser.add_argument(
        "--font-index", default=3, type=int, help="Font Awesome 1-index"
    )
    parser.add_argument(
        "--output",
        default=f"{os.environ['XDG_RUNTIME_DIR']}/i3/weather.txt",
        help="Output destination",
    )
    parser.add_argument(
        "--online-timeout",
        default=30,
        type=int,
        help="Wait up to TIMEOUT minutes to be online",
    )
    options = parser.parse_args()

    # Logging
    root = logging.getLogger("")
    root.setLevel(logging.WARNING)
    logger.setLevel(options.debug and logging.DEBUG or logging.INFO)
    if sys.stderr.isatty():
        ch = logging.StreamHandler()
        ch.setFormatter(logging.Formatter("%(levelname)s: %(message)s"))
        root.addHandler(ch)
    else:
        root.addHandler(journal.JournalHandler(SYSLOG_IDENTIFIER=logger.name))

    try:
        # Get location
        while True:
            try:
                location, city = get_location()
                break
            except requests.exceptions.ConnectionError:
                # Wait to be online
                logger.info("not online, waiting")
                update_status("", options.output)
                time.sleep(5)
                process = subprocess.run(
                    ["nm-online", "-q", "-t", str(options.online_timeout * 60)]
                )
                if process.returncode != 0:
                    logger.warning("not online, exiting")
                    sys.exit(1)

        # Grab current weather and daily forecast
        weather = get_weather(options.owm_api_key, *location)
        daily_weather_ts = time.strftime(
            "%Y-%m-%d %H:%M %Z", time.gmtime(weather["daily"][0]["dt"])
        )
        description = weather["current"]["weather"][0]["description"]
        logger.info(f"current weather at {city}: {description}")
        logger.info(f"daily forecast: {daily_weather_ts}")

        # Format output
        conditions = [format_weather(weather["current"])]
        conditions += [
            format_weather(weather["daily"][0], False),
            "{}—{}°C".format(
                round(weather["daily"][0]["temp"]["min"]),
                round(weather["daily"][0]["temp"]["max"]),
            ),
        ]
        conditions.insert(0, f"%{{F#888}}%{{Tx}}%{{T-}} {city}%{{F-}}")
        output = " ".join(conditions).replace("%{Tx}", "%%{T%d}" % options.font_index)
        logger.debug("output: %s", output)

        update_status(output, options.output)

    except Exception as e:
        logger.exception("%s", e)
        sys.exit(1)
    sys.exit(0)
