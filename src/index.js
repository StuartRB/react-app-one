import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Home from './components/Home'

// This is the ID of the div in your index.html file

const rootElement = document.getElementById('app');
const app = createRoot(rootElement);
app.render(
    <StrictMode>
        <Home />
    </StrictMode>,
);