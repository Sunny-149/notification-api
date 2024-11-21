**API Documentation for Notification Preferences API**

### Overview

This API provides endpoints for managing user notification preferences and sending notifications.

### Base URL:
```
https://your-api-endpoint
```

### Endpoints:

#### User Preferences

**1. Create User Preference**
```
POST /api/preferences
```
* **Request Body:**
  ```json
  {
    "userId": "user123",
    "email": "user@example.com",
    "preferences": {
      "marketing": true,
      "newsletter": false,
      "updates": true,
      "frequency": "weekly",
      "channels": {
        "email": true,
        "sms": false,
        "push": true
      }
    },
    "timezone": "America/New_York"
  }
  ```
* **Response:**
  ```json
  {
    "message": "User preference created successfully"
  }
  ```

**2. Get User Preference**
```
GET /api/preferences/:userId
```
* **Path Parameters:**
  - `userId`: The ID of the user.
* **Response:**
  ```json
  {
    "userId": "user123",
    "email": "user@example.com",
    // ... other user preference fields
  }
  ```

**3. Update User Preference**
```
PATCH /api/preferences/:userId
```
* **Path Parameters:**
  - `userId`: The ID of the user.
* **Request Body:**
  ```json
  {
    "preferences": {
      "marketing": false
    }
  }
  ```
* **Response:**
  ```json
  {
    "message": "User preference updated successfully"
  }
  ```

**4. Delete User Preference**
```
DELETE /api/preferences/:userId
```
* **Path Parameters:**
  - `userId`: The ID of the user.
* **Response:**
  ```json
  {
    "message": "User preference deleted successfully"
  }
  ```

#### Notification Management

**1. Send Notification**
```
POST /api/notifications/send
```
* **Request Body:**
  ```json
  {
    "userId": "user123",
    "type": "marketing",
    "channel": "email",
    "content": {
      "subject": "Special Offer",
      "body": "Check out our latest deals!"
    }
  }
  ```
* **Response:**
  ```json
  {
    "message": "Notification sent successfully"
  }
  ```

**2. Get Notification Logs**
```
GET /api/notifications/:userId/logs
```
* **Path Parameters:**
  - `userId`: The ID of the user.
* **Response:**
  ```json
  [
    {
      "type": "marketing",
      "channel": "email",
      "status": "sent",
      "sentAt": "2023-11-21T12:34:56Z",
      "metadata": {
        // ... additional metadata
      }
    },
    // ... other notification logs
  ]
  ```

**3. Get Notification Statistics**
```
GET /api/notifications/stats
```
* **Response:**
  ```json
  {
    "totalNotificationsSent": 100,
    "failedNotifications": 5,
    // ... other statistics
  }
  ```
