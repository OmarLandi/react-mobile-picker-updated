import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './containers/app';

import './example.less';

const app = createRoot(document.getElementById('app'));

app.render(<App />);
