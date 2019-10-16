import React from 'react';
import i18next from 'i18next';

function AppFooter() {
  return (
    <footer className="footer">
      <p><span>{i18next.t("MADE_WITH_LOVE")}</span><br/>
      <span>{i18next.t("AND_A_KEYBOARD")}</span></p>
    </footer>
  );
}

export default AppFooter;