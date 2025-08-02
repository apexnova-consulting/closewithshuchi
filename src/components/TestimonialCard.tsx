import { motion } from 'framer-motion';
import { Testimonial } from '@/data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="bg-white p-6 rounded-lg shadow-lg"
    >
      <div className="mb-4">
        <svg
          className="w-8 h-8 text-primary-dark opacity-50"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
      <div className="border-t pt-4">
        <p className="font-bold text-secondary">{testimonial.author}</p>
        <p className="text-sm text-gray-600">{testimonial.role}</p>
        {testimonial.location && (
          <p className="text-sm text-gray-500">{testimonial.location}</p>
        )}
        {testimonial.date && (
          <p className="text-xs text-gray-400 mt-1">{testimonial.date}</p>
        )}
      </div>
    </motion.div>
  );
}