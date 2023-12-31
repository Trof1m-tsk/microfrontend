import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const MarketingApp = () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: namePathName }) => {
        const { pathname } = history.location;

        if (pathname !== namePathName) {
          history.push(namePathName);
        }
      },
    });

    history.listen(onParentNavigate)
  }, []);

  return (
    <div ref={ref} />
  )
}

export default MarketingApp;
