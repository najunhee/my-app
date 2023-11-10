import ReactDom from 'react-dom';
import { App } from './App';
import { AdminFlagProvider } from './components/providers/AdminFlagProvider';
// import './main.css';

ReactDom.render(
    <AdminFlagProvider>
        <App />
    </AdminFlagProvider>        
    , document.getElementById('root')
);
