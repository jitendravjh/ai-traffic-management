import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import trafficImage from "../assets/traffic.jpg";
import emergencyVehicle from "../assets/emergency.jpg";
import smartCity from "../assets/smart-city.jpg";
import "../styles/Navbar.scss";
// import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage-wrapper">
      <Navbar />
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">AI Traffic Signal Management System</h1>
        <p className="hero-subtitle">
          Helping Emergency Vehicles Reach on Time
        </p>
      </div>

      {/* Impact Section */}
      <div className="impact-section">
        <h2>Why is This Required?</h2>
        <div className="impact-content">
          <div className="impact-card">
            <h3>50,000+</h3>
            <p>Lives lost annually due to delayed emergency responses</p>
          </div>
          <div className="impact-card">
            <h3>70%</h3>
            <p>Increase in response efficiency with AI-based traffic control</p>
          </div>
          <div className="impact-card">
            <h3>₹1,000 Cr+</h3>
            <p>Economic loss due to traffic delays in metro cities</p>
          </div>
        </div>
      </div>

      {/* Workflow Section */}
      <div className="workflow-section">
        <h2>How It Works</h2>
        <div className="workflow-steps">
          <div className="step-container">
            <div className="step-card">
              <p>
                <strong>Step 1:</strong> AI processes live video feed from
                traffic cameras
              </p>
            </div>
            <div className="downward-arrow">↓</div>
          </div>

          <div className="step-container">
            <div className="step-card">
              <p>
                <strong>Step 2:</strong> AI detects emergency vehicles in the
                traffic
              </p>
            </div>
            <div className="downward-arrow">↓</div>
          </div>

          <div className="step-container">
            <div className="step-card">
              <p>
                <strong>Step 3:</strong> AI checks traffic density and active
                lane status
              </p>
            </div>
            <div className="downward-arrow">↓</div>
          </div>

          <div className="step-container">
            <div className="step-card">
              <p>
                <strong>Step 4:</strong> Traffic lights adjust to clear the
                emergency vehicle’s lane
              </p>
            </div>
            <div className="downward-arrow">↓</div>
          </div>

          <div className="step-container">
            <div className="step-card">
              <p>
                <strong>Step 5:</strong> Once emergency vehicle passes, signals
                revert to normal
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2>Key Features</h2>
        <div className="features-container">
          <div className="feature-card">
            <h3>🚦 Real-time Traffic Monitoring</h3>
            <p>
              AI continuously analyzes live traffic congestion using camera
              feeds and sensors, ensuring optimized flow.
            </p>
          </div>

          <div className="feature-card">
            <h3>🚑 Emergency Vehicle Prioritization</h3>
            <p>
              Detects ambulances, fire trucks, and police vehicles, adjusting
              traffic lights instantly to clear their path.
            </p>
          </div>

          <div className="feature-card">
            <h3>🔄 Smart Signal Adjustment</h3>
            <p>
              AI dynamically modifies signal durations based on real-time
              congestion, reducing unnecessary waiting times.
            </p>
          </div>

          <div className="feature-card">
            <h3>📊 Advanced Data Analytics</h3>
            <p>
              Collects and analyzes traffic patterns to provide city planners
              with actionable insights for better infrastructure.
            </p>
          </div>

          <div className="feature-card">
            <h3>🌍 Smart City Integration</h3>
            <p>
              Seamlessly integrates with existing smart city frameworks, making
              urban transport more efficient and adaptive.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 AI Traffic Signal Management | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
