import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { SIDEBAR_ITEMS } from '@/lib/constants';
import { LucideIcon } from 'lucide-react';

interface SidebarItem {
  href: string;
  icon: LucideIcon;
  title: string;
}

export function Sidebar() {
  const [expanded, setExpanded] = useState(true);

  return (
    <motion.div
      initial={{ width: expanded ? 240 : 64 }}
      animate={{ width: expanded ? 240 : 64 }}
      className={cn(
        'h-screen flex flex-col glassmorphism',
        'fixed left-0 top-0 z-40',
        'transition-all duration-300 ease-in-out'
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="font-bold text-white">M</span>
              </div>
              <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                MediVault
              </span>
            </motion.div>
          )}
        </AnimatePresence>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setExpanded(!expanded)}
          className="ml-auto hover:bg-white/10"
        >
          {expanded ? <ChevronLeft /> : <ChevronRight />}
        </Button>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {SIDEBAR_ITEMS.map((item: SidebarItem) => (
          <Link
            key={item.href}
            to={item.href}
            className={cn(
              'flex items-center gap-3 px-3 py-2 rounded-lg',
              'hover:bg-white/10 transition-colors',
              'text-muted-foreground hover:text-foreground group'
            )}
          >
            <div className="relative">
              {item.icon && <item.icon size={20} />}
              <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <AnimatePresence initial={false}>
              {expanded && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {item.title}
                </motion.span>
              )}
            </AnimatePresence>
          </Link>
        ))}
      </nav>
    </motion.div>
  );
}