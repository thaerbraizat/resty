import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import Form from '../components/form/index';
import Results from '../components/results/index'
import '@testing-library/jest-dom/extend-expect';



it('Should render results', () => {
  const result = {
    "Headers": {
      "content-type": "string application/json"
    },
    "count": 2,
    "results": [
      {
        "name": "fake thing 1",
        "url": "http://fakethings.com/1"
      },
      {
        "name": "fake thing 2",
        "url": "http://fakethings.com/2"
      }
    ]
  };

  render(<Results data={result} />);

  const items = screen.getByTestId('data');

  expect(items).toHaveTextContent('fake thing 1');
  expect(items).toHaveTextContent('http://fakethings.com/2');
  expect(items).toHaveTextContent('Headers');
});