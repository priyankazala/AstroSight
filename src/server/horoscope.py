import requests
import json
from bs4 import BeautifulSoup
from flask import Flask
import schedule
import time
import json
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def get_horoscope(sunsign):
    # Construct the URL for fetching the horoscope
    url = f'https://www.astrology.com/horoscope/daily/{sunsign.lower()}.html'

    # Send GET request to the URL
    response = requests.get(url)
   

    # Check if the request was successful
    if response.status_code == 200:
        try:
                # Parse the HTML response
            soup = BeautifulSoup(response.content, 'html.parser')
        
            # Find the element containing the horoscope text
            content = soup.find('div', id='content')
                # Check if content is found
            if content:
                    # Extract the text
                    horoscope_text = content.text.strip()
                    # Construct dictionary for JSON
                    horoscope_data = {'sunsign': sunsign, 'horoscope': horoscope_text}
                    
                    return horoscope_data
            else:
                return {"error": "Horoscope content not found"}
        except Exception as e:
            return {"error": f"An error occurred: {str(e)}"}
    else:
        return {"error": f"Failed to fetch data. Status code: {response.status_code}"}

@app.route('/getdata')

def main():

    horoscope =[]
    sunsigns = [
        "Aries",
        "Taurus",
        "Gemini",
        "Cancer",
        "Leo",
        "Virgo",
        "Libra",
        "Scorpio",
        "Sagittarius",
        "Capricorn",
        "Aquarius",
        "Pisces"
    ]

    for sign in sunsigns:
        result = get_horoscope(sign)
        horoscope.append(result)
    

    d_path = '../assets'

    if not os.path.exists(d_path):
        os.makedirs(d_path, exist_ok=True)
        
    file_path = os.path.join(d_path,"horoscope.json")

    # Write JSON data to the file
    with open(file_path, 'w') as json_file:
        json.dump(horoscope, json_file, indent= 4)


# # Schedule the task for 00:03
# schedule.every().day.at("04:49").do(main)
if __name__ == '__main__':
    app.run(debug=False)



