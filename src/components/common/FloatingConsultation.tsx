'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FloatingConsultationProps {
  className?: string;
}

const FloatingConsultation = ({ className = '' }: FloatingConsultationProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/1234567890?text=Hi, I would like to start a consultation for social media growth services.', '_blank');
  };

  const handleTelegramClick = () => {
    window.open('https://t.me/socialboostpro', '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-6 right-6 z-40 ${className}`}>
      <div className="relative">
        {/* Expanded Options */}
        {isExpanded && (
          <div className="absolute bottom-16 right-0 bg-card rounded-lg shadow-premium p-3 space-y-2 animate-fade-in min-w-[200px]">
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center space-x-3 w-full px-4 py-3 rounded-lg text-left smooth-transition hover:bg-success hover:text-white group"
            >
              <Icon name="ChatBubbleLeftRightIcon" size={20} variant="outline" className="group-hover:text-white" />
              <div>
                <div className="font-headline font-semibold text-sm">WhatsApp</div>
                <div className="text-xs text-text-secondary group-hover:text-white">Instant response</div>
              </div>
            </button>
            <button
              onClick={handleTelegramClick}
              className="flex items-center space-x-3 w-full px-4 py-3 rounded-lg text-left smooth-transition hover:bg-primary hover:text-white group"
            >
              <Icon name="PaperAirplaneIcon" size={20} variant="outline" className="group-hover:text-white" />
              <div>
                <div className="font-headline font-semibold text-sm">Telegram</div>
                <div className="text-xs text-text-secondary group-hover:text-white">Quick connect</div>
              </div>
            </button>
          </div>
        )}

        {/* Main Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center space-x-3 px-6 py-4 rounded-full bg-conversion-cta text-white shadow-premium smooth-transition hover:shadow-lg hover:scale-105 group"
          aria-label="Open consultation options"
        >
          <Icon
            name={isExpanded ? 'XMarkIcon' : 'ChatBubbleLeftEllipsisIcon'}
            size={24}
            variant="solid"
          />
          <span className="font-headline font-semibold">
            {isExpanded ? 'Close' : 'Start Consultation'}
          </span>
        </button>

        {/* Pulse Animation */}
        {!isExpanded && (
          <div className="absolute inset-0 rounded-full bg-conversion-cta opacity-75 animate-ping" />
        )}
      </div>
    </div>
  );
};

export default FloatingConsultation;
