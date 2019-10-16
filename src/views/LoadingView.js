import React from 'react';
import i18next from 'i18next';

function LoadingView() {
  return (
    <div className="loading">{i18next.t("LOADING")}...</div>
  );
}

export default LoadingView;