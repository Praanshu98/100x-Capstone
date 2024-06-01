export function Button(props) {
    // Base class of button
    const base = "shadow-button backdrop-blur-xl w-full";

    // Varient of class : Default, Outlined
    const varient = {
        default: "bg-neutral-50 hover:bg-neutral-200",
        outline: "border border-Blue-Wash",
    };

    // Size of button
    const size = {
        medium: "rounded-button-xl py-2 px-6",
        small: "",
    };

    // Text Size of button
    const textSize = {
        bold: "font-bold",
    };

    // Text style of button
    // const textStyle = "";

    // Text Color
    const textColor = {
        default: "text-Neutral-1000",
        blue: "text-Twitter-Blue-Default",
    };

    const finalClass = `${base} ${varient[props.varient]} ${size[props.size]} ${
        textSize[props.textSize]
    } ${textColor[props.textColor]}`;

    console.log(finalClass);

    return (
        <button className={finalClass}>
            <p>{props.text}</p>
        </button>
    );
}
