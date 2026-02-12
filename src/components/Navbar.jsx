import React from 'react'
import { AnimatedThemeToggler } from './ui/animated-theme-toggler';

const Navbar = () => {
  return (
     <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl rounded-full backdrop-blur-2xl  bg-white/30 dark:bg-white/30 border border-border/20 dark:border-border/10 z-20 shadow">
      <div className="flex items-center justify-between px-6 py-3" >
        {/* Logo */}
        <div className="text-lg font-semibold tracking-tight  text-black dark:text-foreground">Tea House</div>

        {/* Simple normal theme toggle button */}
        <button className='text-black dark:text-foreground'><AnimatedThemeToggler  className='cursor-pointer' /></button>
      </div>
    </nav>
  )
}

export default Navbar
