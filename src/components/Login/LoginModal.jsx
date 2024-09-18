import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";
import {MailIcon} from './MailIcon.jsx';
import {LockIcon} from './LockIcon.jsx';
import { useTheme } from "next-themes";
import {HeartIcon} from './HeartIcon.jsx'
import SignUpModal from "../SignUp/SignUpModal.jsx";

export default function App() {
    const {theme} = useTheme();
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <>
        <Button 
        onPress={onOpen} 
        color="warning" 
        variant={ theme=="dark" ? "solid" : "flat"}
        >
            Login
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
                <ModalHeader className="flex flex-col gap-1 text-[orange] font-bold text-xl">Log in</ModalHeader>
                <ModalBody>
                    <Input
                    autoFocus
                    endContent={
                        <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    placeholder="Enter your email"
                    variant="bordered"
                    classNames={{
                        input: [
                            "placeholder:text-white/[.5] dark:placeholder:text-white/[.8]",
                        ],
                    }}
                    />
                    <Input
                    endContent={
                        <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    placeholder="Enter your password"
                    type="password"
                    variant="bordered"
                    classNames={{
                        input: [
                            "placeholder:text-white/[.5] dark:placeholder:text-white/[.8]"
                        ],
                    }}
                    />
                    <div className="flex py-2 px-1 justify-between">
                    <Checkbox
                        classNames={{
                        label: "text-small text-white/[.5] dark:text-white/[.8]",
                        wrapper: "bg-white/[.3]"
                        }}
                        color="danger"
                        icon={<HeartIcon />}
                    >
                        Remember me
                    </Checkbox>
                    <Link color="warning" href="#" size="sm">
                        Forgot password?
                    </Link>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <SignUpModal />
                    <Button color="warning" variant="solid" onPress={onClose}>
                    Login
                    </Button>
                </ModalFooter>
                </>
            )}
            </ModalContent>
        </Modal>
        </>
    );
}