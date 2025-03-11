import { ReactNode } from 'react';

interface SvgWrapperProps {
  width: number | string;
  height: number | string;
  className?: string;
  viewBox?: string;
  'data-testid'?: string;
  children: ReactNode;
}

const SvgWrapper = ({
  width,
  height,
  className,
  viewBox,
  'data-testid': dataTestId = 'svg-wrapper',
  children,
}: SvgWrapperProps) => (
  <svg
    width={width}
    height={height}
    fill="none"
    className={className}
    viewBox={viewBox}
    data-testid={dataTestId}
  >
    {children}
  </svg>
);

export default SvgWrapper;
