export function initMatomo(matomoURL, siteID) {
  window._paq = window._paq || [];

  window._paq.push(["setTrackerUrl", `${matomoURL}/matomo.php`]);
  window._paq.push(["setSiteId", siteID]);

  const scriptElement = document.createElement("script");
  scriptElement.type = "text/javascript";
  scriptElement.async = true;
  scriptElement.defer = true;
  scriptElement.src = `${matomoURL}/matomo.js`;

  document.getElementsByTagName("head")[0].appendChild(scriptElement);
}

export function trackPageView(customUrl) {
  if (window._paq) {
    window._paq.push(["setCustomUrl", customUrl || window.location.href]);
    window._paq.push(["trackPageView"]);
  }
}

export function trackEvent(category, action, name, value) {
  if (window._paq) {
    window._paq.push(["trackEvent", category, action, name, value]);
  }
}



// Hooks
export function useMatomoPageView() {
  const { pathname } = useLocation();

  useEffect(() => {
    trackPageView();
  }, [pathname]);
}
