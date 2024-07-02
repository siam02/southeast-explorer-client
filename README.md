# Southeast Explorer

Welcome to Southeast Explorer, your go-to platform for exploring the captivating beauty of Southeast Asia and beyond!

## Live Site
[https://southeast-explorer.web.app/](https://southeast-explorer.web.app/)

## Features

- **Responsive Design**: Seamlessly browse on all devices - desktop, tablet, and mobile.
- **Secure Authentication**: Utilize password and email-based authentication for login and registration.
- **Social Login**: Sign in with Google or GitHub for added convenience.
- **Private Routes**: Access private routes without being redirected to the login page upon reloading.
- **Environment Variables**: Safeguard sensitive Firebase config keys and MongoDB credentials with environment variables.
- **Dark/Light Theme Toggle**: Toggle between dark and light themes to suit your preference.
- **Adventure Escapes**: Explore thrilling adventures and adrenaline-pumping activities with our curated selection of adventure escapes.
- **Why Choose Us**: Discover why Southeast Explorer is your best choice for unforgettable journeys with expert guides, customized experiences, and top-notch safety measures.
- **Tourist Spot Management**: Add, update, and delete tourist spots, with detailed information including image, name, location, cost, seasonality, and more.
- **Sortable Tourist Spots**: Sort tourist spots based on average cost to find the perfect destination for your budget.
- **My List**: View and manage your personal list of added tourist spots in a convenient tabular format.


## Technology Used

- ReactJS
- HTML
- CSS
- JavaScript
- TailwindCSS
- Firebase
- DaisyUI
- Vite

## Installation

1. Clone the repository:

```bash
git clone https://github.com/siam02/southeast-explorer-client.git
```

2. Install dependencies:
```bash
cd southeast-explorer
npm install
```

3. Create a .env.local file in the root directory and add your Firebase config keys:

```env
VITE_APIKEY=your-firebase-api-key
VITE_AUTHDOMAIN=your-firebase-auth-domain
VITE_PROJECTID=your-firebase-project-id
VITE_STORAGEBUCKET=your-firebase-storage-bucket
VITE_MESSAGINGSENDERID=your-firebase-messaging-sender-id
VITE_APPID=your-firebase-app-id
```

4. Start the development server:
 ```bash
npm run dev
```

5. Visit http://localhost:3000 in your browser to view the application.
