export interface CardProps {
  title: string;
  colors: readonly [string, string];
  name: string;
  onPress?: () => void;
  isSmall?: boolean;
}
