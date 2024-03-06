import { SpeedInsights } from '@vercel/speed-insights/react';
import './App.css';
import Layout from './Router/Layout';

function App() {
  return (
    <>
      <Layout />
      <SpeedInsights />
    </>
  );
}

export default App;
