import Header from "@/components/ui/header/Header";
import Sidebar from "@/components/ui/sidebar/Sidebar";

export default function Container({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className="max-w-[160rem]">{children}</div>;
}
