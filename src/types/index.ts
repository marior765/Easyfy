import { FC } from 'react';
// import { StackScreenProps } from '@react-navigation/stack';

// import { ROUTES } from 'src/constants';

export interface INavigation {
  popToTop: () => Record<string, number>;
  pop: () => Record<string, number>;
  navigate: (route: string, params?: any) => Record<string, number>;
  goBack: () => Record<string, number>;
  canGoBack: () => Record<string, number>;
  openDrawer: () => Record<string, number>;
  dispatch: (param: any) => Record<string, number>;
  setOptions: (param: any) => Record<string, number>;
}

export type Component<P> = FC<Readonly<P>>;

// type Join<K, P> = K extends string | number ? (P extends string | number ? `${P}` : never) : never;

// type Paths<T, D extends number = 10> = [D] extends [never]
//   ? never
//   : T extends object
//   ? {
//       [K in keyof T]-?: K extends string | number ? `${K}` | Join<K, Paths<T[K]>> : never;
//     }[keyof T]
//   : '';

// type B = Paths<typeof ROUTES>;

export type Page<P> = FC<Readonly<P & { navigation: INavigation }>>;

// export type Page<P extends Record<string, object | undefined>> = FC<
//   Readonly<StackScreenProps<P, B>>
// >;

export type FontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';
