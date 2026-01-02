"use client";

import Header from '@/components/common/Header';
import TrustBar from '@/components/common/TrustBar';
import FloatingConsultation from '@/components/common/FloatingConsultation';
import PricingInteractive from './components/PricingInteractive';

export default function PricingPackagesClient() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="pt-16">
        <PricingInteractive />
        <TrustBar className="mt-16" />
      </div>

      <FloatingConsultation />
    </main>
  );
}
