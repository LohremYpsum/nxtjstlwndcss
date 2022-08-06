import {useState, Fragment} from 'react';
import { IconContext } from 'react-icons';
import { FaCalendarAlt, FaQuestion } from 'react-icons/fa';
import { Dialog, Transition  } from '@headlessui/react'

const HeadlessUiModal = () => {
    
    const jsonData =[{
        "name": "02/2018 - 09/2018: Verband Pflegehilfe",
        "activity": " Webentwickler (Front-End in C#)"
      },{
        "name": "09/2018 – 06/2021: HitchOn GmbH in Mainz",
        "activity": " Webentwickler (Full-Stack in PHP)"
      },{
        "name": "06/2021 – jetzt: Brands Consulting",
        "activity": "Webentwickler (Front-End in PHP / Javascript)"
      },];



    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }
    
    return ( 
        <>
       <IconContext.Provider
        value={{ 
            className: "h-6 fill-current text-gray-700", 
            size: 18
            }}>

          <button
            type="button"
            onClick={openModal}
            className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            Lebenslauf
          </button>
       
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Referenzen
                    </Dialog.Title>
                    <div className="mt-2">
                      
                    <div class="">
                       
                    {jsonData.map(function(d, idx){
                    return (
                    <>
                        <div class="flex">
                            <div key={idx} className="flex flex-col items-center mr-4">
                                <div>
                                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                    <FaCalendarAlt />
                                    </div>
                                </div>
                                <div className="w-px h-full bg-gray-300"></div>
                            </div>
                            <div className="pb-8 ">
                            <p className="mb-2 text-xl font-bold text-gray-600">
                                {d.name}
                            </p>
                            <p className="text-gray-700">
                                {d.name}
                            </p>
                            </div>
                        </div>
                        </>
                            )
                        })}

                        <div class="flex">
                            <div class="flex flex-col items-center mr-4">
                            <div>
                                <div class="flex items-center justify-center w-10 h-10 border rounded-full">
                                <FaQuestion />
                                </div>
                            </div>
                            </div>
                            <div class="pt-1">
                            <p class="mb-2 text-lg font-bold text-gray-600">What's next?</p>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Got it, thanks!
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        </IconContext.Provider>
      </>
     );
}
 
export default HeadlessUiModal;