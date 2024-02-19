import React from 'react'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { zoomContext } from '../../../lib/contexts/commonContexts'

function Modal({ children }) {
    let [isOpen, setIsOpen] = useState(true)
    return (
        <zoomContext.Provider className="Provider" value={{ isOpen, setIsOpen }}>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
                <Dialog.Panel>
                    <MainTable />
                </Dialog.Panel>
            </Dialog>
        </zoomContext.Provider>
    )
}

export default Modal
