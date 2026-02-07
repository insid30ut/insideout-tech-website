import Hero from '../components/Hero';
import ServiceHighlights from '../components/ServiceHighlights';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ServiceHighlights />
      <Testimonials />
      <CallToAction />
    </div>
  );
}
