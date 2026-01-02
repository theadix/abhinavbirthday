'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface BulkPricingCalculatorProps {
  platform: string;
}

interface PricingTier {
  min: number;
  max: number;
  pricePerUnit: number;
  discount: number;
}

const BulkPricingCalculator = ({ platform }: BulkPricingCalculatorProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [quantity, setQuantity] = useState(1000);
  const [selectedService, setSelectedService] = useState('followers');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const services = [
    { id: 'followers', name: 'Followers', basePrice: 0.05 },
    { id: 'likes', name: 'Likes', basePrice: 0.02 },
    { id: 'views', name: 'Views', basePrice: 0.01 },
    { id: 'comments', name: 'Comments', basePrice: 0.15 },
  ];

  const pricingTiers: PricingTier[] = [
    { min: 1, max: 999, pricePerUnit: 1.0, discount: 0 },
    { min: 1000, max: 4999, pricePerUnit: 0.85, discount: 15 },
    { min: 5000, max: 9999, pricePerUnit: 0.70, discount: 30 },
    { min: 10000, max: 49999, pricePerUnit: 0.55, discount: 45 },
    { min: 50000, max: Infinity, pricePerUnit: 0.40, discount: 60 },
  ];

  const getCurrentTier = () => {
    return pricingTiers.find(tier => quantity >= tier.min && quantity <= tier.max) || pricingTiers[0];
  };

  const calculatePrice = () => {
    const service = services.find(s => s.id === selectedService);
    if (!service) return 0;
    
    const tier = getCurrentTier();
    const baseTotal = quantity * service.basePrice;
    return baseTotal * tier.pricePerUnit;
  };

  const currentTier = getCurrentTier();
  const totalPrice = calculatePrice();
  const savings = quantity * (services.find(s => s.id === selectedService)?.basePrice || 0) - totalPrice;

  if (!isHydrated) {
    return (
      <div className="bg-card rounded-xl border border-border p-8 shadow-subtle">
        <div className="h-8 bg-surface rounded mb-6 animate-pulse" />
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-12 bg-surface rounded animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-xl border border-border p-8 shadow-subtle">
      <div className="flex items-center space-x-3 mb-6">
        <Icon name="CalculatorIcon" size={32} variant="solid" className="text-primary" />
        <h2 className="text-3xl font-headline font-bold text-text-primary">
          Bulk Pricing Calculator
        </h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-text-primary mb-3">
            Select Service Type
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`px-4 py-3 rounded-lg font-headline font-semibold smooth-transition ${
                  selectedService === service.id
                    ? 'bg-primary text-white shadow-subtle'
                    : 'bg-surface text-text-secondary hover:bg-muted'
                }`}
              >
                {service.name}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="quantity" className="block text-sm font-semibold text-text-primary mb-3">
            Quantity: {quantity.toLocaleString()}
          </label>
          <input
            id="quantity"
            type="range"
            min="100"
            max="100000"
            step="100"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full h-2 bg-surface rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between text-xs text-text-secondary mt-2">
            <span>100</span>
            <span>100,000</span>
          </div>
        </div>

        <div className="bg-gradient-trust rounded-lg p-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-text-secondary">Current Tier</span>
            <span className="font-headline font-bold text-primary">
              {currentTier.min.toLocaleString()} - {currentTier.max === Infinity ? '∞' : currentTier.max.toLocaleString()}
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-text-secondary">Discount Applied</span>
            <span className="font-headline font-bold text-success">
              {currentTier.discount}% OFF
            </span>
          </div>

          <div className="pt-4 border-t border-border">
            <div className="flex items-baseline justify-between mb-2">
              <span className="text-lg text-text-secondary">Total Price</span>
              <span className="text-4xl font-headline font-bold text-primary">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            {savings > 0 && (
              <div className="flex items-center justify-end space-x-2 text-success">
                <Icon name="ArrowTrendingDownIcon" size={16} variant="solid" />
                <span className="text-sm font-semibold">
                  You save ${savings.toFixed(2)}
                </span>
              </div>
            )}
          </div>
        </div>

        <button className="w-full py-4 rounded-lg bg-conversion-cta text-white font-headline font-bold text-lg smooth-transition hover:shadow-premium hover:scale-102">
          Request Custom Quote
        </button>
      </div>
    </div>
  );
};

export default BulkPricingCalculator;
