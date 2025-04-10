import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { SIDEBAR_ITEMS } from '@/lib/constants';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const location = useLocation();

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] p-0">
          <SidebarContent />
        </SheetContent>
      </Sheet>
      <div className={cn("hidden md:block", className)}>
        <SidebarContent />
      </div>
    </>
  );
}

function SidebarContent() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex h-full flex-col gap-2">
      <div className="flex h-[60px] items-center border-b px-6">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <span>MediVault</span>
        </Link>
      </div>
      <ScrollArea className="flex-1">
        <div className="flex flex-col gap-1 p-2">
          <Link
            to="/app/dashboard"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
              isActive("/app/dashboard")
                ? "bg-primary text-primary-foreground"
                : "hover:bg-accent"
            )}
          >
            Dashboard
          </Link>
          <Link
            to="/app/records"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
              isActive("/app/records")
                ? "bg-primary text-primary-foreground"
                : "hover:bg-accent"
            )}
          >
            Medical Records
          </Link>
          <Link
            to="/app/appointments"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
              isActive("/app/appointments")
                ? "bg-primary text-primary-foreground"
                : "hover:bg-accent"
            )}
          >
            Appointments
          </Link>
          <Link
            to="/app/settings"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
              isActive("/app/settings")
                ? "bg-primary text-primary-foreground"
                : "hover:bg-accent"
            )}
          >
            Settings
          </Link>
        </div>
      </ScrollArea>
    </div>
  );
}