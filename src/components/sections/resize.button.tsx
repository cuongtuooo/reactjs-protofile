
interface IProp {
    btnText?: string;
    btnIcons?: React.ReactNode;
    btnStyle?: React.CSSProperties;
}

const ResizeButton = (props: IProp) => {
    const { btnText, btnIcons, btnStyle } = props;

    return (
        <button className="resize-button" style={btnStyle}>
            <span style={{ textTransform: "uppercase" }}>{btnText}</span>
            <>{btnIcons}</>
        </button>
    )
}

export default ResizeButton;