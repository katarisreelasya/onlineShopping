import React from 'react'

const Header = () => {
  return (
    <div className=' flex justify-between p-6 bg-gray-900 text-white'>
        
    <div class="container mx-auto px-5 py-3 flex justify-between items-center">
       
        <div class="flex-2">
            <h2 class="text-base font-bold text-lg">Style Spot</h2>
        </div>

        
        <div class="center flex-4">
            <ul class="flex items-center space-x-6">
                <li><a href="#" class="hover:text-gray-300">Women</a></li>
                <li><a href="#" class="hover:text-gray-300">Men</a></li>
                <li><a href="#" class="hover:text-gray-300">Children</a></li>
                <li><a href="#" class="hover:text-gray-300">Beauty</a></li>
            </ul>
        </div>

        
        <div class="flex-2">
            <input type="text" class="px-3 py-1 rounded-lg border w-80 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300" placeholder="Search..." />
        </div>

        
        <div class="flex space-x-6">
            <button class="text-gray-300 hover:text-white">Sign In / Sign Up</button>
            <button class="text-gray-300 hover:text-white">Cart</button>
        </div>
    </div>
</div>

    
  )
}

export default Header
