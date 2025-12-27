"use client";

import Link from "next/link";
import { useState } from "react";

// Logo Component - Radar icon
function Logo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="32" height="32" viewBox="0 0 32 32" fill="none">
      {/* Concentric circles */}
      <circle cx="16" cy="16" r="14" stroke="#93c5fd" strokeWidth="1.5" fill="none" />
      <circle cx="16" cy="16" r="10" stroke="#93c5fd" strokeWidth="1.5" fill="none" />
      <circle cx="16" cy="16" r="6" stroke="#93c5fd" strokeWidth="1.5" fill="none" />
      {/* Radar sweep */}
      <path d="M16 16 L16 2 A14 14 0 0 1 28 10 Z" fill="#3b82f6" opacity="0.4" />
      {/* Cross lines */}
      <line x1="16" y1="2" x2="16" y2="30" stroke="#60a5fa" strokeWidth="1" />
      <line x1="2" y1="16" x2="30" y2="16" stroke="#60a5fa" strokeWidth="1" />
      {/* Center dot */}
      <circle cx="16" cy="16" r="2" fill="#1d4ed8" />
      {/* Detected blips */}
      <circle cx="22" cy="10" r="2" fill="#3b82f6" />
      <circle cx="10" cy="20" r="1.5" fill="#60a5fa" />
      <circle cx="20" cy="22" r="1.5" fill="#60a5fa" />
    </svg>
  );
}

