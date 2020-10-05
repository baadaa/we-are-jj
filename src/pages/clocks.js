import { navigate } from 'gatsby';

export default function ClocksPage() {
  if (typeof window === 'undefined') return null;
  navigate('/');
  return null;
}
