# Technologies, Libraries, Frameworks & Key Features

## 🛠️ Technologies & Frameworks

### Backend Technologies
- **Python 3.8+** (3.11 recommended, 3.12 compatible)
- **FastAPI** - Modern, fast web framework for building APIs
- **Uvicorn** - ASGI server for FastAPI
- **Pydantic** - Data validation using Python type annotations

### Frontend Technologies
- **React** - JavaScript library for building user interfaces
- **JSX** - JavaScript syntax extension for React
- **Axios** - HTTP client for making API requests
- **Node.js & npm** - JavaScript runtime and package manager

### Deployment & Infrastructure
- **Docker** - Containerization
- **Railway** - Cloud deployment platform
- **Vercel** - Frontend deployment platform
- **Heroku** - Alternative cloud platform (Procfile support)

---

## 📚 Python Libraries & Dependencies

### Core Data Processing
- **pandas** (≥2.2.0) - Data manipulation and analysis
- **numpy** (≥1.26.0) - Numerical computing
- **scikit-learn** (≥1.4.0) - Machine learning library

### Geospatial Processing
- **geopandas** (≥0.15.0) - Geospatial data operations
- **folium** (≥0.16.0) - Interactive maps
- **rasterio** - Geospatial raster I/O (for NASA data)
- **shapely** - Geometric operations

### Machine Learning & NLP
- **transformers** (≥4.40.0) - Hugging Face transformers library
- **torch** (≥2.2.0) - PyTorch deep learning framework
- **scipy** (≥1.12.0) - Scientific computing
- **joblib** (≥1.3.0) - Parallel processing and model persistence

### Data Visualization
- **matplotlib** (≥3.8.0) - Plotting library
- **seaborn** (≥0.13.0) - Statistical data visualization

### Utilities
- **python-dateutil** (≥2.8.0) - Date/time utilities
- **requests** (≥2.31.0) - HTTP library
- **json** - JSON data handling (built-in)

---

## 🧠 Machine Learning Algorithms & Methods

### Clustering Algorithms
- **K-Means Clustering** - Neighborhood clustering from population density data
- **DBSCAN** - Density-based clustering (available in chatbot)
- **Agglomerative Clustering** - Hierarchical clustering (available in chatbot)

### Classification & Regression Models
- **Random Forest Regressor** - Ensemble learning for predictions
- **Gradient Boosting Regressor** - Boosting algorithm for regression
- **Linear Regression** - Basic linear modeling
- **Ridge Regression** - Regularized linear regression
- **Support Vector Regression (SVR)** - Support vector machine for regression
- **MLP Regressor** - Multi-layer perceptron neural network

### Natural Language Processing
- **TF-IDF Vectorizer** - Text feature extraction for intent classification
- **Cosine Similarity** - Text similarity matching
- **Intent Classification** - Pattern-based and ML-based intent recognition

### Data Preprocessing
- **StandardScaler** - Feature standardization
- **MinMaxScaler** - Feature normalization to 0-1 range
- **Train/Test Split** - Data splitting for model validation
- **Cross-Validation** - Model evaluation technique

### Model Evaluation Metrics
- **Mean Squared Error (MSE)** - Regression error metric
- **R² Score** - Coefficient of determination
- **Cross-Validation Scores** - Model performance assessment

---

## 🎯 Key Features

### 1. Data Processing Pipeline
- **Population Density Processing**: Converts raw WorldPop data into neighborhood-level features
- **K-Means Clustering**: Creates 20 neighborhood clusters from geographic coordinates
- **Metric Calculation**: Computes density statistics (mean, max, min, std, quartiles)
- **Neighborhood Mapping**: Maps clusters to actual Seattle neighborhood names
- **Data Export**: Generates JSON files for frontend consumption

### 2. AI Recommendation Engine
- **Weighted Composite Index**: Explainable scoring system
- **5 Planning Scenarios**: 
  - Balanced Development
  - Increase Greenspace
  - Reduce Air Pollution
  - Support Vulnerable Populations
  - Density Management
- **Priority Scoring**: Normalized 0-1 scores with weighted factors
- **Recommendation Generation**: Context-aware recommendations with rationale
- **Score Breakdown**: Transparent explanation of scoring components

