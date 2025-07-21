import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const PinContainer = ({
  children,
  title,
  href,
  className,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
}) => {
  return (
    <div className={cn("relative group", className)}>
      <motion.div
        whileHover={{ 
          rotateX: 15,
          rotateY: 15,
          scale: 1.05
        }}
        transition={{ duration: 0.3 }}
        className="relative"
        style={{ perspective: 1000 }}
      >
        <div className="absolute inset-0 bg-gradient-primary/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300"></div>
        <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-lg p-1 hover:border-primary/50 transition-all duration-300">
          {children}
        </div>
      </motion.div>
      {title && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
          className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium"
        >
          {title}
        </motion.div>
      )}
    </div>
  );
};