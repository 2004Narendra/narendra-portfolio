import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="bg-dark min-h-screen text-text font-sans antialiased selection:bg-accent-cyan/30 selection:text-white flex flex-col">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
