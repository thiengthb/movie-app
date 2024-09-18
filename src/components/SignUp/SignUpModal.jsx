import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link, Divider} from "@nextui-org/react";
import { useTheme } from "next-themes";

export default function SignUpModal() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <>
        <Button 
        onPress={onOpen} 
        variant="light"
        color="warning" 
        className="font-semibold"
        >
            Sign Up
        </Button>
        <Modal 
            isOpen={isOpen} 
            onOpenChange={onOpenChange}
            shadow="lg"
            placement="center"
            className="bg-[#4b4b4b]/[.5] backdrop-blur-xl"
        >
            <ModalContent>
            {(onClose) => (
                <>
                <ModalHeader className="flex flex-col gap-1 text-[orange] font-bold text-xl">Sign Up</ModalHeader>
                <ModalBody>
                    <Input
                    autoFocus
                    placeholder="Enter your email"
                    variant="bordered"
                    classNames={{
                        input: [
                            "placeholder:text-white/[.5] dark:placeholder:text-white/[.8]",
                        ],
                    }}
                    />
                    <Input
                    placeholder="Enter your password"
                    type="password"
                    variant="bordered"
                    classNames={{
                        input: [
                            "placeholder:text-white/[.5] dark:placeholder:text-white/[.8]"
                        ],
                    }}
                    />
                    <Input
                    placeholder="Confirm password"
                    type="password"
                    variant="bordered"
                    classNames={{
                        input: [
                            "placeholder:text-white/[.5] dark:placeholder:text-white/[.8]"
                        ],
                    }}
                    />
                </ModalBody>
                <ModalFooter className="flex flex-col items-center">
                    <Button 
                    color="warning" 
                    variant="solid" 
                    onPress={onClose} 
                    className="w-full">
                    Sign Up
                    </Button>

                    <p className="text-white/[.8] font-semibold py-3">Or</p>

                    <Button 
                    color="danger"
                    className="w-full"
                    >
                    x
                    </Button>
                </ModalFooter>
                </>
            )}
            </ModalContent>
        </Modal>
        </>
    );
}