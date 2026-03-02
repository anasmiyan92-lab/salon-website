import { useRef, useEffect, useState, ReactNode, ElementType } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  direction?: 'up' | 'left' | 'right' | 'zoom';
  delay?: number;
  className?: string;
  as?: ElementType;
}

export default function AnimatedSection({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  as: Tag = 'div',
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const hiddenClass = {
    up: 'section-hidden',
    left: 'section-hidden-left',
    right: 'section-hidden-right',
    zoom: 'section-hidden',
  }[direction];

  const visibleClass = {
    up: 'section-visible',
    left: 'section-visible-left',
    right: 'section-visible-right',
    zoom: 'section-visible',
  }[direction];

  return (
    <Tag
      ref={ref}
      className={`${isVisible ? visibleClass : hiddenClass} ${className}`}
      style={isVisible ? { transitionDelay: `${delay}ms` } : {}}
    >
      {children}
    </Tag>
  );
}
