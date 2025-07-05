import React from 'react';
import { motion } from 'framer-motion';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { portfolioData } from '../data/portfolioData';
import { 
  FiMapPin, 
  FiMail, 
  FiPhone, 
  FiGlobe, 
  FiGithub, 
  FiLinkedin,
  FiSend 
} from 'react-icons/fi';

interface FormInputs {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();
  
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    // This would normally send an email or post to a server
    console.log('Form data submitted:', data);
    alert('Thank you for your message! I\'ll get back to you soon.');
    reset();
  };

  return (
    <section id="contact" className="section bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-light-text dark:text-white mb-4">
            Get In <span className="text-light-accent dark:text-dark-accent">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-light-accent dark:bg-dark-accent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-light-text dark:text-white mb-8">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-light-accent/10 dark:bg-dark-accent/20 text-light-accent dark:text-dark-accent">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-light-text dark:text-white mb-1">Location</h4>
                  <p className="text-gray-700 dark:text-gray-300">{portfolioData.contact.location}</p>
                </div>
              </div>
              
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-light-accent/10 dark:bg-dark-accent/20 text-light-accent dark:text-dark-accent">
                  <FiMail size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-light-text dark:text-white mb-1">Email</h4>
                  <a 
                    href={`mailto:${portfolioData.contact.email}`} 
                    className="text-gray-700 dark:text-gray-300 hover:text-light-accent dark:hover:text-dark-accent transition-colors"
                  >
                    {portfolioData.contact.email}
                  </a>
                </div>
              </div>
              
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-light-accent/10 dark:bg-dark-accent/20 text-light-accent dark:text-dark-accent">
                  <FiPhone size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-light-text dark:text-white mb-1">Phone</h4>
                  <a 
                    href={`tel:${portfolioData.contact.phone}`} 
                    className="text-gray-700 dark:text-gray-300 hover:text-light-accent dark:hover:text-dark-accent transition-colors"
                  >
                    {portfolioData.contact.phone}
                  </a>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-light-text dark:text-white mb-6">
                Find Me On
              </h3>
              
              <div className="flex gap-4">
                <motion.a 
                  href={`https://${portfolioData.contact.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 dark:bg-zinc-700 text-light-text dark:text-white hover:bg-light-accent dark:hover:bg-dark-accent hover:text-white transition-all"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiGithub size={20} />
                </motion.a>
                
                <motion.a 
                  href={`https://${portfolioData.contact.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 dark:bg-zinc-700 text-light-text dark:text-white hover:bg-light-accent dark:hover:bg-dark-accent hover:text-white transition-all"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiLinkedin size={20} />
                </motion.a>
                
                <motion.a 
                  href={`https://${portfolioData.contact.portfolio}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 dark:bg-zinc-700 text-light-text dark:text-white hover:bg-light-accent dark:hover:bg-dark-accent hover:text-white transition-all"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiGlobe size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-light-text dark:text-white mb-8">
              Send Me a Message
            </h3>
            
            <form 
              className="space-y-6" 
              onSubmit={handleSubmit(onSubmit)}
            >
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className={`w-full px-4 py-3 rounded-md border ${
                    errors.name 
                      ? 'border-red-500 dark:border-red-400' 
                      : 'border-gray-300 dark:border-zinc-600'
                  } bg-white dark:bg-zinc-700 text-light-text dark:text-white focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent`}
                  placeholder="John Doe"
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500 dark:text-red-400">
                    {errors.name.message}
                  </p>
                )}
              </div>
              
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className={`w-full px-4 py-3 rounded-md border ${
                    errors.email 
                      ? 'border-red-500 dark:border-red-400' 
                      : 'border-gray-300 dark:border-zinc-600'
                  } bg-white dark:bg-zinc-700 text-light-text dark:text-white focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent`}
                  placeholder="john@example.com"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500 dark:text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>
              
              {/* Subject Input */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className={`w-full px-4 py-3 rounded-md border ${
                    errors.subject 
                      ? 'border-red-500 dark:border-red-400' 
                      : 'border-gray-300 dark:border-zinc-600'
                  } bg-white dark:bg-zinc-700 text-light-text dark:text-white focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent`}
                  placeholder="Project Discussion"
                  {...register('subject', { required: 'Subject is required' })}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500 dark:text-red-400">
                    {errors.subject.message}
                  </p>
                )}
              </div>
              
              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className={`w-full px-4 py-3 rounded-md border ${
                    errors.message 
                      ? 'border-red-500 dark:border-red-400' 
                      : 'border-gray-300 dark:border-zinc-600'
                  } bg-white dark:bg-zinc-700 text-light-text dark:text-white focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent`}
                  placeholder="Write your message here..."
                  {...register('message', { required: 'Message is required' })}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500 dark:text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>
              
              {/* Submit Button */}
              <motion.button
                type="submit"
                className="btn btn-primary w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message <FiSend className="ml-2" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
