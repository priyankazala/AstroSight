## AstroSight

AstroSight is a React application designed to provide users with daily horoscope predictions based on their zodiac signs.

### Features

- **Zodiac Sign Selection**: Users can choose their zodiac sign from a list of options.
- **Horoscope Display**: Upon selecting a sign, the app fetches and displays the corresponding horoscope prediction for the day.

### Usage

1. **Clone the Repository**:

```bash
git clone https://github.com/your-username/astro-sight.git
```

2. **Navigate to the Project Directory**:

```bash
cd astro-sight
```

3. **Install Dependencies**:

```bash
npm install
```

4. **Start the Development Server**:

```bash
npm start
```

5. **View the Application**:

Open your browser and go to `http://localhost:3000` to see the app in action.

### Dependencies

- React
- `fetch` API for making HTTP requests

### File Structure

- **App.js**: Main component responsible for rendering the UI and handling user interactions.
- **GetHoroscope.js**: Component for fetching and displaying the horoscope data.
- **App.css**: CSS styles for the application.

### API Integration

AstroSight integrates with the "Best Daily Astrology and Horoscope API" to fetch horoscope data based on the selected zodiac sign.

### RapidAPI Key

To use the API, you need to provide a RapidAPI key. Sign up for an account at RapidAPI (https://rapidapi.com/) to obtain your API key. Replace the placeholder key in the `GetHoroscope.js` file with your actual key.

### Credits

- Created by Priyanka Zala.
- Horoscope data fetched from the "Best Daily Astrology and Horoscope API" available on RapidAPI.

### License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to modify and distribute the code according to the terms of the license.