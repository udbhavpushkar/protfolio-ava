'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const BackButton = ({ text }) => {
    const router = useRouter();

    useEffect(() => {
        // Store the current path in sessionStorage when navigating to /work#design
        if (window.location.pathname + window.location.hash === '/work#design') {
            sessionStorage.setItem('previousPath', '/work#design');
        }
    }, []);

    const handleNavigation = () => {
        const previousPath = sessionStorage.getItem('previousPath');

        // Check if the stored path is /work#design
        if (previousPath === '/work#design') {
            router.push('/work#design');
            return;
        }

        // If there's history, go back
        if (window.history.length > 1) {
            router.back(); // OR route.push('major')
            return;
        }

        // Default: go to home page
        router.push('/');
    };

    return (
        <button 
            onClick={handleNavigation}
            className="rounded-3xl bg-[#FF8099] font-bold text-xl text-white cursor-pointer px-6 py-3 flex items-center w-fit gap-3"
            aria-label="Go back"
        >
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-6 h-6"
                aria-hidden="true"
            >
                <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" 
                />
            </svg>
            {text}
        </button>
    );
};

export default BackButton;