import Container from "@/components/ui/container/Container";
import Header from "@/components/ui/header/Header";
import Sidebar from "@/components/ui/sidebar/Sidebar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex w-full">
            <Sidebar />
            <div className="flex w-full justify-center">
                <div className="w-full lg:container">
                    <div className="flex flex-col">
                        <Header />
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}
