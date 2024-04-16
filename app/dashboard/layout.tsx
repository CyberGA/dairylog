import DashboardHeader from "@/components/dashboard-header"
import EntriesProvider from "@/contexts/entries-context";

export default function DashboardLayout({children, } : {
    children: React.ReactNode;
}) {
    return (
      <EntriesProvider>
        <DashboardHeader />
        {children}
      </EntriesProvider>
    );
}
