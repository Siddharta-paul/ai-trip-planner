# React + Vite Travel App

## Overview

This project is a modern travel itenary planning application built using React and Vite. It leverages a range of advanced APIs and technologies to provide a comprehensive and interactive experience for users looking to plan their trips. The app integrates with various Google services and Firebase to offer personalized trip itineraries, user authentication, and more.

## Features

### 1. **User Authentication**
- **Google Authentication**: Users can sign in using their Google accounts, which simplifies the authentication process and enhances security.

### 2. **Trip Planning**
- **Create Custom Trips**: Users can create and customize their travel itineraries based on their preferences, budget, and interests.
- **View and Manage Trips**: Users can view details of their trips and manage them efficiently.

### 3. **Personalized Itineraries**
- **Google Gemini API**: Utilizes Google's Gemini API to provide personalized trip recommendations and itinerary suggestions based on user preferences.
- **Google Places API**: Fetches details about various places, including attractions, restaurants, and more, to enrich the travel experience.
- **Google Photos API**: Integrates Google Photos to fetch and display photos related to destinations and trips.

### 4. **User Interface**
- **Responsive Design**: The application features a responsive design that adjusts seamlessly across various screen sizes, ensuring a great user experience on both desktop and mobile devices.
- **Modern UI Components**: Incorporates modern UI elements and styles for an attractive and user-friendly interface, including:
  - Hero section with engaging visuals and calls-to-action.
  - Popovers and dialogs for user interactions.
  - Dynamic card components for displaying trips.

### 5. **Backend Integration**
- **Firebase**: Uses Firebase for backend services, including:
  - **Firestore Database**: Stores user data, trip details, and other relevant information.
  - **Authentication**: Manages user authentication and session handling.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that provides fast development and build processes.
- **Firebase**: A platform by Google for building and managing web and mobile applications.
- **Google APIs**:
  - **Google Gemini API**: For personalized trip recommendations.
  - **Google Places API**: For retrieving details about places.
  - **Google Photos API**: For accessing and displaying photos.
- **Tailwind CSS**: For utility-first CSS styling.
- **Sonner**: For handling toast notifications.

## Getting Started

To get started with this project, follow these steps:

1. **Clone the Repository**

    ```bash
    git clone https://github.com/Siddharta-paul/ai-trip-planner.git
    cd your-repository
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Set Up Environment Variables**

    Create a `.env` file in the root directory and add your environment variables:

    ```env
    VITE_GOOGLE_PLACE_API_KEY=your-google-place-api-key
    VITE_GOOGLE_GEMINI_AI_API_KEY=your-google-gemini-api-key
    VITE_GOOGLE_AUTH_CLIENT_ID=your-google-auth-client-id
    VITE_GOOGLE_FIREBASE_API_KEY=your-firebase-api-key
    VITE_GOOGLE_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
    VITE_GOOGLE_FIREBASE_PROJECT_ID=your-firebase-project-id
    VITE_GOOGLE_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
    VITE_GOOGLE_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
    ```

4. **Run the Development Server**

    ```bash
    npm run dev
    ```

    Visit `http://localhost:5173` in your browser to view the application.

5. **Build for Production**

    ```bash
    npm run build
    ```

    The production build will be available in the `dist` directory.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any suggestions or improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the maintainers of the libraries and APIs used in this project.
- Special thanks to the open-source community for their contributions.
