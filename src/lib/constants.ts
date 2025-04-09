import { SidebarItem } from '@/types';
import {
  LayoutDashboard,
  FileText,
  Brain,
  Shield,
  Settings,
  AlertCircle,
  Database,
  Activity,
  Users,
} from 'lucide-react';

export const SIDEBAR_ITEMS: SidebarItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Health Records',
    href: '/records',
    icon: FileText,
  },
  {
    title: 'AI Insights',
    href: '/insights',
    icon: Brain,
  },
  {
    title: 'Emergency Profile',
    href: '/emergency',
    icon: AlertCircle,
  },
  {
    title: 'Storage',
    href: '/storage',
    icon: Database,
  },
  {
    title: 'Activity',
    href: '/activity',
    icon: Activity,
  },
  {
    title: 'Security',
    href: '/security',
    icon: Shield,
  },
  {
    title: 'Network',
    href: '/network',
    icon: Users,
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: Settings,
  },
];