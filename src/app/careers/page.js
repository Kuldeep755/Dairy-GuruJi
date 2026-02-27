"use client";
import React from 'react';

const CareersPage = () => {
    return (
        <div className="relative min-h-screen bg-bg-light pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-6">
                <header className="mb-16 bg-white p-12 rounded-2xl border border-green-100 shadow-sm">
                    <h1 className="text-4xl md:text-7xl font-black text-text-dark mb-6">
                        हमारे साथ जुड़ें <br />
                        <span className="text-primary">Grow with Dairy Guru Ji</span>
                    </h1>
                    <p className="text-text-dark/70 text-xl font-medium max-w-2xl leading-relaxed">
                        We are building a team that cares about farmers. If you are passionate about dairy nutrition and solving real farm problems, we want you.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl font-black text-text-dark mb-8 uppercase tracking-tighter">Why Work With Us?</h2>
                        <div className="grid grid-cols-1 gap-6">
                            {[
                                { title: "Farmer-First Culture", desc: "Every decision we make starts with how it helps the farmer." },
                                { title: "Growth Opportunities", desc: "As we scale across India, you grow with us in responsibilities." },
                                { title: "Innovation", desc: "Work on scientific nutrition solutions that make a real difference." },
                                { title: "Field Experience", desc: "Get real ground-level experience in the heart of Indian dairy." }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-xl border border-green-50 shadow-sm">
                                    <h4 className="font-bold text-primary mb-2">{item.title}</h4>
                                    <p className="text-text-dark/60 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-primary p-10 rounded-2xl shadow-xl shadow-green-900/20 text-white">
                        <h2 className="text-3xl font-black mb-8 uppercase tracking-tighter text-secondary">Apply Now</h2>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-xs font-black uppercase tracking-widest mb-2 text-white/70">Full Name</label>
                                <input type="text" className="w-full bg-white/10 border border-white/20 rounded-md py-3 px-4 focus:outline-none focus:border-[#F4C430]" placeholder="Enter your name" required />
                            </div>
                            <div>
                                <label className="block text-xs font-black uppercase tracking-widest mb-2 text-white/70">Email Address</label>
                                <input type="email" className="w-full bg-white/10 border border-white/20 rounded-md py-3 px-4 focus:outline-none focus:border-[#F4C430]" placeholder="Enter your email" required />
                            </div>
                            <div>
                                <label className="block text-xs font-black uppercase tracking-widest mb-2 text-white/70">Role Interested In</label>
                                <select className="w-full bg-white/10 border border-white/20 rounded-md py-3 px-4 focus:outline-none focus:border-[#F4C430] text-white">
                                    <option className="text-black">Sales Officer</option>
                                    <option className="text-black">Technical Expert</option>
                                    <option className="text-black">Logistics / Operations</option>
                                    <option className="text-black">Marketing</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-black uppercase tracking-widest mb-2 text-white/70">Upload Resume (PDF)</label>
                                <input type="file" className="w-full bg-white/5 border border-dashed border-white/20 rounded-md py-4 px-4 text-sm" accept=".pdf" required />
                            </div>
                            <button type="submit" className="w-full py-4 bg-secondary text-text-dark font-black rounded-md hover:scale-[1.02] transition-transform uppercase tracking-widest">
                                Submit Application
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareersPage;
