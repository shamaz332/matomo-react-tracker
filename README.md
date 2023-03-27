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

### Tracking page views using a custom hook

To track page views automatically when the route changes, you can use the `useMatomoPageView` custom hook provided by the package. Import and call this hook in your main App component:

```javascript
import { initMatomo, useMatomoPageView } from 'matomo-react-tracker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Initialize Matomo
initMatomo('your-matomo-url', 'your-site-id');

function App() {
  // Call the custom hook to track page views on route changes
  useMatomoPageView();

  return (
    <Router>
      <Switch>
        {/* Your route components here */}
      </Switch>
    </Router>
  );
}

export default App;
```

Make sure to adjust the package usage according to your app's structure and requirements.

## License

This project is licensed under the MIT License.




