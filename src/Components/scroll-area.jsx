import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import './scroll-area.css'; // Optional: for custom styling

export function ScrollArea({ children, className = '' }) {
  return (
    <ScrollAreaPrimitive.Root className={`overflow-hidden ${className}`}>
      <ScrollAreaPrimitive.Viewport className="h-full w-full rounded">
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollAreaPrimitive.Scrollbar
        orientation="vertical"
        className="flex select-none touch-none p-0.5 bg-transparent transition-colors"
      >
        <ScrollAreaPrimitive.Thumb className="flex-1 rounded-full bg-gray-300 dark:bg-gray-600" />
      </ScrollAreaPrimitive.Scrollbar>
    </ScrollAreaPrimitive.Root>
  );
}
