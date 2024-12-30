import { HERO_CONTENT } from "../constants";
import profilePic from '../assets/ProfilePic.jpeg';
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                {/* Left Section (Text and Title) */}
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        {/* Animated Title */}
                        <motion.h1
                            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl"
                            initial={{ opacity: 0, y: 50 }}  // Start from 50px below and invisible
                            whileInView={{ opacity: 1, y: 0 }}   // Trigger animation when in view
                            transition={{ duration: 1 }}      // Animation duration
                        >
                            Polimetla Manideep
                        </motion.h1>

                        {/* Animated Subtitle */}
                        <motion.span
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
                            initial={{ opacity: 0, scale: 0.8 }}  // Start from scale 0.8 and invisible
                            whileInView={{ opacity: 1, scale: 1 }}    // Trigger animation when in view
                            transition={{ duration: 1.2 }}         // Slightly longer duration for emphasis
                        >
                            Full Stack Developer
                        </motion.span>

                        {/* Animated Description */}
                        <motion.p
                            className="my-2 max-w-xl py-6 font-light tracking-tighter"
                            initial={{ opacity: 0 }}              // Start invisible
                            whileInView={{ opacity: 1 }}              // Fade in to visible when in view
                            transition={{ duration: 1.5 }}        // Slow fade-in effect
                        >
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>

                {/* Right Section (Profile Picture) */}
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        {/* Animated Profile Picture */}
                        <motion.img
                            src={profilePic}
                            alt="PROFILE"
                            initial={{ opacity: 0, scale: 0.8 }}  // Start from smaller and invisible
                            whileInView={{ opacity: 1, scale: 1 }}    // Trigger animation when in view
                            transition={{ duration: 1.5 }}         // Slightly slower for a smooth effect
                            className="rounded-2xl" style={{height: '600px', width:'500px'}}              // Optional: Make the profile picture rounded
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
