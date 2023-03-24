# Matomo React Tracker

A simple Matomo tracker for React Single Page Applications (SPAs) to track pageviews and events.

## Installation

Install the package using npm:

``` npm install matomo-react-tracker ```


## Usage

First, import and initialize the Matomo tracker in your React app:

```javascript
import { initMatomo, trackPageView, trackEvent } from 'matomo-react-tracker';
// Initialize Matomo
initMatomo('your-matomo-url', 'your-site-id');
```
To track pageviews, call the trackPageView function when the route changes:
```javascript
// Track page view (e.g., on route changes)
trackPageView();
```
To track events, call the trackEvent function when an event occurs:
```javascript
// Track events (e.g., on button clicks)
trackEvent('category', 'action', 'name', 'value');
```
Make sure to adjust the package usage according to your app's structure and requirements.

## License

This project is licensed under the MIT License.




