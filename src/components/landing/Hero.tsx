'use client';
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Play, CheckCircle } from "lucide-react";
import { base44 } from '@/api/base44Client';
import { toast } from "sonner";

export default function Hero() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    //await base44.entities.WaitlistSignup.create({ email, interest: 'both' });
    setIsLoading(false);
    setIsSubmitted(true);
    toast.success("You're on the list! We'll be in touch soon.");
    setEmail('');
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden" id='joinWaitlist'>
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-[#FFC42E] rounded-full opacity-60 blur-3xl" />
      <div className="absolute bottom-40 left-10 w-40 h-40 bg-[#4DB4D7] rounded-full opacity-40 blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-[#F5A5B8] rounded-full opacity-50 blur-2xl" />
      
      <div className="container mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-black/5">
              <span className="w-2 h-2 bg-[#F7941D] rounded-full animate-pulse" />
              <span className="text-sm font-medium text-black/70">Coming Soon to iOS & Android</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-black">
              Own less.
              <br />
              <span className="relative inline-block">
                Access more.
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12">
                  <path d="M0 8 Q50 0 100 8 T200 8" stroke="#FFC42E" strokeWidth="4" fill="none"/>
                </svg>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-black/60 max-w-xl leading-relaxed">
              Lend what you have. Rent what you need. From cameras to kayaks, 
              Relengo connects you with everything around you.
            </p>
            
            {/* Waitlist form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 px-6 text-lg bg-white border-2 border-black/10 focus:border-[#F7941D] rounded-full"
              />
              <Button 
                type="submit"
                disabled={isLoading || isSubmitted}
                className="h-14 px-8 bg-black hover:bg-black/80 text-white rounded-full text-lg font-medium transition-all hover:scale-105"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Joined!
                  </>
                ) : (
                  <>
                    Join Waitlist
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </form>
            
            <div className="flex items-center gap-8 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 rounded-full border-2 border-[#FDF8E8] overflow-hidden"
                    style={{ backgroundColor: ['#FFC42E', '#F7941D', '#F5A5B8', '#4DB4D7'][i-1] }}
                  />
                ))}
              </div>
              <p className="text-sm text-black/60">
                <span className="font-semibold text-black">2,400+</span> people already on the waitlist
              </p>
            </div>
          </div>
          
          {/* Right visual */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square">
              {/* Phone mockup container */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-72 h-[580px] bg-black rounded-[3rem] p-3 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="w-full h-full bg-gradient-to-br from-[#FDF8E8] to-white rounded-[2.4rem] overflow-hidden">
                    {/* App screen content */}
                    <div className="p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
                          <span className="text-white font-bold text-lg">R</span>
                        </div>
                        <div className="flex gap-2">
                          <div className="w-8 h-8 bg-[#F5A5B8]/20 rounded-full" />
                          <div className="w-8 h-8 bg-[#4DB4D7]/20 rounded-full" />
                        </div>
                      </div>
                      <div className="space-y-3 pt-4">
                        <div className="h-32 bg-[#FFC42E]/20 rounded-2xl" />
                        <div className="h-24 bg-[#4DB4D7]/20 rounded-2xl" />
                        <div className="h-24 bg-[#F7941D]/20 rounded-2xl" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating cards */}
              <div className="absolute top-10 -left-10 bg-white p-4 rounded-2xl shadow-xl transform -rotate-6 hover:rotate-0 transition-transform">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#FFC42E] rounded-xl flex items-center justify-center">
                    📷
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Canon EOS R5</p>
                    <p className="text-xs text-black/50">$45/day</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-20 -right-5 bg-white p-4 rounded-2xl shadow-xl transform rotate-6 hover:rotate-0 transition-transform">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#4DB4D7] rounded-xl flex items-center justify-center">
                    🚴
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Mountain Bike</p>
                    <p className="text-xs text-black/50">$25/day</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
