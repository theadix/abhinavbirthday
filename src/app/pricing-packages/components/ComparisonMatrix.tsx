'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Feature {
  name: string;
  starter: boolean | string;
  growth: boolean | string;
  premium: boolean | string;
  enterprise: boolean | string;
}

const ComparisonMatrix = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const features: Feature[] = [
    {
      name: 'Delivery Speed',
      starter: '5-7 days',
      growth: '3-5 days',
      premium: '1-3 days',
      enterprise: '24-48 hours',
    },
    {
      name: 'Retention Guarantee',
      starter: '30 days',
      growth: '60 days',
      premium: '90 days',
      enterprise: '180 days',
    },
    {
      name: 'Refill Period',
      starter: '30 days',
      growth: '60 days',
      premium: '90 days',
      enterprise: 'Lifetime',
    },
  ];

  const packages = [
    { id: 'starter', name: 'Starter', color: 'text-text-secondary' },
    { id: 'growth', name: 'Growth', color: 'text-primary' },
    { id: 'premium', name: 'Premium', color: 'text-secondary' },
    { id: 'enterprise', name: 'Enterprise', color: 'text-accent' },
  ];

  const renderValue = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Icon name="CheckCircleIcon" size={24} variant="solid" className="text-success mx-auto" />
      ) : (
        <Icon name="XCircleIcon" size={24} variant="solid" className="text-text-secondary/30 mx-auto" />
      );
    }
    return <span className="text-sm font-semibold text-text-primary">{value}</span>;
  };

  if (!isHydrated) {
    return (
      <div className="bg-card rounded-xl border border-border p-8 shadow-subtle">
        <div className="h-8 bg-surface rounded mb-6 animate-pulse" />
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-16 bg-surface rounded animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-xl border border-border shadow-subtle overflow-hidden">
      <div className="p-8 bg-gradient-trust">
        <h2 className="text-3xl font-headline font-bold text-text-primary mb-2">
          Package Comparison
        </h2>
        <p className="text-text-secondary">
          Compare features across all tiers to find your perfect match
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-surface border-b border-border">
              <th className="px-6 py-4 text-left text-sm font-headline font-bold text-text-primary">
                Features
              </th>
              {packages.map((pkg) => (
                <th key={pkg.id} className="px-6 py-4 text-center">
                  <span className={`text-sm font-headline font-bold ${pkg.color}`}>
                    {pkg.name}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr
                key={index}
                className={`border-b border-border smooth-transition hover:bg-surface ${
                  index % 2 === 0 ? 'bg-white' : 'bg-surface/30'
                }`}
              >
                <td className="px-6 py-4 text-sm font-medium text-text-primary">
                  {feature.name}
                </td>
                <td className="px-6 py-4 text-center">
                  {renderValue(feature.starter)}
                </td>
                <td className="px-6 py-4 text-center">
                  {renderValue(feature.growth)}
                </td>
                <td className="px-6 py-4 text-center">
                  {renderValue(feature.premium)}
                </td>
                <td className="px-6 py-4 text-center">
                  {renderValue(feature.enterprise)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonMatrix;