### 3. Conversational AI Chatbot
- **Natural Language Processing**: Understands user queries in plain English
- **Intent Classification**: Identifies user intent (development, analysis, comparison, etc.)
- **Context Awareness**: Maintains conversation history and context
- **Multi-Model ML System**: Uses multiple ML models for different tasks
- **Query Pattern Learning**: Learns from user interactions
- **Edge Case Handling**: Handles ambiguous or unclear queries

### 4. REST API
- **FastAPI Framework**: High-performance async API
- **CORS Support**: Cross-origin resource sharing for frontend integration
- **Interactive Documentation**: Auto-generated Swagger/OpenAPI docs
- **Health Checks**: Service status monitoring
- **Error Handling**: Comprehensive error responses

### 5. Advanced ML Features (Chatbot)
- **Density Prediction Model**: Predicts population density changes
- **Development Suitability Model**: Assesses areas for development potential
- **Risk Assessment Model**: Evaluates development risks
- **Neighborhood Classification**: Categorizes neighborhoods by characteristics
- **Feature Importance Analysis**: Identifies key factors in recommendations

---

## 🔧 Key Methods & Functions

### Data Processor (`data_processor.py`)
- `load_data()` - Loads population density JSON data
- `create_neighborhood_clusters(n_clusters=20)` - K-means clustering to create neighborhoods
- `calculate_additional_metrics()` - Computes density quartiles, categories, and planning indicators
- `export_processed_data(output_file)` - Exports processed data to JSON
- `print_summary()` - Displays data processing summary

### Recommendation Engine (`recommendation_engine.py`)
- `load_neighborhoods(json_file_path)` - Loads processed neighborhood data
- `normalize_metric(values, reverse=False)` - Normalizes values to 0-1 scale
- `calculate_priority_scores(scenario)` - Calculates weighted priority scores
- `generate_recommendations(scenario, top_n=10)` - Generates AI recommendations
- `export_recommendations(recommendations, scenario, output_file)` - Exports recommendations
- `_simulate_greenspace_data()` - Simulates greenspace coverage
- `_simulate_air_quality_data()` - Simulates air quality scores
- `_simulate_social_vulnerability_data()` - Simulates social vulnerability

### Chatbot AI (`chatbot_ai.py`)
- `process_query(message)` - Main method to process user queries
- `_initialize_ml_models()` - Initializes all ML models
- `_cluster_neighborhoods()` - Clusters neighborhoods using ML
- `_train_advanced_models()` - Trains density predictor, suitability, risk, and classification models
- `_classify_intent(query)` - Classifies user intent using TF-IDF and cosine similarity
- `_extract_entities(query)` - Extracts entities (numbers, locations) from queries
- `_generate_development_recommendations(query)` - Generates development recommendations
- `_analyze_density(query)` - Performs density analysis
- `_compare_neighborhoods(query)` - Compares neighborhoods
- `_train_density_predictor(features, targets)` - Trains density prediction model
- `_train_development_suitability_model(features, targets)` - Trains suitability model
- `_train_risk_assessment_model(features, targets)` - Trains risk assessment model
- `_train_neighborhood_classifier(features, targets)` - Trains classification model
- `_analyze_feature_importance(features, targets)` - Analyzes feature importance
- `get_conversation_history()` - Returns conversation history
- `clear_history()` - Clears conversation history

### API Server (`api.py`)
- `startup_event()` - Initializes AI engine on server startup
- `root()` - Root endpoint (health check)
- `health_check()` - Health check endpoint
- `get_scenarios()` - Returns available planning scenarios
- `get_recommendations(request)` - POST endpoint for AI recommendations
- `get_neighborhoods()` - Returns all neighborhoods
- `get_neighborhood_details(neighborhood_id)` - Returns specific neighborhood
- `chat_with_ai(request)` - POST endpoint for chatbot interaction
- `get_chat_history()` - Returns conversation history
- `clear_chat_history()` - Clears conversation history
- `apply_filters(recommendations, filters)` - Applies filters to recommendations

### React Component (`UrbanPlanningChatbot.jsx`)
- `checkConnection()` - Checks AI service connection
- `sendMessage()` - Sends message to AI service
- `handleKeyPress(e)` - Handles Enter key press
- React Hooks:
  - `useState` - State management
  - `useEffect` - Side effects (connection check, auto-scroll, message limiting)

---

## 📊 Data Structures

