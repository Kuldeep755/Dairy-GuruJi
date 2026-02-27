"use client";

import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

function NavigationMenu({ className, children, ...props }) {
  return (
    <NavigationMenuPrimitive.Root
      className={cn("relative z-10 flex max-w-max flex-1 items-center", className)}
      {...props}
    >
      {children}
      <NavigationMenuPrimitive.Viewport />
    </NavigationMenuPrimitive.Root>
  );
}

function NavigationMenuList({ className, ...props }) {
  return (
    <NavigationMenuPrimitive.List
      className={cn("group flex flex-1 list-none items-center gap-1", className)}
      {...props}
    />
  );
}

function NavigationMenuItem({ ...props }) {
  return <NavigationMenuPrimitive.Item {...props} />;
}

const navigationMenuTriggerStyle =
  "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-semibold uppercase tracking-wider text-white/85 transition-colors hover:text-secondary";

function NavigationMenuTrigger({ className, children, ...props }) {
  return (
    <NavigationMenuPrimitive.Trigger
      className={cn(navigationMenuTriggerStyle, className)}
      {...props}
    >
      {children}{" "}
      <ChevronDown
        className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  );
}

function NavigationMenuLink({ className, ...props }) {
  return (
    <NavigationMenuPrimitive.Link
      className={cn(navigationMenuTriggerStyle, className)}
      {...props}
    />
  );
}

const NavigationMenuContent = NavigationMenuPrimitive.Content;

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
};
