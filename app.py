
import streamlit as st
import pandas as pd
import numpy as np
import os
import matplotlib.pyplot as plt
from tensorflow.keras.models import load_model
from sklearn.preprocessing import MinMaxScaler
from datetime import datetime, timedelta

# Set Paths
BASE_PATH = os.path.dirname(os.path.abspath(__file__))  # QF Project
GRAPH_PATH = os.path.join(BASE_PATH, "Graphs")
DATA_PATH = BASE_PATH  # CSVs are in QF Project
MODEL_PATH = os.path.join(BASE_PATH, "models")
CSV_PREDICTION_PATH = os.path.join(BASE_PATH, "forex_predictions_next_10_days.csv")

# Forex Pairs
PAIRS = ["EUR_USD", "GBP_USD", "USD_CHF", "USD_JPY"]

# Get Today's Date & Next 10 Days
TODAY = datetime.today().strftime("%Y-%m-%d")
NEXT_DAYS = [(datetime.today() + timedelta(days=i)).strftime("%Y-%m-%d") for i in range(1, 11)]


# Function to Display Graphs
def display_graphs():
    st.subheader("Arbitrage Opportunity Analysis")
    arbitrage_images = ["image.png", "image2.png", "image3.png", "image4.png"]
    arbitrage_desc = [
        "This graph analyzes the differences in arbitrage opportunities between different forex pairs.",
        "Market movements showing discrepancies in price points for arbitrage trading.",
        "Time series of price gaps that can be exploited for risk-free profit.",
        "Comparison of forex spreads to identify potential arbitrage trades.",
    ]
    for img, desc in zip(arbitrage_images, arbitrage_desc):
        st.image(os.path.join(GRAPH_PATH, img), caption=desc, use_column_width=True)

    st.subheader("Forex Pair Trends")
    vs_graphs = ["eur vs usd.png", "gbp vs usd.png", "usd vs chf.png", "jpy vs usd.png"]
    vs_titles = ["EUR/USD Trend", "GBP/USD Trend", "USD/CHF Trend", "USD/JPY Trend"]
    for img, title in zip(vs_graphs, vs_titles):
        st.image(os.path.join(GRAPH_PATH, img), caption=title, use_column_width=True)

    st.subheader("Market Insights & Portfolio Analysis")
    insights = {
        "market regime.png": "Market Regime - Identifying bullish and bearish trends.",
        "portfolio.png": "Portfolio Performance - Evaluating returns and risks.",
        "risk-return.png": "Risk vs Return Analysis - Balancing risk and reward in trading.",
    }
    for img, desc in insights.items():
        st.image(os.path.join(GRAPH_PATH, img), caption=desc, use_column_width=True)


# Streamlit UI
st.set_page_config(page_title="Forex Market Analysis", layout="wide")

# Sidebar Navigation
page = st.sidebar.radio("Navigation", ["Home", "Graphs", "Price Predictions"])

# Home Page
if page == "Home":
    st.markdown(
        """
        <h1 style="text-align: center; color: #1E90FF; font-size: 42px;">Forex Market Analysis</h1>
        <h3 style="text-align: center; color: #2E8B57;">AI-Powered Forex Insights & Predictions</h3>
        <hr style='border: 1px solid #ddd; margin: 10px 0;'>
        """,
        unsafe_allow_html=True
    )

    st.markdown(
        """
        <style>
            .feature-box {
                background: linear-gradient(135deg, #f8f9fa, #eef2f3);
                padding: 16px;
                border-radius: 12px;
                box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
                font-size: 18px;
                margin-bottom: 10px;
                text-align: center;
            }
            .feature-title {
                font-size: 22px;
                font-weight: bold;
                color: #1E90FF;
            }
        </style>
        <div class='feature-box'><span class='feature-title'>AI-Driven Predictions</span><br> LSTM models trained on 10+ years of Forex data.</div>
        <div class='feature-box'><span class='feature-title'>Multi-Currency Support</span><br> Analyze EUR/USD, GBP/USD, USD/CHF, USD/JPY.</div>
        <div class='feature-box'><span class='feature-title'>Market Trends & Arbitrage</span><br> Identify trading opportunities with visual analysis.</div>
        <div class='feature-box'><span class='feature-title'>Simple & Interactive</span><br> Navigate seamlessly with an intuitive UI.</div>
        """,
        unsafe_allow_html=True
    )

    st.markdown("<hr style='border: 1px solid #ddd;'>", unsafe_allow_html=True)
    st.markdown(f"<p style='text-align: center; font-size: 18px; color: #2E8B57;'><b>Today's Date:</b> {TODAY}</p>", unsafe_allow_html=True)
    st.markdown("<p style='text-align: center;'>Powered by AI | Contact: forex@gmail.com</p>", unsafe_allow_html=True)

# Graphs Page
elif page == "Graphs":
    st.title("Market Analysis Graphs")
    display_graphs()

# Predictions Page
elif page == "Price Predictions":
    st.title("Forex Price Predictions")

    try:
        # Load predictions CSV
        df_predictions = pd.read_csv(CSV_PREDICTION_PATH)

        # Ensure the first column is 'Forex Pair'
        if df_predictions.columns[0] != "Forex Pair":
            df_predictions.rename(columns={df_predictions.columns[0]: "Forex Pair"}, inplace=True)

        # Get list of date columns (skip 'Forex Pair')
        date_columns = df_predictions.columns[1:]
        selected_date = st.selectbox("Select a date to view predictions:", date_columns)

        # Display table for selected date
        st.markdown(f"### Predicted Forex Rates for **{selected_date}**")
        result_df = df_predictions[["Forex Pair", selected_date]].copy()
        result_df.columns = ["Forex Pair", "Predicted Rate"]
        st.table(result_df)

    except FileNotFoundError:
        st.error("Prediction CSV file not found. Please ensure the file exists at the specified path.")
    except Exception as e:
        st.error(f"Could not load predictions: {e}")
