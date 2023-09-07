
interface MyComponentProps {
    message: string;
}

export const MyComponent = ({ message }: MyComponentProps) => {
    return <div>{message}</div>;
};