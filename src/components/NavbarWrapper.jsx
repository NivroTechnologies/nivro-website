'use client';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

export default function NavbarWrapper() {
    const pathname = usePathname();

    // Don't show navbar on legal pages
    const hideNavbar = ['/privacy-policy', '/terms-of-service', '/cookies'].includes(pathname);

    if (hideNavbar) {
        return null;
    }

    return <Navbar />;
}

