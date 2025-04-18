# 💹 Forex Price Prediction Platform

A comprehensive platform for forecasting Forex prices, detecting arbitrage opportunities, optimizing currency portfolios, and visualizing key financial metrics — all powered by deep learning and modern web technologies.
![image](https://github.com/user-attachments/assets/38582332-5347-42af-b511-88aafd6042a7)

---
![image](https://github.com/user-attachments/assets/9b0c6957-eae4-490c-ac68-b6c4eb104de7)
![image](https://github.com/user-attachments/assets/56560b8c-4510-4ea0-9a11-dc13c0e4eb1c)

## 🔍 Overview

This project combines **advanced machine learning models** with an **interactive frontend** to deliver accurate Forex price predictions and actionable insights. It supports multi-currency analysis, portfolio optimization, and arbitrage detection.

---

## ✨ Features

- 📈 **AI-Driven Predictions**: LSTM neural networks trained on 10+ years of historical Forex data  
- 🌍 **Multi-Currency Support**: Predict and analyze EUR/USD, GBP/USD, USD/CHF, USD/JPY  
- 💸 **Arbitrage Detection**: Spot pricing discrepancies between data sources  
- 📊 **Portfolio Optimization**: Mean-variance optimization with Sharpe ratio maximization  
- ⚖️ **Risk & Return Analysis**: Sharpe ratio, Sortino ratio, max drawdown, and more  
- 🧠 **Interactive Visualizations**: Clean, responsive data dashboards  
- 💻 **Modern UI**: Built with React, Tailwind, and `shadcn/ui` components  

---

## 🛠️ Tech Stack

### Backend
- Python 3.8+
- TensorFlow / Keras – LSTM models  
- Pandas, NumPy – data manipulation  
- SciPy – optimization algorithms  
- Matplotlib, Seaborn – visualizations  
- Streamlit – optional dashboard interface  

### Frontend
- React + TypeScript  
- Tailwind CSS  
- `shadcn/ui` component library  
- Vite (fast dev/build tool)  

---

## 🗂️ Project Structure

```plaintext
QF-Forex/
├── Project.ipynb        # Jupyter notebook (data prep, modeling, plotting)
├── app.py               # Streamlit app (optional UI)
├── models/              # Saved LSTM model files
├── src/                 # React frontend source code
├── Graphs/              # Generated visualization images
├── *.csv                # Historical Forex data
└── README.md            # Project documentation
```


## 🚀 Installation & Setup

### Prerequisites
- Node.js (v18+)
- Python 3.8+
- Git

---

### 1. Clone the Repository

```bash
git clone https://github.com/AP4549/Forex-Future.git
```
2. Backend Setup (Python)
```bash
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
```
3. Frontend Setup (React)
```
npm install
npm run dev
```
5. (Optional) Streamlit Interface
```
streamlit run app.py
```
⚙️ Usage
📊 Data Collection
Historical Forex data is fetched from:

Alpha Vantage API

Yahoo Finance API

The data is cleaned, merged, and stored as .csv files for modeling.

🧠 Model Training
Each currency pair is trained using a separate LSTM model, designed to capture time-series patterns for price forecasting.

💼 Portfolio Optimization
A built-in mean-variance optimizer calculates the ideal asset weights to maximize the Sharpe ratio under defined risk constraints.

🔁 Arbitrage Detection
Real-time and historical price comparisons from different APIs are used to detect arbitrage opportunities in the Forex market.

📡 Data Sources
Alpha Vantage (10-year historical data)

Yahoo Finance (recent historical + real-time data)

📄 License
This project is licensed under the MIT License – see the LICENSE file for full details.
