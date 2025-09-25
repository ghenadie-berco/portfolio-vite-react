import React from "react";
import "./Card.css"; // We'll create this file for styling

// Define the type for the component's props
interface CardProps {
  title?: string;
  children: React.ReactNode; // This allows any valid React element to be passed
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="card">
      {title && (
        <div className="card-header">
          <h2>{title}</h2>
        </div>
      )}
      <div className="card-content">{children}</div>
    </div>
  );
};

export default Card;
