import type { HTMLAttributes } from 'react';

import classNames from '~/utils/classNames';

import styles from './styles.module.css';

// `style` é omitido de propósito: estilo inline é proibido no projeto.
export type ContainerPropsType = Omit<HTMLAttributes<HTMLDivElement>, 'style'> & {
  /** Limita a largura ao `--wrap` e centraliza. */
  wrap?: boolean;
};

export default function Container({
  wrap = false,
  className,
  children,
  ...props
}: ContainerPropsType) {
  return (
    <div className={classNames(wrap && styles.wrap, className)} {...props}>
      {children}
    </div>
  );
}
