import React from 'react';
import { EmbeddedToolWrapper } from '@/components/EmbeddedToolWrapper';
import { GraduationCap } from 'lucide-react';

const FarmerLearningAgent = () => {
  return (
    <EmbeddedToolWrapper
      src="https://19hninc1mo6n.manus.space/"
      title="Farmer Learning Agent"
      description="Interactive learning platform with agricultural education and best practices"
      category="Education"
      icon={GraduationCap}
      farmingUseCase="Learn modern farming techniques, pest management, and sustainable practices"
    />
  );
};

export default FarmerLearningAgent;