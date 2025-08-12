import React, { useState } from 'react';

export default function App() {
  const [leagueData, setLeagueData] = useState('');
  const [analysis, setAnalysis] = useState(null);

  const handleAnalyze = () => {
    // Placeholder logic
    setAnalysis({
      strengths: ['WR Depth', 'TE Depth', 'Strong QBs'],
      weaknesses: ['RB Depth'],
      trades: [
        {
          team: 'Bishop Sycamore HS',
          offer: 'Michael Pittman Jr., Dalton Schultz',
          ask: 'James Cook, 2026 2nd',
        },
        {
          team: 'Lamarsexuals',
          offer: 'Dalton Kincaid, Xavier Worthy',
          ask: 'Kenneth Walker III',
        },
      ]
    });
  };

  return (
    <div className="app">
      <h1>Dynasty Trade Analyzer</h1>
      <textarea
        placeholder="Paste your Sleeper league JSON here"
        value={leagueData}
        onChange={(e) => setLeagueData(e.target.value)}
      />
      <button onClick={handleAnalyze}>Analyze</button>

      {analysis && (
        <div className="results">
          <h2>Strengths</h2>
          <ul>{analysis.strengths.map((s, i) => <li key={i}>{s}</li>)}</ul>

          <h2>Weaknesses</h2>
          <ul>{analysis.weaknesses.map((w, i) => <li key={i}>{w}</li>)}</ul>

          <h2>Trade Suggestions</h2>
          {analysis.trades.map((t, i) => (
            <div key={i} className="trade">
              <strong>{t.team}</strong>
              <p>Offer: {t.offer}</p>
              <p>Ask: {t.ask}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
