# Housing-Project
1.Project name - SmartHood
2. Tech stack - MERN stack + ML(python) {Web Dev}
3. Tech stack - React-native + ML(python) {Mob app} 

Brief idea -
It will compare the Housing prices of any particular area around the world and also provide the price in multiple currencies.

Basic structure-
SmartHood/
│── backend/                # Node.js + Express API
│   ├── models/             # Database models (MongoDB)
│   ├── routes/             # API routes
│   ├── controllers/        # Business logic
│   ├── middleware/         # Authentication, logging
│   ├── config/             # Environment variables, DB connections
│   ├── tests/              # Backend testing
│   ├── app.js              # Main server file
│   ├── package.json        # Node dependencies
│── frontend-web/           # React.js web app
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── pages/         # Page-based structure
│   │   ├── styles/        # Global styles (CSS/Tailwind)
│   │   ├── services/      # API calls
│   │   ├── App.js         # Main React component
│   │   ├── index.js       # Entry point
│   ├── package.json       # React dependencies
│── mobile-app/            # React Native mobile app
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── screens/       # Screens (Home, Search, Results)
│   │   ├── navigation/    # React Navigation setup
│   │   ├── services/      # API requests
│   │   ├── App.js         # Main app entry
│   ├── package.json       # Mobile dependencies
│── ml-model/              # ML model for price prediction
│   ├── data/              # Dataset storage
│   ├── notebooks/         # Jupyter notebooks for training
│   ├── model/             # Trained ML model files
│   ├── api/               # FastAPI/Flask for ML deployment
│   ├── requirements.txt   # Python dependencies
│── docs/                  # Documentation (API docs, UML diagrams)
│── .github/               # GitHub workflows for CI/CD
│── .gitignore             # Ignore unnecessary files
│── README.md              # Project overview



