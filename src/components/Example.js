const styledText = {
    fontSize: "50px",
    textAlign: "center",
    margin: "40px",
    border: "1px solid green"
};

export default function Example() {
    return (
        <div style={styledText}>
            <p>Customized Text</p>
        </div>
    );
}
