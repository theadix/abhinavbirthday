"use client";
import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import TrustBar from '@/components/common/TrustBar';
import FloatingConsultation from '@/components/common/FloatingConsultation';
import PricingInteractive from './components/PricingInteractive';

export const metadata: Metadata = {
  title: 'Pricing Packages - SocialBoost Pro',
  description: 'Transparent pricing for premium social media growth services. Compare packages across Instagram, YouTube, TikTok, Facebook, and Twitter with manual verification, retention guarantees, and bulk discounts up to 60% off.',
};

export default function PricingPackagesPage() {
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
