import { mount } from 'auth/AuthApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const AuthApp = ({ onSignIn }) => {
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
      onSignIn,
    });

    history.listen(onParentNavigate)
  }, []);

  return (
    <div ref={ref} />
  )
}

export default AuthApp;
