# MoodPalette-5-Daily-Mood-Tracker

Description:
A simple and visually appealing web app that allows users to log their daily moods and view them as a colorful calendar heatmap.

## Tech Stack
- React

## Requirements
- Mood selection interface (Hint: Use emoji or color buttons for mood selection)
- Calendar heatmap display (Hint: Map moods to colors and show them on a monthly grid)
- Local storage persistence (Hint: Save moods locally so data stays after refresh)

## Installation
1. Clone the repository:
   bash
   git clone https://github.com/your-username/MoodPalette-5-Daily-Mood-Tracker.git
   cd MoodPalette-5-Daily-Mood-Tracker
   
2. Install dependencies:
   bash
   npm install
   
3. Start the development server:
   bash
   npm start
   

No additional environment variables are required for local storage.

## Usage
1. Open your browser and navigate to `http://localhost:3000`.
2. Select your mood for the current day using the emoji/color buttons.
3. View your logged moods in the calendar heatmap below.
4. Refresh the page to confirm that your mood entries persist.

## Implementation Steps
1. Initialize the React application using Create React App.
2. Create a `MoodSelector` component to display emoji/color buttons for mood selection.
3. Create a `CalendarHeatmap` component to render a monthly grid, mapping moods to colors.
4. Implement state management in the main `App` component to track daily mood entries.
5. Save and retrieve mood data to/from `localStorage` on state updates and app load.
6. Add CSS styles for a visually appealing interface and responsive layout.
7. Test the app by logging different moods and ensuring data persists across reloads.