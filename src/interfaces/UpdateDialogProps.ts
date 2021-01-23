import User from './User';

export default interface UpdateDialogProps {
    open: boolean;
    //user: User;
    onClose: (updatedUser: User) => void;
}