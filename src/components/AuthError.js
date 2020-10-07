import React from 'react';
import styled from 'styled-components';

const ErrorWrapper = styled.div`
  position: fixed;
  background: #202020;
  color: #fff;
  z-index: 99999;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  font-size: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const isAllowed = email => {
  const whitelisted = [
    'jsredni@gmail.com',
    'bumhan.yu@gmail.com',
    'paeon80@gmail.com',
    'robert@nienstudios.com',
    'carrie@zennify.com',
    'andrew@zennify.com',
    'shane@zennify.com',
  ];

  if (whitelisted.indexOf(email) !== -1) return true;
  if (email.endsWith('hpfc.com')) return true;
  if (email.endsWith('homepointfinancial.com')) return true;
  if (email.endsWith('zeek.com')) return true;

  return false;
};

const ErrorMsg = ({ children }) => <ErrorWrapper>{children}</ErrorWrapper>;

export default ErrorMsg;

export { isAllowed };
