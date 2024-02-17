"use client";

import { Fragment } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import clsx from "clsx";
import {
  AlertCircleIcon,
  ArchiveIcon,
  ArrowLeftIcon,
  BarChartBigIcon,
  BookIcon,
  CogIcon,
  CrownIcon,
  FileIcon,
  InboxIcon,
  LightbulbIcon,
  LucideIcon,
  MailsIcon,
  MessagesSquareIcon,
  PenIcon,
  RatioIcon,
  RibbonIcon,
  SendIcon,
  ShieldCheckIcon,
  SparklesIcon,
  StarIcon,
  Users2Icon,
  XIcon,
} from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";

type NavItem = {
  name: string;
  href: string;
  icon: LucideIcon | ((props: any) => React.ReactNode);
  target?: "_blank";
  count?: number;
};

export const navigation: NavItem[] = [
  {
    name: "Newsletters",
    href: "/newsletters",
    icon: MailsIcon,
  },
  {
    name: "AI Automation",
    href: "/automation",
    icon: SparklesIcon,
  },
  {
    name: "Cold Email Blocker",
    href: "/cold-email-blocker",
    icon: ShieldCheckIcon,
  },
  {
    name: "Analytics",
    href: "/stats",
    icon: BarChartBigIcon,
  },
  {
    name: "New Senders",
    href: "/new-senders",
    icon: Users2Icon,
  },
  {
    name: "Mail (Beta)",
    href: "/mail",
    icon: InboxIcon,
  },
  // {
  //   name: "Send Email",
  //   href: "/compose",
  //   icon: SendIcon,
  // },
  {
    name: "Early Access",
    href: "/request-access?type=early-access",
    icon: RibbonIcon,
  },
  // {
  //   name: "No reply",
  //   href: "/no-reply",
  //   icon: ChatBubbleBottomCenterTextIcon,
  // },
  // {
  //   name: "Filters",
  //   href: "/filters",
  //   icon: ChartBarIcon,
  // },
  // {
  //   name: "Bulk Archive",
  //   href: "/bulk-archive",
  //   icon: ArchiveBoxArrowDownIcon,
  // },
];

const bottomLinks: NavItem[] = [
  {
    name: "User Guide",
    href: "https://james-81.mintlify.app",
    target: "_blank",
    icon: BookIcon,
  },
  {
    name: "Feature Requests",
    href: "/feature-requests",
    target: "_blank",
    icon: LightbulbIcon,
  },
  { name: "Premium", href: "/premium", icon: CrownIcon },
  { name: "Settings", href: "/settings", icon: CogIcon },
];

const topMailLinks: NavItem[] = [
  {
    name: "Inbox",
    icon: InboxIcon,
    href: "?type=inbox",
  },
  {
    name: "Drafts",
    icon: FileIcon,
    href: "?type=draft",
  },
  {
    name: "Sent",
    icon: SendIcon,
    href: "?type=sent",
  },
  {
    name: "Archived",
    icon: ArchiveIcon,
    href: "?type=archive",
  },
];

const bottomMailLinks: NavItem[] = [
  {
    name: "Personal",
    icon: Users2Icon,
    href: "?type=CATEGORY_PERSONAL",
    // count: 972,
  },
  {
    name: "Social",
    icon: Users2Icon,
    href: "?type=CATEGORY_SOCIAL",
    // count: 972,
  },
  {
    name: "Updates",
    icon: AlertCircleIcon,
    href: "?type=CATEGORY_UPDATES",
    // count: 342,
  },
  {
    name: "Forums",
    icon: MessagesSquareIcon,
    href: "?type=CATEGORY_FORUMS",
  },
  {
    name: "Promotions",
    icon: RatioIcon,
    href: "?type=CATEGORY_PROMOTIONS",
  },
];

export function SideNav(props: {
  children: React.ReactNode;
  topBar?: React.ReactNode;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}) {
  return (
    <div className="h-full">
      <Transition.Root show={props.sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={props.setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => props.setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>

                <Sidebar isMobile />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-60 lg:flex-col 2xl:w-72">
        <Sidebar isMobile={false} />
      </div>

      <main className="flex h-full flex-col lg:pl-60 2xl:pl-72">
        {props.topBar}

        {props.children}
      </main>
    </div>
  );
}

function Sidebar(props: { isMobile: boolean }) {
  const path = usePathname();

  const showMailNav = path === "/mail" || path === "/compose";

  return (
    <div
      className={clsx(
        "flex grow flex-col gap-y-5 overflow-y-auto bg-black px-6 pb-4",
        {
          "ring-1 ring-white/10": props.isMobile,
        },
      )}
    >
      <Link href="/stats">
        <div className="flex h-16 shrink-0 items-center text-white">
          <Logo className="h-4" />
        </div>
      </Link>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col">
          <Transition
            show={showMailNav}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            // leave="transition-opacity duration-300"
            // leaveFrom="opacity-100"
            // leaveTo="opacity-0"
          >
            <NavLink
              path={path}
              link={{
                name: "Back",
                href: "/automation",
                icon: ArrowLeftIcon,
              }}
            />

            <div className="py-2">
              <Button asChild className="w-full" variant="outline">
                <Link href="/compose">
                  <PenIcon className="mr-2 h-4 w-4" />
                  Compose
                </Link>
              </Button>
            </div>

            <Links path={path} links={topMailLinks} />
            <div className="mt-7">
              <NavSectionHeader title="Labels" />
              <div className="mt-2">
                <Links path={path} links={bottomMailLinks} />
              </div>
            </div>
          </Transition>
          <Transition
            show={!showMailNav}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            // leave="transition-opacity duration-300"
            // leaveFrom="opacity-100"
            // leaveTo="opacity-0"
          >
            <Links path={path} links={navigation} />
          </Transition>

          <div className="mt-auto pt-7">
            <Links path={path} links={bottomLinks} />
          </div>
        </ul>
      </nav>
    </div>
  );
}

function Links(props: { path: string; links: NavItem[] }) {
  return (
    <li>
      <ul role="list" className="-mx-2 space-y-1">
        {props.links.map((item) => (
          <NavLink key={item.name} path={props.path} link={item} />
        ))}
      </ul>
    </li>
  );
}

function NavLink(props: { path: string; link: NavItem }) {
  const { link } = props;

  return (
    <li key={link.name}>
      <Link
        href={link.href}
        className={clsx(
          "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
          link.href === props.path
            ? "bg-gray-800 text-white"
            : "text-gray-400 hover:bg-gray-800 hover:text-white",
        )}
        target={link.target}
        prefetch={link.target !== "_blank"}
      >
        <link.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
        {link.name}
        {link.count ? (
          <span
            className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-gray-900 px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-white ring-1 ring-inset ring-gray-700"
            aria-hidden="true"
          >
            {link.count}
          </span>
        ) : null}
      </Link>
    </li>
  );
}

function NavSectionHeader(props: { title: string }) {
  return (
    <div className="text-xs font-semibold leading-6 text-gray-400">
      {props.title}
    </div>
  );
}
