import React from 'react';
import RuleBuilder from './components/RuleBuilder/RuleBuilder';
import { RuleFormData } from './components/RuleBuilder/types';

const App: React.FC = () => {
  const handleSave = (data: RuleFormData & { match: boolean }) => {
    console.log('Rule form result:', data);
  };

  return <RuleBuilder onSave={handleSave} />;
};

export default App;