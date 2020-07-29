import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, test } from '@jest/globals';
import HelloWorld from '../src/components/HelloWorld';

describe('HelloWorld component test', () => {
  test('Should be print: Hello World!', async () => {
    const result = render(<HelloWorld />);
    expect(result.container.querySelector('p').textContent).toEqual('Hello World!');
  });
});
