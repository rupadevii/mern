import {hydrateRoot} from 'react-dom/client'
import App from './App'
import { StrictMode } from 'react';

//hydrate the page with event listeners and all other stuff
hydrateRoot(document.getElementById('root'), 
    <StrictMode>
        <App/>
    </StrictMode>
)