// Navigation Component
function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#e0e4e9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Logo />
            <span className="text-xl font-semibold text-[#2e353b]">Prompt Clarity</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-[#74838f] hover:text-[#509ee3] transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-[#74838f] hover:text-[#509ee3] transition-colors">
              How it Works
            </Link>
            <Link href="/docs" className="text-[#74838f] hover:text-[#509ee3] transition-colors">
              Docs
            </Link>
            <Link href="#pricing" className="text-[#74838f] hover:text-[#509ee3] transition-colors">
              Pricing
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/lucidgeo/lucidgeo"
              className="hidden sm:flex items-center gap-2 text-[#74838f] hover:text-[#2e353b] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </Link>
            <Link
              href="https://github.com/lucidgeo/lucidgeo"
              className="bg-[#509ee3] text-white px-5 py-2 rounded-lg font-medium btn-primary hover:bg-[#4a90d9]"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="hero-gradient pt-32 pb-20 relative overflow-hidden">
      {/* Decorative line chart elements */}
      <div className="hero-decoration top-32 left-[5%]">
        <svg width="200" height="150" viewBox="0 0 200 150" className="text-[#509ee3]">
          <path d="M10 100 L40 80 L70 90 L100 50 L130 70 L160 30 L190 40" stroke="currentColor" strokeWidth="2" fill="none" className="chart-line" />
        </svg>
      </div>
      <div className="hero-decoration bottom-20 right-[5%]">
        <svg width="180" height="120" viewBox="0 0 180 120" className="text-[#88bf4d]">
          <path d="M10 80 L50 60 L90 70 L130 40 L170 50" stroke="currentColor" strokeWidth="2" fill="none" className="chart-line" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Open Source Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e6f4ea] text-[#1e7e34] text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Open Source
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2e353b] leading-tight">
            Get full <span className="text-[#509ee3]">AI visibility</span> with unlimited prompt tracking
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg sm:text-xl text-[#74838f] max-w-3xl mx-auto leading-relaxed">
            Prompt Clarity is an open source tool that tracks and optimizes how LLMs mention your brand using your own API keys.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://github.com/lucidgeo/lucidgeo"
              className="w-full sm:w-auto bg-[#509ee3] text-white px-8 py-3 rounded-lg font-medium text-lg btn-primary hover:bg-[#4a90d9] flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View on GitHub
            </Link>
            <Link
              href="#demo"
              className="w-full sm:w-auto bg-white text-[#2e353b] px-8 py-3 rounded-lg font-medium text-lg btn-secondary hover:border-[#509ee3]"
            >
              See how it works
            </Link>
          </div>

          {/* Social Proof */}
          <p className="mt-6 text-sm text-[#949aab] flex items-center justify-center gap-2">
            <svg className="w-4 h-4 text-[#88bf4d]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Deploy in minutes
          </p>
        </div>

        {/* Product Screenshot */}
        <div className="mt-16 relative">
          <div className="bg-white rounded-xl screenshot-shadow border border-[#e0e4e9] overflow-hidden max-w-5xl mx-auto">
            {/* Browser Chrome */}
            <div className="bg-[#f9fbfc] px-4 py-3 flex items-center gap-2 border-b border-[#e0e4e9]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-white rounded-md px-4 py-1.5 text-sm text-[#74838f] border border-[#e0e4e9] w-72 text-center">
                  localhost:3000/dashboard
                </div>
              </div>
            </div>
            {/* Dashboard Preview */}
            <div className="p-2 sm:p-4 bg-[#f9fbfc]">
              <div className="flex gap-3">
                {/* Sidebar */}
                <div className="w-40 bg-white rounded-lg border border-[#e0e4e9] p-3 hidden lg:block shrink-0">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-7 h-7 bg-[#f97316] rounded flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-[#2e353b] text-sm">Netbird</span>
                      <span className="text-[9px] text-[#949aab]">Netbird.io</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-[#949aab] mb-1.5 px-2">Main</p>
                  <div className="space-y-0.5">
                    {[
                      { name: "Overview", icon: "grid", active: true },
                      { name: "Sources", icon: "link", active: false },
                      { name: "Prompts", icon: "file", active: false },
                    ].map((item, i) => (
                      <div key={i} className={`px-2 py-1.5 rounded text-[11px] flex items-center gap-2 ${item.active ? "bg-[#f9fbfc] text-[#2e353b] font-medium" : "text-[#74838f]"}`}>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {item.icon === "grid" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />}
                          {item.icon === "link" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />}
                          {item.icon === "file" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />}
                        </svg>
                        {item.name}
                      </div>
                    ))}
                  </div>
                  <p className="text-[10px] text-[#949aab] mb-1.5 px-2 mt-3">Actions</p>
                  <div className="space-y-0.5">
                    {["On-Page", "Off-Page"].map((item, i) => (
                      <div key={i} className="px-2 py-1.5 rounded text-[11px] flex items-center gap-2 text-[#74838f]">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {item}
                      </div>
                    ))}
                  </div>
                  <p className="text-[10px] text-[#949aab] mb-1.5 px-2 mt-3">Settings</p>
                  <div className="space-y-0.5">
                    {["Models", "Competitors", "Team", "Settings"].map((item, i) => (
                      <div key={i} className="px-2 py-1.5 rounded text-[11px] flex items-center gap-2 text-[#74838f]">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {item === "Models" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />}
                          {item === "Competitors" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />}
                          {item === "Team" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />}
                          {item === "Settings" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />}
                        </svg>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                {/* Main Content */}
                <div className="flex-1 min-w-0">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#74838f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                      <span className="font-semibold text-[#2e353b] text-sm">Overview</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="px-2 py-1 bg-white border border-[#e0e4e9] rounded text-[10px] text-[#74838f] flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                        All models
                      </div>
                      <div className="px-2 py-1 bg-white border border-[#e0e4e9] rounded text-[10px] text-[#74838f] flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Last 7 days
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    {/* Visibility Chart */}
                    <div className="flex-1 bg-white rounded-lg p-3 border border-[#e0e4e9]">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-[#2e353b] text-xs">Visibility</h3>
                          <p className="text-[9px] text-[#949aab]">Percentage of chats mentioning each brand</p>
                        </div>
                      </div>
                      <div className="h-28 relative">
                        {/* Y-axis labels */}
                        <div className="absolute left-0 top-0 bottom-4 w-7 flex flex-col justify-between text-[9px] text-[#949aab]">
                          <span>80%</span>
                          <span>50%</span>
                          <span>25%</span>
                        </div>
                        {/* Chart area */}
                        <div className="ml-8 h-full relative">
                          {/* Grid lines */}
                          <div className="absolute inset-0 flex flex-col justify-between">
                            {[0, 1, 2].map((i) => (
                              <div key={i} className="border-b border-[#e0e4e9] border-dashed" />
                            ))}
                          </div>
                          {/* Chart lines */}
                          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                            {/* Netbird - orange (highlighted, YOUR brand) - top performer around 75% */}
                            <path d="M0 18 Q50 15 100 20 T150 18 T200 22 T250 15 T300 12" stroke="#f97316" strokeWidth="3" fill="none" />
                            {/* Cloudflare - purple, around 55-60% */}
                            <path d="M0 38 Q50 42 100 35 T150 40 T200 38 T250 45 T300 40" stroke="#a855f7" strokeWidth="2" fill="none" />
                            {/* Tailscale - green, around 45-50% */}
                            <path d="M0 48 Q50 52 100 45 T150 50 T200 55 T250 48 T300 52" stroke="#22c55e" strokeWidth="2" fill="none" />
                            {/* OpenVPN - red, around 45% */}
                            <path d="M0 52 Q50 48 100 55 T150 52 T200 48 T250 55 T300 52" stroke="#ef4444" strokeWidth="2" fill="none" />
                            {/* Zscaler - teal, around 42-48% */}
                            <path d="M0 55 Q50 58 100 52 T150 58 T200 55 T250 52 T300 55" stroke="#14b8a6" strokeWidth="2" fill="none" />
                            {/* Perimeter 81 - pink, around 40-45% */}
                            <path d="M0 60 Q50 55 100 62 T150 58 T200 62 T250 58 T300 60" stroke="#ec4899" strokeWidth="2" fill="none" />
                            {/* Fortinet - amber, around 35% */}
                            <path d="M0 68 Q50 72 100 65 T150 70 T200 68 T250 72 T300 65" stroke="#f59e0b" strokeWidth="2" fill="none" />
                          </svg>
                        </div>
                        {/* X-axis labels */}
                        <div className="ml-8 flex justify-between text-[9px] text-[#949aab] mt-1">
                          <span>Dec 20</span>
                          <span>Dec 21</span>
                          <span>Dec 22</span>
                          <span>Dec 23</span>
                          <span>Dec 24</span>
                          <span>Dec 25</span>
                          <span>Dec 26</span>
                        </div>
                      </div>
                    </div>
                    {/* Brands Table */}
                    <div className="w-56 bg-white rounded-lg p-3 border border-[#e0e4e9] hidden md:block shrink-0">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-[#2e353b] text-xs">Brands</h3>
                          <p className="text-[9px] text-[#949aab]">Brands with highest visibility</p>
                        </div>
                        <span className="text-[10px] text-[#509ee3]">+ Add</span>
                      </div>
                      <div className="space-y-1">
                        <div className="grid grid-cols-[14px_1fr_40px_32px_28px] gap-1 text-[9px] text-[#949aab] pb-1 border-b border-[#e0e4e9]">
                          <span>#</span>
                          <span>Brand</span>
                          <span>Visibility</span>
                          <span>Sent.</span>
                          <span>Place</span>
                        </div>
                        {[
                          { rank: 1, name: "Netbird", color: "#f97316", visibility: "72.1%", change: "+8.3%", sentiment: 82, sentimentChange: "+4", place: "1st", placeChange: "+2", isYourBrand: true },
                          { rank: 2, name: "Cloudflare", color: "#a855f7", visibility: "56.3%", change: "-11.8%", sentiment: 70, sentimentChange: "-10", place: "4th", placeChange: "-1", isYourBrand: false },
                          { rank: 3, name: "Tailscale", color: "#22c55e", visibility: "46.3%", change: "-9.3%", sentiment: 69, sentimentChange: "-10", place: "4th", placeChange: "", isYourBrand: false },
                          { rank: 4, name: "OpenVPN", color: "#ef4444", visibility: "46.3%", change: "-9.3%", sentiment: 59, sentimentChange: "-3", place: "7th", placeChange: "+1", isYourBrand: false },
                          { rank: 5, name: "Zscaler", color: "#14b8a6", visibility: "45%", change: "-9.2%", sentiment: 68, sentimentChange: "-6", place: "6th", placeChange: "+2", isYourBrand: false },
                          { rank: 6, name: "Perimeter 81", color: "#ec4899", visibility: "43.8%", change: "+2.1%", sentiment: 65, sentimentChange: "-1", place: "7th", placeChange: "", isYourBrand: false },
                        ].map((brand) => (
                          <div key={brand.rank} className={`grid grid-cols-[14px_1fr_40px_32px_28px] gap-1 items-center text-[9px] ${brand.isYourBrand ? "bg-[#fff7ed] -mx-1 px-1 py-0.5 rounded" : ""}`}>
                            <span className="text-[#74838f]">{brand.rank}</span>
                            <div className="flex items-center gap-1 min-w-0">
                              <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: brand.color }}></div>
                              <span className={`truncate ${brand.isYourBrand ? "text-[#f97316] font-medium" : "text-[#2e353b]"}`}>{brand.name}</span>
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[#2e353b]">{brand.visibility}</span>
                              <span className={brand.change.startsWith("+") ? "text-[#22c55e] text-[8px]" : "text-[#ef4444] text-[8px]"}>{brand.change}</span>
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[#2e353b]">{brand.sentiment}</span>
                              <span className={`text-[8px] ${brand.sentimentChange.startsWith("+") ? "text-[#22c55e]" : brand.sentimentChange.startsWith("-") ? "text-[#ef4444]" : "text-[#949aab]"}`}>{brand.sentimentChange}</span>
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[#2e353b]">{brand.place}</span>
                              <span className={`text-[8px] ${brand.placeChange.startsWith("+") ? "text-[#22c55e]" : brand.placeChange.startsWith("-") ? "text-[#ef4444]" : "text-[#949aab]"}`}>{brand.placeChange}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Bottom Row */}
                  <div className="flex gap-3 mt-3">
                    {/* Top Sources */}
                    <div className="flex-1 bg-white rounded-lg p-3 border border-[#e0e4e9]">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-[#2e353b] text-xs">Top Sources</h3>
                          <p className="text-[9px] text-[#949aab]">Sources across active models</p>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="grid grid-cols-[1fr_45px_50px_55px] gap-2 text-[9px] text-[#949aab] pb-1 border-b border-[#e0e4e9]">
                          <span>Domain</span>
                          <span>Usage</span>
                          <span>Avg Cites</span>
                          <span>Type</span>
                        </div>
                        {[
                          { domain: "en.wikipedia.org", usage: "25%", count: "(20)", citations: "3.3", type: "Reference", typeColor: "#f59e0b" },
                          { domain: "peerspot.com", usage: "17.5%", count: "(14)", citations: "1.6", type: "Editorial", typeColor: "#22c55e" },
                          { domain: "cyberinsider.com", usage: "12.5%", count: "(10)", citations: "1.4", type: "Editorial", typeColor: "#22c55e" },
                          { domain: "comparitech.com", usage: "10%", count: "(8)", citations: "1.3", type: "Editorial", typeColor: "#22c55e" },
                          { domain: "techradar.com", usage: "10%", count: "(8)", citations: "1", type: "Editorial", typeColor: "#22c55e" },
                        ].map((source) => (
                          <div key={source.domain} className="grid grid-cols-[1fr_45px_50px_55px] gap-2 items-center text-[9px]">
                            <span className="text-[#2e353b] truncate">{source.domain}</span>
                            <div className="flex items-center gap-0.5">
                              <span className="text-[#74838f]">{source.usage}</span>
                              <span className="text-[#949aab] text-[8px]">{source.count}</span>
                            </div>
                            <span className="text-[#74838f]">{source.citations}</span>
                            <span className="px-1.5 py-0.5 rounded text-white text-[8px]" style={{ backgroundColor: source.typeColor }}>{source.type}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Domain Type Donut */}
                    <div className="w-44 bg-white rounded-lg p-3 border border-[#e0e4e9] hidden md:block shrink-0">
                      <div>
                        <h3 className="font-semibold text-[#2e353b] text-xs">Domain type</h3>
                        <p className="text-[9px] text-[#949aab]">Breakdown by source category</p>
                      </div>
                      <div className="relative w-20 h-20 mx-auto mt-2">
                        <svg viewBox="0 0 36 36" className="w-full h-full">
                          <circle cx="18" cy="18" r="15.9" fill="none" stroke="#22c55e" strokeWidth="3.5" strokeDasharray="63 37" strokeDashoffset="25" />
                          <circle cx="18" cy="18" r="15.9" fill="none" stroke="#f59e0b" strokeWidth="3.5" strokeDasharray="13 87" strokeDashoffset="62" />
                          <circle cx="18" cy="18" r="15.9" fill="none" stroke="#3b82f6" strokeWidth="3.5" strokeDasharray="12 88" strokeDashoffset="49" />
                          <circle cx="18" cy="18" r="15.9" fill="none" stroke="#9ca3af" strokeWidth="3.5" strokeDasharray="12 88" strokeDashoffset="37" />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-base font-bold text-[#2e353b]">167</span>
                          <span className="text-[8px] text-[#949aab]">Citations</span>
                        </div>
                      </div>
                      <div className="mt-2 space-y-0.5 text-[9px]">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#22c55e]"></div><span className="text-[#74838f]">Editorial</span></div>
                          <span className="text-[#2e353b]">105 <span className="text-[#949aab]">62.9%</span></span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#f59e0b]"></div><span className="text-[#74838f]">Reference</span></div>
                          <span className="text-[#2e353b]">21 <span className="text-[#949aab]">12.6%</span></span>
                        </div>
                      </div>
                    </div>
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

// Features Section with Tabs
function FeaturesSection() {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      id: "visibility",
      tabLabel: "Visibility Tracking",
      title: "Multi-Model Visibility Tracking",
      description: "Monitor your brand mentions across ChatGPT, Claude, Perplexity, Gemini, and Grok. See exactly when and how often you're recommended compared to competitors.",
      bullets: [
        "Track mentions across 5 major AI platforms",
        "Customizable automated prompt execution",
        "Historical visibility trends and analytics",
        "Real-time visibility changes"
      ],
      href: "/features/multi-model-visibility",
    },
    {
      id: "competitors",
      tabLabel: "Competitor Analysis",
      title: "Competitor Analysis",
      description: "Track how competitors rank against you in AI responses. Compare visibility, sentiment, and share of voice across all models to understand your competitive position.",
      bullets: [
        "Benchmark against competitors",
        "Share of voice comparison",
        "Sentiment analysis by brand",
        "Competitive positioning insights"
      ],
      href: "/features/competitor-analysis",
    },
    {
      id: "sources",
      tabLabel: "Source Attribution",
      title: "Source Attribution",
      description: "Discover which websites and URLs LLMs cite when discussing your industry. Identify content gaps and citation opportunities to improve your AI visibility.",
      bullets: [
        "Track which sources AI models cite",
        "Identify high-authority domains",
        "Find content gap opportunities",
        "Monitor competitor citations"
      ],
      href: "/features/source-attribution",
    },
    {
      id: "prompts",
      tabLabel: "Custom Prompts",
      title: "Custom Prompts",
      description: "Create and manage prompts that matter to your business. Track specific queries your customers might ask AI assistants about your industry.",
      bullets: [
        "Auto-generated industry prompts",
        "Organize prompts by topic",
        "Track prompt performance over time",
        "A/B test different query styles"
      ],
      href: "/features/custom-prompts",
    },
    {
      id: "onpage",
      tabLabel: "On-Page Optimization",
      title: "On-Page Optimization",
      description: "Get actionable recommendations to optimize your website content. Improve structure, headings, and schema markup for better AI visibility.",
      bullets: [
        "Content structure recommendations",
        "Schema markup suggestions",
        "Heading optimization tips",
        "Agent, Crawler, and LLM-friendly content guidelines"
      ],
      href: "/features/on-page-optimization",
    },
    {
      id: "offpage",
      tabLabel: "Off-Page Strategies",
      title: "Off-Page Strategies",
      description: "Build authority in the places that matter. Get editorial coverage, community presence, and partnership recommendations to boost your AI visibility.",
      bullets: [
        "Editorial coverage opportunities",
        "Community presence recommendations",
        "Partnership suggestions",
        "Authority building tactics"
      ],
      href: "/features/off-page-strategies",
    },
  ];

  const activeFeature = features[activeTab];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2e353b]">
            Everything you need to track AI visibility
          </h2>
          <p className="mt-4 text-lg text-[#74838f]">
            Comprehensive tools to monitor, analyze, and improve your brand&apos;s presence in LLM responses.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {features.map((feature, index) => (
            <button
              key={feature.id}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === index
                  ? "bg-[#509ee3] text-white shadow-md"
                  : "bg-[#f9fbfc] text-[#74838f] hover:bg-[#e6f0fa] hover:text-[#509ee3]"
              }`}
            >
              {feature.tabLabel}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-[#f9fbfc] rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#2e353b] mb-4">
                {activeFeature.title}
              </h3>
              <p className="text-lg text-[#74838f] mb-6">
                {activeFeature.description}
              </p>
              <ul className="space-y-3 mb-8">
                {activeFeature.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#509ee3] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#2e353b]">{bullet}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={activeFeature.href}
                className="inline-flex items-center gap-2 text-[#509ee3] font-medium hover:underline"
              >
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Visual/Mockup */}
            <div className="bg-white rounded-xl shadow-lg border border-[#e0e4e9] overflow-hidden">
              {activeTab === 0 && (
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-[#2e353b] text-sm">Visibility Over Time</h4>
                    <span className="text-xs text-[#949aab]">Last 7 days</span>
                  </div>
                  <div className="h-48 relative">
                    <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-[10px] text-[#949aab]">
                      <span>80%</span>
                      <span>60%</span>
                      <span>40%</span>
                      <span>20%</span>
                    </div>
                    <div className="ml-10 h-full relative">
                      <svg className="w-full h-full" viewBox="0 0 300 150" preserveAspectRatio="none">
                        <path d="M0 60 Q50 50 100 55 T150 45 T200 40 T250 35 T300 30" stroke="#f97316" strokeWidth="3" fill="none" />
                        <path d="M0 80 Q50 85 100 75 T150 80 T200 85 T250 80 T300 85" stroke="#a855f7" strokeWidth="2" fill="none" />
                        <path d="M0 100 Q50 95 100 105 T150 100 T200 95 T250 100 T300 95" stroke="#22c55e" strokeWidth="2" fill="none" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex justify-center gap-6 mt-3 text-xs">
                    <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#f97316]"></div>Your Brand</div>
                    <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#a855f7]"></div>Competitor A</div>
                    <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#22c55e]"></div>Competitor B</div>
                  </div>
                </div>
              )}
              {activeTab === 1 && (
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-[#2e353b] text-sm">Competitor Rankings</h4>
                    <span className="text-xs text-[#949aab]">All models</span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { name: "Your Brand", visibility: 72, color: "#f97316" },
                      { name: "Cloudflare", visibility: 56, color: "#a855f7" },
                      { name: "Tailscale", visibility: 46, color: "#22c55e" },
                      { name: "OpenVPN", visibility: 45, color: "#ef4444" },
                      { name: "Zscaler", visibility: 43, color: "#14b8a6" },
                    ].map((brand, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="text-xs text-[#74838f] w-4">{i + 1}</span>
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: brand.color }}></div>
                        <span className="text-sm text-[#2e353b] w-24">{brand.name}</span>
                        <div className="flex-1 bg-[#e0e4e9] rounded-full h-2">
                          <div className="h-2 rounded-full" style={{ width: `${brand.visibility}%`, backgroundColor: brand.color }}></div>
                        </div>
                        <span className="text-xs font-medium text-[#2e353b] w-10">{brand.visibility}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {activeTab === 2 && (
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-[#2e353b] text-sm">Top Cited Sources</h4>
                    <span className="text-xs text-[#949aab]">167 citations</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { domain: "en.wikipedia.org", citations: 20, type: "Reference" },
                      { domain: "peerspot.com", citations: 14, type: "Editorial" },
                      { domain: "techradar.com", citations: 10, type: "Editorial" },
                      { domain: "g2.com", citations: 8, type: "Review" },
                      { domain: "gartner.com", citations: 6, type: "Analyst" },
                    ].map((source, i) => (
                      <div key={i} className="flex items-center justify-between py-2 border-b border-[#e0e4e9] last:border-0">
                        <span className="text-sm text-[#2e353b]">{source.domain}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-[#74838f]">{source.citations} cites</span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-[#e6f0fa] text-[#509ee3]">{source.type}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {activeTab === 3 && (
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-[#2e353b] text-sm">Active Prompts</h4>
                    <span className="text-xs text-[#509ee3]">+ Add prompt</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { prompt: "Best VPN for remote teams", topic: "Product", mentions: 12 },
                      { prompt: "Secure network solutions", topic: "General", mentions: 8 },
                      { prompt: "Zero trust networking tools", topic: "Technical", mentions: 15 },
                      { prompt: "Enterprise security software", topic: "Enterprise", mentions: 6 },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between py-2 border-b border-[#e0e4e9] last:border-0">
                        <div>
                          <p className="text-sm text-[#2e353b]">{item.prompt}</p>
                          <span className="text-[10px] text-[#949aab]">{item.topic}</span>
                        </div>
                        <span className="text-xs text-[#74838f]">{item.mentions} mentions</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {activeTab === 4 && (
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-[#2e353b] text-sm">On-Page Recommendations</h4>
                    <span className="text-xs text-[#22c55e]">3 quick wins</span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { task: "Add FAQ schema to /pricing", impact: "High", status: "todo" },
                      { task: "Improve H1 on landing page", impact: "Medium", status: "done" },
                      { task: "Add product comparison table", impact: "High", status: "todo" },
                      { task: "Update meta descriptions", impact: "Low", status: "done" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${item.status === "done" ? "bg-[#22c55e] border-[#22c55e]" : "border-[#e0e4e9]"}`}>
                          {item.status === "done" && <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>}
                        </div>
                        <span className={`flex-1 text-sm ${item.status === "done" ? "text-[#949aab] line-through" : "text-[#2e353b]"}`}>{item.task}</span>
                        <span className={`text-[10px] px-2 py-0.5 rounded ${item.impact === "High" ? "bg-[#fef2f2] text-[#ef4444]" : item.impact === "Medium" ? "bg-[#fffbeb] text-[#f59e0b]" : "bg-[#f0fdf4] text-[#22c55e]"}`}>{item.impact}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {activeTab === 5 && (
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-[#2e353b] text-sm">Off-Page Opportunities</h4>
                    <span className="text-xs text-[#949aab]">12 suggestions</span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { task: "Guest post on TechCrunch", type: "Editorial", priority: "High" },
                      { task: "Respond on Reddit r/networking", type: "Community", priority: "Medium" },
                      { task: "Update G2 profile", type: "Review", priority: "High" },
                      { task: "Sponsor DevOps podcast", type: "Partnership", priority: "Low" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between py-2 border-b border-[#e0e4e9] last:border-0">
                        <div>
                          <p className="text-sm text-[#2e353b]">{item.task}</p>
                          <span className="text-[10px] text-[#949aab]">{item.type}</span>
                        </div>
                        <span className={`text-[10px] px-2 py-0.5 rounded ${item.priority === "High" ? "bg-[#fef2f2] text-[#ef4444]" : item.priority === "Medium" ? "bg-[#fffbeb] text-[#f59e0b]" : "bg-[#f0fdf4] text-[#22c55e]"}`}>{item.priority}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// How It Works Section
function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      title: "Run Docker",
      description: "Single command to start. Data persists in a volume.",
    },
    {
      step: "02",
      title: "Setup Wizard",
      description: "Add your brand, topics, competitors, and AI platform API keys.",
    },
    {
      step: "03",
      title: "Monitor & Optimize",
      description: "Track visibility trends and get actionable insights.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#f9fbfc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2e353b]">
            Get started in minutes
          </h2>
          <p className="mt-4 text-lg text-[#74838f]">
            Self-host your own LLM visibility tracker with full control over your data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-[#e0e4e9] -translate-x-1/2 z-0"></div>
              )}
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-[#509ee3] shadow-lg">
                  <span className="text-2xl font-bold text-[#509ee3]">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#2e353b] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#74838f]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Code snippet */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="bg-[#2e353b] rounded-xl overflow-hidden shadow-lg">
            <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1f24] border-b border-[#3d4650]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
              </div>
              <span className="text-[#949aab] text-sm ml-2">Terminal</span>
            </div>
            <div className="p-6 font-mono text-sm">
              <div className="text-[#88bf4d]"># Run with Docker (recommended)</div>
              <div className="text-[#e0e4e9] mt-2">docker run -d \</div>
              <div className="text-[#e0e4e9]">  --name prompt-clarity \</div>
              <div className="text-[#e0e4e9]">  -p 3000:3000 \</div>
              <div className="text-[#e0e4e9]">  -v prompt-clarity-data:/app/data \</div>
              <div className="text-[#e0e4e9]">  ghcr.io/verobytes/prompt-clarity:latest</div>
              <div className="mt-4 text-[#949aab]"># Open http://localhost:3000 and follow the setup wizard</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Supported Models Section
function ModelsSection() {
  return (
    <section className="py-16 bg-white border-y border-[#e0e4e9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[#74838f] mb-8">Track visibility across all major AI models</p>
        <div className="flex flex-wrap items-center justify-center gap-12">
          {/* ChatGPT */}
          <div className="flex items-center gap-3 text-[#74838f]">
            <div className="w-10 h-10 bg-[#10a37f] rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364l2.0201-1.1638a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
              </svg>
            </div>
            <span className="font-medium">ChatGPT</span>
          </div>

          {/* Claude */}
          <div className="flex items-center gap-3 text-[#74838f]">
            <div className="w-10 h-10 bg-[#D77655] rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6" viewBox="0 0 16 16" fill="#FCF2EE">
                <path d="m3.127 10.604 3.135-1.76.053-.153-.053-.085H6.11l-.525-.032-1.791-.048-1.554-.065-1.505-.08-.38-.081L0 7.832l.036-.234.32-.214.455.04 1.009.069 1.513.105 1.097.064 1.626.17h.259l.036-.105-.089-.065-.068-.064-1.566-1.062-1.695-1.121-.887-.646-.48-.327-.243-.306-.104-.67.435-.48.585.04.15.04.593.456 1.267.981 1.654 1.218.242.202.097-.068.012-.049-.109-.181-.9-1.626-.96-1.655-.428-.686-.113-.411a2 2 0 0 1-.068-.484l.496-.674L4.446 0l.662.089.279.242.411.94.666 1.48 1.033 2.014.302.597.162.553.06.17h.105v-.097l.085-1.134.157-1.392.154-1.792.052-.504.25-.605.497-.327.387.186.319.456-.045.294-.19 1.23-.37 1.93-.243 1.29h.142l.161-.16.654-.868 1.097-1.372.484-.545.565-.601.363-.287h.686l.505.751-.226.775-.707.895-.585.759-.839 1.13-.524.904.048.072.125-.012 1.897-.403 1.024-.186 1.223-.21.553.258.06.263-.218.536-1.307.323-1.533.307-2.284.54-.028.02.032.04 1.029.098.44.024h1.077l2.005.15.525.346.315.424-.053.323-.807.411-3.631-.863-.872-.218h-.12v.073l.726.71 1.331 1.202 1.667 1.55.084.383-.214.302-.226-.032-1.464-1.101-.565-.497-1.28-1.077h-.084v.113l.295.432 1.557 2.34.08.718-.112.234-.404.141-.444-.08-.911-1.28-.94-1.44-.759-1.291-.093.053-.448 4.821-.21.246-.484.186-.403-.307-.214-.496.214-.98.258-1.28.21-1.016.19-1.263.112-.42-.008-.028-.092.012-.953 1.307-1.448 1.957-1.146 1.227-.274.109-.477-.247.045-.44.266-.39 1.586-2.018.956-1.25.617-.723-.004-.105h-.036l-4.212 2.736-.75.096-.324-.302.04-.496.154-.162 1.267-.871z"/>
              </svg>
            </div>
            <span className="font-medium">Claude</span>
          </div>

          {/* Perplexity */}
          <div className="flex items-center gap-3 text-[#74838f]">
            <div className="w-10 h-10 bg-[#1F1F1F] rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6" viewBox="0 0 512 509.64" fill="none">
                <path fill="#fff" fillRule="nonzero" d="M348.851 128.063l-68.946 58.302h68.946v-58.302zm-83.908 48.709l100.931-85.349v94.942h32.244v143.421h-38.731v90.004l-94.442-86.662v83.946h-17.023v-83.906l-96.596 86.246v-89.628h-37.445V186.365h38.732V90.768l95.309 84.958v-83.16h17.023l-.002 84.206zm-29.209 26.616c-34.955.02-69.893 0-104.83 0v109.375h20.415v-27.121l84.415-82.254zm41.445 0l82.208 82.324v27.051h21.708V203.388c-34.617 0-69.274.02-103.916 0zm-42.874-17.023l-64.669-57.646v57.646h64.669zm13.617 124.076v-95.2l-79.573 77.516v88.731l79.573-71.047zm17.252-95.022v94.863l77.19 70.8c0-29.485-.012-58.943-.012-88.425l-77.178-77.268z"/>
              </svg>
            </div>
            <span className="font-medium">Perplexity</span>
          </div>

          {/* Gemini */}
          <div className="flex items-center gap-3 text-[#74838f]">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-[#e0e4e9]">
              <svg className="w-6 h-6" viewBox="0 0 65 65" fill="none">
                <path d="M32.447 0c.68 0 1.273.465 1.439 1.125a38.904 38.904 0 001.999 5.905c2.152 5 5.105 9.376 8.854 13.125 3.751 3.75 8.126 6.703 13.125 8.855a38.98 38.98 0 005.906 1.999c.66.166 1.124.758 1.124 1.438 0 .68-.464 1.273-1.125 1.439a38.902 38.902 0 00-5.905 1.999c-5 2.152-9.375 5.105-13.125 8.854-3.749 3.751-6.702 8.126-8.854 13.125a38.973 38.973 0 00-2 5.906 1.485 1.485 0 01-1.438 1.124c-.68 0-1.272-.464-1.438-1.125a38.913 38.913 0 00-2-5.905c-2.151-5-5.103-9.375-8.854-13.125-3.75-3.749-8.125-6.702-13.125-8.854a38.973 38.973 0 00-5.905-2A1.485 1.485 0 010 32.448c0-.68.465-1.272 1.125-1.438a38.903 38.903 0 005.905-2c5-2.151 9.376-5.104 13.125-8.854 3.75-3.749 6.703-8.125 8.855-13.125a38.972 38.972 0 001.999-5.905A1.485 1.485 0 0132.447 0z" fill="url(#gemini-home)"/>
                <defs>
                  <linearGradient id="gemini-home" x1="0" y1="32" x2="65" y2="32" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#4285F4"/>
                    <stop offset="25%" stopColor="#9B72CB"/>
                    <stop offset="50%" stopColor="#D96570"/>
                    <stop offset="75%" stopColor="#D96570"/>
                    <stop offset="100%" stopColor="#4285F4"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="font-medium">Gemini</span>
          </div>

          {/* Grok */}
          <div className="flex items-center gap-3 text-[#74838f]">
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6" viewBox="0 0 512 509.641" fill="none">
                <path fill="#fff" d="M213.235 306.019l178.976-180.002v.169l51.695-51.763c-.924 1.32-1.86 2.605-2.785 3.89-39.281 54.164-58.46 80.649-43.07 146.922l-.09-.101c10.61 45.11-.744 95.137-37.398 131.836-46.216 46.306-120.167 56.611-181.063 14.928l42.462-19.675c38.863 15.278 81.392 8.57 111.947-22.03 30.566-30.6 37.432-75.159 22.065-112.252-2.92-7.025-11.67-8.795-17.792-4.263l-124.947 92.341zm-25.786 22.437l-.033.034L68.094 435.217c7.565-10.429 16.957-20.294 26.327-30.149 26.428-27.803 52.653-55.359 36.654-94.302-21.422-52.112-8.952-113.177 30.724-152.898 41.243-41.254 101.98-51.661 152.706-30.758 11.23 4.172 21.016 10.114 28.638 15.639l-42.359 19.584c-39.44-16.563-84.629-5.299-112.207 22.313-37.298 37.308-44.84 102.003-1.128 143.81z"/>
              </svg>
            </div>
            <span className="font-medium">Grok</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Pricing Section - Open Source Joke
function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2e353b]">
            Pricing that makes sense
          </h2>
          <p className="mt-4 text-lg text-[#74838f]">
            We believe in radical transparency. Here&apos;s our pricing structure:
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Free Tier */}
            <div className="pricing-card bg-white rounded-xl p-8 border border-[#e0e4e9]">
              <h3 className="text-xl font-semibold text-[#2e353b]">Hobby</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold text-[#2e353b]">$0</span>
                <span className="ml-2 text-[#74838f]">/month</span>
              </div>
              <p className="mt-2 text-[#74838f]">For individuals and small projects</p>
              <ul className="mt-6 space-y-3">
                {[
                  "All features included",
                  "Unlimited brands",
                  "Unlimited prompts",
                  "Self-hosted",
                  "Community support",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#88bf4d]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#74838f]">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="https://github.com/lucidgeo/lucidgeo"
                className="mt-8 block w-full py-3 px-4 rounded-lg font-medium text-center bg-[#509ee3] text-white hover:bg-[#4a90d9] transition-colors"
              >
                Get started
              </Link>
            </div>

            {/* Pro Tier - Joke */}
            <div className="pricing-card pricing-card-highlighted bg-white rounded-xl p-8 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="bg-[#509ee3] text-white text-sm font-medium px-3 py-1 rounded-full">Most Popular</span>
              </div>
              <h3 className="text-xl font-semibold text-[#2e353b]">Pro</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold text-[#2e353b]">$0</span>
                <span className="ml-2 text-[#74838f]">/month</span>
              </div>
              <p className="mt-2 text-[#74838f]">For growing teams</p>
              <ul className="mt-6 space-y-3">
                {[
                  "Everything in Hobby",
                  "Still unlimited everything",
                  "Still self-hosted",
                  "GitHub Issues support",
                  "Our eternal gratitude",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#88bf4d]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#74838f]">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="https://github.com/lucidgeo/lucidgeo"
                className="mt-8 block w-full py-3 px-4 rounded-lg font-medium text-center bg-[#509ee3] text-white hover:bg-[#4a90d9] transition-colors"
              >
                Get started
              </Link>
            </div>

            {/* Enterprise Tier - Joke */}
            <div className="pricing-card bg-white rounded-xl p-8 border border-[#e0e4e9]">
              <h3 className="text-xl font-semibold text-[#2e353b]">Enterprise</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold text-[#2e353b]">$0</span>
                <span className="ml-2 text-[#74838f]">/month</span>
              </div>
              <p className="mt-2 text-[#74838f]">For large organizations</p>
              <ul className="mt-6 space-y-3">
                {[
                  "Everything in Pro",
                  "White-glove onboarding*",
                  "Custom integrations*",
                  "Priority support*",
                  "*Just kidding, it's OSS",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#88bf4d]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className={`text-[#74838f] ${i === 4 ? "italic" : ""}`}>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="https://github.com/lucidgeo/lucidgeo"
                className="mt-8 block w-full py-3 px-4 rounded-lg font-medium text-center border border-[#509ee3] text-[#509ee3] hover:bg-[#e6f0fa] transition-colors"
              >
                Star on GitHub
              </Link>
            </div>
          </div>

          {/* Fun disclaimer */}
          <p className="text-center mt-8 text-[#949aab] text-sm">
            Yes, it&apos;s all free. We&apos;re open source. The real pricing is the friends we made along the way.
          </p>
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-24 bg-[#2e353b]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Ready to track your AI visibility?
        </h2>
        <p className="mt-4 text-lg text-[#949aab]">
          Join the open source community building the future of LLM visibility tracking.
          Star us on GitHub to show your support.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="https://github.com/lucidgeo/lucidgeo"
            className="w-full sm:w-auto bg-[#509ee3] text-white px-8 py-3 rounded-lg font-medium text-lg btn-primary hover:bg-[#4a90d9] flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            Star on GitHub
          </Link>
          <Link
            href="https://github.com/lucidgeo/lucidgeo/discussions"
            className="w-full sm:w-auto bg-transparent text-white px-8 py-3 rounded-lg font-medium text-lg border border-[#4a5568] hover:border-[#509ee3] transition-colors"
          >
            Join the discussion
          </Link>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-[#2e353b] border-t border-[#3d4650]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Logo />
              <span className="text-xl font-semibold text-white">Prompt Clarity</span>
            </div>
            <p className="text-[#949aab] text-sm">
              Open source LLM visibility tracking. Own your data.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link href="#features" className="text-[#949aab] hover:text-white transition-colors text-sm">Features</Link></li>
              <li><Link href="#how-it-works" className="text-[#949aab] hover:text-white transition-colors text-sm">How it Works</Link></li>
              <li><Link href="https://github.com/lucidgeo/lucidgeo" className="text-[#949aab] hover:text-white transition-colors text-sm">Documentation</Link></li>
              <li><Link href="https://github.com/lucidgeo/lucidgeo/releases" className="text-[#949aab] hover:text-white transition-colors text-sm">Changelog</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-white font-semibold mb-4">Community</h4>
            <ul className="space-y-2">
              <li><Link href="https://github.com/lucidgeo/lucidgeo" className="text-[#949aab] hover:text-white transition-colors text-sm">GitHub</Link></li>
              <li><Link href="https://github.com/lucidgeo/lucidgeo/discussions" className="text-[#949aab] hover:text-white transition-colors text-sm">Discussions</Link></li>
              <li><Link href="https://github.com/lucidgeo/lucidgeo/issues" className="text-[#949aab] hover:text-white transition-colors text-sm">Report a Bug</Link></li>
              <li><Link href="https://github.com/lucidgeo/lucidgeo/blob/main/CONTRIBUTING.md" className="text-[#949aab] hover:text-white transition-colors text-sm">Contributing</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="https://github.com/lucidgeo/lucidgeo/blob/main/README.md" className="text-[#949aab] hover:text-white transition-colors text-sm">Getting Started</Link></li>
              <li><Link href="https://github.com/lucidgeo/lucidgeo/blob/main/SETUP.md" className="text-[#949aab] hover:text-white transition-colors text-sm">Installation</Link></li>
              <li><Link href="https://github.com/lucidgeo/lucidgeo/blob/main/LICENSE" className="text-[#949aab] hover:text-white transition-colors text-sm">License</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#3d4650] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#949aab] text-sm">
            &copy; {new Date().getFullYear()} Prompt Clarity. Open source under MIT license.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/lucidgeo/lucidgeo" className="text-[#949aab] hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://twitter.com/promptclarity" className="text-[#949aab] hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Page
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ModelsSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  );
}
