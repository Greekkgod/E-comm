"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { blogPosts } from '@/utils/constants';


export default function BlogPost({ id = "1" }: { id?: string }) {
  const router = useRouter();

  // Blog post data
  const blogPost = blogPosts.find(post => post.id === id);

  if (!blogPost) {
    return (
      <div className="container  h-full  mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg mb-8">The blog post you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <Link
          href="/blog"
          className="inline-flex items-center justify-center px-6 py-3 bg-amber-800 text-white rounded-md hover:bg-amber-500 transition-colors"
        >
          Return to Blog
        </Link>
      </div>
    );
  }

  return (

    <div className="bg-gradient-to-b mt-10 from-amber-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Back button */}
        <div className="mb-6">
          <Link href="/blog" className="flex items-center text-orange-700 hover:text-orange-500 transition" onClick={() => router.back()}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Blog
          </Link>
        </div>

        {/* Featured Image */}
        <div className="relative w-full h-96 rounded-lg overflow-hidden mb-12 shadow-lg">
          <Image
            src={blogPost.image}
            alt={blogPost.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Blog Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">{blogPost.title}</h1>

        </div>


        <div>
          <div className="mt-12 bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Discover Your </h3>Grocery
            <p className="text-gray-700 mb-4">Experience the freshness of veges and stay healthy</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/shop" className="bg-orange-600 text-white px-6 py-3 rounded-md font-medium hover:bg-orange-700 transition text-center">
                Shop fresh food
              </Link>
              <Link href="/contact" className="bg-white text-orange-600 border border-orange-600 px-6 py-3 rounded-md font-medium hover:bg-orange-50 transition text-center">
                Get Expert Advice
              </Link>
            </div>
          </div>


          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts
                .filter((post) => post.id !== id) // Exclude the current blog post
                .slice(0, 2) // Show only two related articles
                .map((post) => (
                  <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-2">{post.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{post.excerpt}</p>
                      <Link href={`/blog/${post.id}`} className="text-orange-600 font-medium hover:text-orange-700">
                        Read More →
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>


          <div className="mt-12 bg-gray-100 rounded-lg p-6">
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold text-gray-900">Subscribe to Our Newsletter</h3>
              <p className="text-gray-600">Receive  special offers, and updates on Grocery arrivals</p>
            </div>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <button
                type="submit"
                className="bg-orange-600 text-white px-6 py-2 rounded-md font-medium hover:bg-orange-700 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}