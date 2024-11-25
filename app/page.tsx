import { ArrowRight } from 'lucide-react';
import cogImage from '@/public/cog.png';
import cylinderImage from '@/public/cylinder.png';
import Image from 'next/image';

const LandingPage = () => {
    return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
        <div className="container px-4 py-6">
            <div className="md:flex items-center">
                <div className="md:w-[478px]">
                    <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg">Version 1.0</div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">Send Invoices in Seconds</h1>
                    <p className="text-xl text-[#010D3E] tracking-tight mt-6">
                        Take the hassle out of billing with our powerful,
                        easy-to-use invoicing app. Create professional invoices in seconds,
                        track payments effortlessly, and get paid faster than ever
                    </p>
                    <div className="flex gap-1 items-center mt-[30px]">
                        <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">
                            Get Started
                        </button>
                        <button className="bg-transparent px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight gap-1">
                            View source code <ArrowRight size={24} />
                        </button>
                    </div>
                </div>
                <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
                    <Image src={cogImage} alt="Cog image" className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6"/>
                    <Image src={cylinderImage} width={220} height={220} alt="cylinder image" className="hidden md:block -top-8 -left-32 md:absolute" />
                </div>
            </div>
        </div>
    </section>
    )
}

export default LandingPage