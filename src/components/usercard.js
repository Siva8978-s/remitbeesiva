import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import "./usercard.css";

const UserCard = ({ user }) => {
  return (
    <Card className="user-card" elevation={3}>
      <CardContent>
        <Typography variant="h6" gutterBottom>{user.name}</Typography>
        <Typography variant="body2">📧 {user.email}</Typography>
        <Typography variant="body2">📱 {user.phone}</Typography>
        <Typography variant="body2">🏙️ {user.address?.city || "N/A"}</Typography>

        <Typography variant="body2">🌐 {user.website}</Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;
