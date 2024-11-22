import { motion } from "framer-motion";

// Variants for the stair animation
const StairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0"],
    },
};

// Function to calculate reverse index for delays
const reverseIndex = (index) => 5 - index; // Adjust based on the number of steps

const Stairs = () => {
    return (
      <>
        {/* Render motion divs, each representing a step of the stairs.
            Each div will have the same animation from the StairAnimation object.
            The delay for each div is calculated dynamically based on 
            a reverse index, creating a staggered effect with decreasing delay
            for each subsequent step.
        */}
        {[...Array(6)].map((_, index) => {
            return (
                <motion.div
                    key={index}
                    variants={StairAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                        delay: reverseIndex(index) * 0.1,
                    }}
                    className="h-full w-full bg-white relative"
                />
            );
        })}
      </>
    );
};

export default Stairs;