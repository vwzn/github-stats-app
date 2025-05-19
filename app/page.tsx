"use client";

import { useState, FormEvent, KeyboardEvent } from "react";
import { Search, Github, User, GitBranch, Star, Users } from "lucide-react";
import Image from "next/image";

export default function Home() {
    const [username, setUsername] = useState("");
    const [displayUsername, setDisplayUsername] = useState("");
    const [isValid, setIsValid] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (username.trim()) {
            setDisplayUsername(username.trim());
            setIsValid(true);
        }
    };

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSubmit(e);
        }
    };

    const statsCards = [
        {
            title: "GitHub Stats",
            src: `https://github-readme-stats.vercel.app/api?username=${displayUsername}&show_icons=true&theme=github_dark&hide_border=true&include_all_commits=true&count_private=true`,
        },
        {
            title: "Top Languages",
            src: `https://github-readme-stats.vercel.app/api/top-langs/?username=${displayUsername}&layout=compact&theme=github_dark&hide_border=true`,
        },
        {
            title: "Repos per Language",
            src: `https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=${displayUsername}&theme=github_dark`,
        },
        {
            title: "Most Commit Language",
            src: `https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${displayUsername}&theme=github_dark`,
        },
        {
            title: "Profile Stats",
            src: `https://github-profile-summary-cards.vercel.app/api/cards/stats?username=${displayUsername}&theme=github_dark`,
        },
        {
            title: "Productive Time",
            src: `https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=${displayUsername}&theme=github_dark&utcOffset=7`,
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
                <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
                <div className="absolute -bottom-32 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 py-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Github className="w-12 h-12 text-white" />
                        <h1 className="text-4xl md:text-5xl font-bold text-white">
                            GitHub Stats Viewer
                        </h1>
                    </div>
                    <p className="text-gray-300 text-lg">
                        Lihat statistik GitHub yang menakjubkan dengan satu klik
                    </p>
                </div>

                {/* Search Form */}
                <div className="max-w-md mx-auto mb-12">
                    <div className="relative">
                        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                    onKeyPress={handleKeyPress}
                                    placeholder="Masukkan username GitHub..."
                                    className="w-full bg-white/10 border border-white/30 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
                                />
                            </div>
                            <button
                                onClick={handleSubmit}
                                className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                                <div className="flex items-center justify-center gap-2">
                                    <User className="w-5 h-5" />
                                    Tampilkan Stats
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Stats Display */}
                {isValid && displayUsername && (
                    <div className="space-y-8">
                        {/* Profile Header */}
                        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-6 shadow-2xl">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                    <Github className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white">
                                        @{displayUsername}
                                    </h2>
                                    <a
                                        href={`https://github.com/${displayUsername}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 hover:text-blue-300 transition-colors">
                                        github.com/{displayUsername}
                                    </a>
                                </div>
                            </div>

                            {/* Activity Graph */}
                            <div className="rounded-2xl overflow-hidden bg-black/20 p-4">
                                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                    <GitBranch className="w-5 h-5" />
                                    Activity Graph
                                </h3>
                                <div className="relative w-full h-auto aspect-[4/1]">
                                    <Image
                                        src={`https://github-readme-activity-graph.vercel.app/graph?username=${displayUsername}&theme=github-compact&hide_border=true&area=true&custom_title=GitHub%20Activity%20Graph`}
                                        alt="Activity Graph"
                                        fill
                                        className="rounded-xl"
                                        loading="lazy"
                                        unoptimized // Needed for external images
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Profile Summary */}
                        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-6 shadow-2xl">
                            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                <Users className="w-5 h-5" />
                                Profile Summary
                            </h3>
                            <div className="relative w-full h-auto aspect-[4/1]">
                                <Image
                                    src={`https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${displayUsername}&theme=github_dark`}
                                    alt="Profile Summary"
                                    fill
                                    className="rounded-xl"
                                    loading="lazy"
                                    unoptimized
                                />
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {statsCards.map((card, index) => (
                                <div
                                    key={index}
                                    className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-6 shadow-2xl hover:bg-white/15 transition-all duration-300 hover:scale-105">
                                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                        <Star className="w-5 h-5" />
                                        {card.title}
                                    </h3>
                                    <div className="rounded-xl overflow-hidden  p-2">
                                        <div className="relative w-full h-auto aspect-[2/1]">
                                            <Image
                                                src={card.src}
                                                alt={card.title}
                                                fill
                                                className="rounded-lg"
                                                loading="lazy"
                                                unoptimized
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Trophies */}
                        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-6 shadow-2xl">
                            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                <Star className="w-5 h-5 text-yellow-500" />
                                GitHub Trophies
                            </h3>
                            <div className="rounded-2xl overflow-hidden p-2">
                                <div className="relative w-full h-auto aspect-[2/1]">
                                    <Image
                                        src={`https://github-profile-trophy.vercel.app/?username=${displayUsername}&theme=darkhub&no-frame=true&column=4&margin-w=15&margin-h=15`}
                                        alt="GitHub Trophies"
                                        fill
                                        loading="lazy"
                                        unoptimized
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Footer */}
                <footer className="mt-16 text-center">
                    <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-4 inline-block">
                        <p className="text-gray-400">
                            © 2025 Ahmad Fauzan Abdurrohman
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
}
