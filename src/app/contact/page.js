"use client";
import React from 'react';

const ContactPage = () => {
    return (
        <div className="relative min-h-screen bg-bg-light pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-6">
                <header className="mb-16 bg-white p-12 rounded-2xl border border-green-100 shadow-sm">
                    <h1 className="text-4xl md:text-7xl font-black text-text-dark mb-6">
                        संपर्क करें <br />
                        <span className="text-primary">Contact Dairy Guru Ji</span>
                    </h1>
                    <p className="text-text-dark/70 text-xl font-medium max-w-2xl leading-relaxed">
                        Have questions about animal nutrition or interested in becoming a distributor? We are here to help.
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-white p-8 rounded-2xl border border-green-50 shadow-sm">
                            <h3 className="text-xs font-black uppercase tracking-widest text-text-dark/40 mb-4">Office Details</h3>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-bold text-text-dark mb-1 text-lg">Head Office</h4>
                                    <p className="text-text-dark/60">Sonipat, Haryana, India</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-text-dark mb-1 text-lg">Contact Numbers</h4>
                                    <p className="text-text-dark/60">+91-81680-48260</p>
                                    <p className="text-text-dark/60">+91-81680-48260 (WhatsApp)</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-text-dark mb-1 text-lg">Email Address</h4>
                                    <p className="text-text-dark/60">dairyguruji@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-secondary p-8 rounded-2xl shadow-xl shadow-yellow-900/10">
                            <h3 className="text-text-dark font-black uppercase tracking-tighter text-2xl mb-4 italic">Direct Support</h3>
                            <p className="text-text-dark/70 font-bold mb-6 italic">Talk to a dairy nutrition expert directly.</p>
                            <div className="flex flex-col gap-3">
                                <a href="tel:+918168048260" className="bg-text-dark text-white py-3 px-6 rounded-md font-bold text-center">Call Expert</a>
                                <a href="https://wa.me/918168048260" target="_blank" className="bg-white text-text-dark py-3 px-6 rounded-md font-bold text-center border border-text-dark/10">WhatsApp Chat</a>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-2 bg-white p-10 md:p-12 rounded-2xl border border-green-100 shadow-xl shadow-green-900/5">
                        <h2 className="text-3xl font-black text-text-dark mb-8 uppercase tracking-tighter">Send an Enquiry</h2>
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="md:col-span-1">
                                <label className="block text-xs font-black uppercase tracking-widest mb-2 text-text-dark/40">Your Name</label>
                                <input type="text" className="w-full bg-bg-light/50 border border-green-100 rounded-md py-3 px-4 focus:outline-none focus:border-[#1E7F43]" placeholder="Enter name" required />
                            </div>
                            <div className="md:col-span-1">
                                <label className="block text-xs font-black uppercase tracking-widest mb-2 text-text-dark/40">Phone Number</label>
                                <input type="tel" className="w-full bg-bg-light/50 border border-green-100 rounded-md py-3 px-4 focus:outline-none focus:border-[#1E7F43]" placeholder="Enter mobile number" required />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-xs font-black uppercase tracking-widest mb-2 text-text-dark/40">I am a...</label>
                                <select className="w-full bg-bg-light/50 border border-green-100 rounded-md py-3 px-4 focus:outline-none focus:border-[#1E7F43]">
                                    <option>Dairy Farmer</option>
                                    <option>Distributor / Wholesaler</option>
                                    <option>Feed Manufacturing Partner</option>
                                    <option>Sales Officer Aspirant</option>
                                </select>
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-xs font-black uppercase tracking-widest mb-2 text-text-dark/40">How can we help you?</label>
                                <textarea className="w-full bg-bg-light/50 border border-green-100 rounded-md py-4 px-4 h-32 focus:outline-none focus:border-[#1E7F43]" placeholder="Write your message here..."></textarea>
                            </div>
                            <div className="md:col-span-2">
                                <button type="submit" className="w-full btn-primary uppercase tracking-widest">
                                    Send Message Now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
