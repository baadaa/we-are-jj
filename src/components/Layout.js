import React from 'react';
import styled from 'styled-components';
import '../styles/type.css';
import 'normalize.css';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import ErrorMsg from './AuthError';
import GlobalStyles from '../styles/GlobalStyles';
import { Ring, Dots } from '../assets/ring';

const WrapperStyle = styled.div`
  max-width: 90rem;
  margin: 0 auto;
  padding: 0 15px;
  /* position: relative; */
  position: static;
  main {
    width: 100%;
    z-index: 90;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px) {
      justify-content: flex-start;
      padding-top: 15px;
    }
  }
  .topRight {
    pointer-events: none;
    opacity: 0.12;
    position: absolute;
    overflow: hidden;
    top: 0;
    right: 0;
    svg {
      width: 40vw;
      height: 40vw;
      animation: breatheRight 15s linear infinite;
    }
  }
  .bottomLeft {
    pointer-events: none;
    position: absolute;
    bottom: 0;
    left: 0;
    overflow: hidden;
    z-index: -1;
    svg {
      width: 30vw;
      height: 30vw;
      animation: breatheLeft 12s linear infinite;
    }
  }
  @media screen and (max-width: 1024px) {
    .topRight svg {
      width: 50vw;
      height: 50vw;
      /* top: -30vw; */
    }
  }
  @media screen and (max-width: 768px) {
    .topRight svg {
      width: 60vw;
      height: 60vw;
      /* top: -40vw; */
    }
    .bottomLeft svg {
      width: 40vw;
      height: 40vw;
      /* bottom: -10vw; */
    }
  }
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
  background: var(--hp-indigo);
  color: var(--hp-indigo);
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

const Layout = ({ children }) => {
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
      <WrapperStyle>
        <GlobalStyles />
        <div className="topRight">
          <Ring fill="#fff" />
        </div>
        <div className="bottomLeft">
          <Dots fill="var(--hp-light-blue)" />
        </div>
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