### Neighborhood Data Structure
```python
{
    'neighborhood_id': int,
    'neighborhood_name': str,
    'total_points': int,
    'mean_density': float,
    'max_density': float,
    'min_density': float,
    'density_std': float,
    'centroid_lat': float,
    'centroid_lon': float,
    'high_density_ratio': float,
    'low_density_ratio': float,
    'population_density': [float],
    'latitudes': [float],
    'longitudes': [float],
    'density_quartiles': {'q1': float, 'q2': float, 'q3': float},
    'density_categories': {...},
    'planning_indicators': {...}
}
```

### Recommendation Structure
```python
{
    'neighborhood_id': int,
    'priority_rank': int,
    'priority_score': float,
    'mean_density': float,
    'recommendations': [str],
    'rationale': [str],
    'score_breakdown': {
        'density': float,
        'greenspace': float,
        'air_quality': float,
        'vulnerability': float
    },
    'location': {'lat': float, 'lon': float}
}
```

### Chat Response Structure
```python
{
    'response': str,
    'intent': str,
    'confidence': float,
    'recommendations': [dict],
    'timestamp': str
}
```

---

## 🎨 Frontend Features

### React Chatbot Component Features
- **Real-time Connection Status** - Shows AI service connection state
- **Message History** - Maintains conversation history
- **Auto-scroll** - Automatically scrolls to latest message
- **Message Limiting** - Limits message history to prevent memory issues
- **Loading States** - Shows typing indicator while processing
- **Error Handling** - Displays error messages gracefully
- **Confidence Scores** - Shows AI confidence levels (optional)
- **Recommendation Display** - Renders structured recommendations
- **Customizable Styling** - Accepts className and style props
- **Environment Variable Support** - Configurable API URL

---

## 🔬 Advanced ML Capabilities

### Model Training Pipeline
1. **Feature Preparation** - Extracts features from neighborhood data
2. **Data Scaling** - Standardizes features using StandardScaler
3. **Model Training** - Trains multiple models in parallel
4. **Cross-Validation** - Validates model performance
5. **Feature Importance** - Analyzes which features matter most
6. **Model Persistence** - Saves models using joblib (optional)

### Intent Classification System
- **Pattern Matching** - Rule-based intent detection
- **TF-IDF Vectorization** - Converts text to numerical features
- **Cosine Similarity** - Matches queries to known intents
- **Confidence Scoring** - Provides confidence levels for classifications

### Query Processing Pipeline
1. **Text Preprocessing** - Lowercase, remove punctuation
2. **Intent Classification** - Identifies user intent
3. **Entity Extraction** - Extracts numbers, locations, keywords
4. **Context Retrieval** - Uses conversation history
5. **ML Model Inference** - Uses trained models for predictions
6. **Response Generation** - Creates natural language responses

---

## 📡 API Endpoints Summary

### Core Endpoints
- `GET /` - Root/health check
- `GET /health` - Detailed health status
- `GET /scenarios` - Available planning scenarios
- `POST /recommendations` - Get AI recommendations
- `GET /neighborhoods` - List all neighborhoods
- `GET /neighborhoods/{id}` - Get neighborhood details

### Chatbot Endpoints
- `POST /chat` - Chat with AI
- `GET /chat/history` - Get conversation history
- `DELETE /chat/history` - Clear conversation history

### Documentation
- `GET /docs` - Interactive API documentation (Swagger UI)
- `GET /redoc` - Alternative API documentation (ReDoc)

---

## 🗂️ Data Sources

- **WorldPop 2020 USA Dataset** - Population density data
- **NASA Earth Observation Data** - Air quality data (optional)
- **PSCAA Air Quality Data** - Local Seattle air quality (optional)
- **Seattle Neighborhood Boundaries** - Geographic boundaries

---

## 🚀 Deployment Features

- **Docker Support** - Containerized deployment
- **Environment Variables** - Configurable via env vars
- **Port Configuration** - Configurable port (default 8000)
- **Auto Data Processing** - Processes data on first startup if needed
- **Health Monitoring** - Built-in health check endpoints
- **CORS Configuration** - Cross-origin support for frontend
- **Production Ready** - Optimized for production deployment

---

## 📈 Performance Optimizations

- **Lazy Loading** - Models loaded only when needed
- **Caching** - Processed data cached in memory
- **Async Operations** - FastAPI async support
- **Efficient Clustering** - Optimized K-means with n_init parameter
- **Batch Processing** - Processes neighborhoods in batches
- **Memory Management** - Limits conversation history size

---

This comprehensive technology stack enables the system to process real urban planning data, generate explainable AI recommendations, and provide an interactive chatbot interface for natural language queries.

