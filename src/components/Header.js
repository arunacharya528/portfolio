export const Header = (props = { text: String }) => {

    return (
        <div className="text-3xl font-extrabold text-center py-16 my-5" {...props}>{props.text}</div>
    );
}