
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-red-900 to-black text-white font-sans">
      <section className="text-center py-16 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4 text-red-500"
        >
          [UNIQUE] - Always UNIQUE, UNIQUE on TOP
        </motion.h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
          Official Clan of Poxel.io | Founded by NeoKing | A future e-sports clan
        </p>
        <a href="https://discord.gg/dwZTftPzGZ" target="_blank">
          <Button className="mt-6 bg-red-700 hover:bg-red-800 text-white text-lg px-6 py-3 rounded-2xl shadow-md">
            Join Our Discord
          </Button>
        </a>
      </section>

      <section className="grid md:grid-cols-2 gap-6 p-6">
        <Card className="bg-red-950 border-red-800 shadow-xl">
          <CardContent className="p-6 text-white">
            <h2 className="text-2xl font-bold text-white mb-2">Competitive Division</h2>
            <p className="text-white">
              For serious, high-level players. Tournaments, scrims, and synergy-focused.
              Discipline, dedication, and top-tier performance required. Stats don’t matter
              if you pass the entry test.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-red-950 border-red-800 shadow-xl">
          <CardContent className="p-6 text-white">
            <h2 className="text-2xl font-bold text-white mb-2">Semi Competitive Division</h2>
            <ul className="list-disc ml-5 text-white">
              <li>5.0+ KDR</li>
              <li>Level 65+</li>
              <li>7+ Days Playtime</li>
              <li>Active Player</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="text-center py-12 px-4">
        <h2 className="text-3xl font-bold text-white mb-6">PILLERS of UNIQUE</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-black border-red-800 shadow-md text-white">
            <CardContent className="p-4">
              <h3 className="text-xl text-red-300 font-bold mb-2">NeoKing</h3>
              <p className="text-white">Clan Leader • Strategist • Visionary</p>
            </CardContent>
          </Card>
          <Card className="bg-black border-red-800 shadow-md text-white">
            <CardContent className="p-4">
              <h3 className="text-xl text-red-300 font-bold mb-2">SparKe</h3>
              <p className="text-white">Sniper Elite • Long-range Expert • Clan Pillar</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="text-center py-12 px-4">
        <h2 className="text-3xl font-bold text-red-400 mb-6">Clan Games Roadmap</h2>
        <p className="max-w-xl mx-auto text-gray-300 mb-4">
          Clan games coming soon! Suggested by UNIQUE and developed by Poxel.io team.
        </p>
        <ul className="list-disc text-left max-w-xl mx-auto text-gray-200">
          <li>Scrims vs Top Clans</li>
          <li>Tournaments (Weekly / Monthly)</li>
          <li>Clan Wars with leaderboard</li>
          <li>Rewards and Ranking System</li>
        </ul>
      </section>

      <footer className="text-center text-gray-400 text-sm py-8 border-t border-red-800">
        <p>© 2025 UNIQUE Clan. Built by UNIQUE & powered by legends 💀</p>
        <p>Discord: <a href="https://discord.gg/dwZTftPzGZ" className="text-red-400 underline">Join Us</a></p>
      </footer>
    </div>
  );
}
