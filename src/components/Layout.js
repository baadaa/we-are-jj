import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import { Helmet } from 'react-helmet';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import ErrorMsg from './AuthError';
import GlobalStyles from '../styles/GlobalStyles';
import Header from './Header';

// TODO: Add `HELMET` for metadata

const WrapperStyle = styled.div`
  max-width: 90rem;
  margin: 0 auto;
  padding: 9rem 1.5rem 0;
  padding-top: ${props =>
    props.hasSubnav ? `calc(${props.subNavHeight} + 6rem)` : '7rem'};
`;
const Footer = styled.footer`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 1.2rem;
  background: var(--hp-navy);
  color: var(--hp-indigo);
  mix-blend-mode: multiply;
  z-index: 99;
  .copyright {
    padding: 1rem 2rem;
    // background: var(--hp-navy);
    color: #fff;
  }
  .disclaimer {
    padding: 1rem 2rem;
    max-width: 600px;
    color: var(--hp-legal-navy);
    color: #fff;
  }
`;

const Layout = ({ children, hasSubnav, subNavHeight, subNav }) => {
  const {
    isLoading,
    isAuthenticated,
    error,
    user,
    loginWithRedirect,
    logout,
  } = useAuth0();
  const emailIsVerified = user.email_verified;
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }
  if (!emailIsVerified) {
    return (
      <ErrorMsg>
        Verify your email first
        <button
          type="button"
          style={{
            background: 'var(--hp-hot-orange)',
            border: 'none',
            outline: 'none',
            marginTop: '2rem',
            lineHeight: 1,
            padding: '1rem 2rem',
            fontSize: '1.5rem',
            borderRadius: '999px',
            color: 'white',
          }}
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          OK
        </button>
      </ErrorMsg>
    );
  }
  if (isAuthenticated) {
    return (
      <WrapperStyle hasSubnav={hasSubnav} subNavHeight={subNavHeight}>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap"
          />
        </Helmet>
        <GlobalStyles />
        <Header
          hasSubnav={hasSubnav}
          subNavHeight={subNavHeight}
          subNav={subNav}
        />
        <main>{children}</main>
        <Footer>
          <div className="disclaimer">
            <span
              style={{
                display: 'block',
                // paddingBottom: '5px',
                // color: 'var(--hp-navy)',
              }}
            >
              Logged in as{' '}
              <strong style={{ fontWeight: 500 }}>{user.name}</strong>{' '}
              <button
                type="button"
                style={{
                  background: 'var(--hp-hot-orange)',
                  border: 'none',
                  outline: 'none',
                  padding: '5px 10px',
                  fontSize: '10px',
                  borderRadius: '999px',
                  color: 'white',
                }}
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Log out
              </button>
            </span>
            {/* For internal review purposes only. Not approved for public uses
                nor external sharing. */}
          </div>
          <div className="copyright">
            &copy;{new Date().getFullYear()} Homepoint
          </div>
        </Footer>
      </WrapperStyle>
    );
  }
  return (
    <button type="button" onClick={loginWithRedirect}>
      Log in
    </button>
  );
};

export default withAuthenticationRequired(Layout);
