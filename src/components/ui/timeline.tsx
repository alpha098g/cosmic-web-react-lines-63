import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-primary h-full"></div>
      {data.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="relative flex items-center justify-center mb-8"
        >
          <div className="flex w-full">
            <div className={cn("w-1/2 pr-8", index % 2 === 0 ? "text-right" : "order-2 pl-8 text-left")}>
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:bg-card/70 transition-all duration-300">
                <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
                {item.content}
              </div>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};