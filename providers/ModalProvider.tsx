'use client';

import { MdClose } from "react-icons/md";
import { useAppContext } from "./ContextProvider";
import NotoSans from "@/components/misc/NotoSans";

const ModalProvider = () => {
  const { modalTitle, modalContent, showSmallModal, setShowSmallModal, showBigModal, setShowBigModal } = useAppContext();

  const closeModal = () => {
    setShowBigModal(_ => false);
    setShowSmallModal(_ => false);
  }

  return (
    <section
      className={`bg-black/80 transition-all duration-150 flex p-8 justify-center items-center fixed top-0 left-0 w-screen h-screen ${(showBigModal || showSmallModal) ? 'z-30' : '-z-30'}`}
    >
      {/* Small Modal */}
      {
        showSmallModal && (

          <div className="p-4 bg-[#1a1a1a] rounded max-w-[400px] flex-1">
            <section className="flex justify-between items-center pb-4">
              <NotoSans>
                <p
                  className={`font-semibold uppercase text-primary tracking-wider`}
                >
                  {modalTitle}
                </p>
              </NotoSans>
              <div
                className="bg-red-500 rounded-xs p-1 cursor-pointer transition-colors duration-150 hover:bg-red-400 group"
                onClick={closeModal}
              >
                <MdClose
                  className="text-white transition-colors duration-150"
                />
              </div>
            </section>
            <section className="text-white overflow-y-auto max-h-[calc(100vh_-_150px)]">
              {modalContent}
            </section>
          </div>
        )
      }
      {/* Big Modal */}
      {
        showBigModal && (

          <div className="p-4 bg-[#1a1a1a] rounded-xs w-full flex-1">
            <section className="flex justify-between items-center pb-4">
              <NotoSans>
                <p
                  className={`font-semibold uppercase text-primary tracking-wider`}
                >
                  {modalTitle}
                </p>
              </NotoSans>
              <div
                className="bg-red-500 rounded-xs p-1 cursor-pointer transition-colors duration-150 hover:bg-red-400 group"
                onClick={closeModal}
              >
                <MdClose
                  className="text-white transition-colors duration-150"
                />
              </div>
            </section>
            <section className="text-white overflow-y-auto max-h-[calc(100vh_-_150px)]">
              {modalContent}
            </section>
          </div>
        )
      }
    </section>
  )
}

export default ModalProvider;