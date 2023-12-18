import { CarType } from "../../types";
import { AnimatePresence, motion } from "framer-motion";
import { generateImage } from "../../utils";

type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  car: CarType;
};

const DetailModal = ({ isOpen, car, closeModal }: ModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="fixed inset-0 z-20 bg-black bg-opacity-20 w-screen h-screen flex justify-center items-center p-4"
        >
          <div className=" relative bg-white p-6 w-full max-w-lg max-h-[90vh] rounded-2xl flex flex-col gap-5 shadow-xl owerflow-auto">
            <button
              className="cursor-pointer p-1 absolute end-1 z-10 top-1 bg-white rounded-full"
              onClick={closeModal}
            >
              <img src="/close.svg" alt="close" />
            </button>

            {/* fotoğraflar */}
            <div className="flex flex-1 flex-col gap-3">
              <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                <img
                  className="h-full mx-auto object-contain"
                  src={generateImage(car)}
                />
              </div>
              <div className="flex gap-3">
                <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                  <img
                    className="h-full mx-auto object-contain"
                    src={generateImage(car, "33 ")}
                  />
                </div>
                <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                  <img
                    className="h-full mx-auto object-contain"
                    src={generateImage(car, "13")}
                  />
                </div>
                <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                  <img
                    className="h-full mx-auto object-contain"
                    src={generateImage(car, "29")}
                  />
                </div>
              </div>
            </div>
            {/* arabanın bilgileri*/}

            {Object.entries(car)
              .filter(([key]) => key != "year")
              .map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <h4 className="capitalize text-gray">
                    {key.replace("_", " ")}
                  </h4>
                  <p className="text-black-100 font-semibold">{value}</p>
                </div>
              ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DetailModal;
