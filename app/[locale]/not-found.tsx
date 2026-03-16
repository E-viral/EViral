import { Link } from '@/lib/navigation';
export default function NotFound() {
  return (
    <div className="pt-32 text-center max-w-xl mx-auto px-4">
      <h1 className="text-6xl font-black tracking-tighter mb-4">404</h1>
      <p className="text-gray-500 mb-8">Page not found</p>
      <Link href="/" className="btn-primary">Go Home</Link>
    </div>
  );
}
