import type { Metadata } from 'next';
import Login from './components/Login';

export default function IndexPage() {
  return <Login />;
}

export const metadata: Metadata = {
  title: 'Lesson Number Six Next-Redux.',
};
