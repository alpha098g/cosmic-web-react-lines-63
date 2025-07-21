import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const TextHoverEffect = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <h1 className={cn("text-6xl md:text-8xl font-bold text-center", className)}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className="inline-block text-transparent bg-clip-text bg-gradient-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ 
            scale: 1.2,
            transition: { duration: 0.2 }
          }}
        >
          {char}
        </motion.span>
      ))}
    </h1>
  );
};