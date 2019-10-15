/**
 * Do not support Internet Explorer < 11
 * Returns false if browser is older than IE11
 * Returns true if it's a supported browser
 */
export const assertSupportedBrowser = () => {
  const ua = window.navigator.userAgent || ''

  const msie = ua.indexOf('MSIE ');

  if (msie > 0) {
    // IE 10 or older => return true
    return false;
  }
  // other browser
  return true;
}
