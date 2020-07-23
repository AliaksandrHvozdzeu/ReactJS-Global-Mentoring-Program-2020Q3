import React from 'react';
import { render } from '@testing-library/react';
import { describe, test } from "@jest/globals";
import HelloWorld from '../src/components/HelloWorld';

describe('HelloWorld test', () => {
  test('should be print Hello World!', async () => {
    const result = render(<HelloWorld />);
    expect(result.container.querySelector('p').textContent).toEqual('Hello World!');
  });
});
