## AstroSight

AstroSight is an interactive React application tailored to deliver personalized daily horoscope predictions based on users' zodiac signs. With its intuitive interface and seamless integration, AstroSight provides an engaging experience for users keen on exploring their daily astrological insights.

### Features

#### Zodiac Sign Selection
AstroSight offers users a comprehensive list of zodiac signs to choose from, ensuring personalized horoscope predictions tailored to individual astrological profiles.

#### Dynamic Horoscope Display
Upon selecting a zodiac sign, AstroSight dynamically fetches and presents the corresponding horoscope prediction for the current day. Users can seamlessly navigate through the app to explore daily insights specific to their zodiac signs.

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
   Open your preferred web browser and go to [http://localhost:3000](http://localhost:3000) to experience AstroSight in action.

### Dependencies

- **React**: The core JavaScript library used for building the user interface and handling interactions.
- **Python**: Utilized for backend tasks, specifically for fetching horoscope data from external sources.

### File Structure

- **App.js**: The primary React component responsible for rendering the user interface and managing application state.
- **GetHoroscope.js**: A dedicated component for fetching and displaying horoscope data based on the selected zodiac sign.
- **App.css**: Cascading Style Sheets (CSS) file containing styles for enhancing the visual presentation of the application.
- **horoscope.py**: Python script tasked with fetching horoscope data from the Astrology.com website and persisting it into a JSON file for retrieval by the front-end application.

### Contributing

AstroSight welcomes contributions from the community. Whether it's bug fixes, feature enhancements, or other improvements, feel free to submit pull requests. For significant changes, it's recommended to open an issue to discuss potential alterations beforehand.

### License

AstroSight is licensed under the MIT License, granting users the freedom to modify and distribute the codebase in accordance with the terms outlined in the license agreement.
