import { render, RenderResult } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import RegisterWrapper from './RegisterWrapper';

describe('RegisterWrapper', () => {
  let component: RenderResult;
  beforeEach(() => {
    component = render(
      <MemoryRouter>
        <RegisterWrapper />
      </MemoryRouter>,
    );
  });

  it('should render', () => {
    component.getByText('Register');
  });
  it('button should be disabled when no input', () => {
    const button = component.getByText('Sign up');
    expect(button).toBeDisabled();
  });
});
