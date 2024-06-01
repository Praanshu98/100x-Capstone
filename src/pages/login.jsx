import Logo from "../assets/frame-27180.svg";
// import Button from "../components/buttons.jsx";
import { Button } from "../components/buttons.jsx";

function Header() {
    return (
        <div className="flex justify-center px-4 py-3 md:hidden w-full mt-11 mb-47.5 self-start">
            <img src={Logo} alt="100x-Logo" className />
        </div>
    );
}

// function Button(props) {
//     // Base class of button
//     const base = "shadow-button backdrop-blur-xl w-full";

//     // Varient of class : Default, Outlined
//     const varient = {
//         default: "bg-neutral-50 hover:bg-neutral-200",
//         outline: "border border-Blue-Wash",
//     };

//     // Size of button
//     const size = {
//         medium: "rounded-button-xl py-2 px-6",
//         small: "",
//     };

//     // Text Size of button
//     const textSize = {
//         bold: "font-bold",
//     };

//     // Text style of button
//     // const textStyle = "";

//     // Text Color
//     const textColor = {
//         default: "text-Neutral-1000",
//         blue: "text-Twitter-Blue-Default",
//     };

//     const finalClass = `${base} ${varient[props.varient]} ${size[props.size]} ${
//         textSize[props.textSize]
//     } ${textColor[props.textColor]}`;

//     console.log(finalClass);

//     return (
//         <button className={finalClass}>
//             <p>{props.text}</p>
//         </button>
//     );
// }

function Main() {
    return (
        <div className="flex flex-col gap-10 px-7">
            <div className>
                <p className="text-neutral-50 text-3xl font-extrabold font-inter">
                    {" "}
                    {/* Happening now */}
                    Happening
                </p>
                <p className="text-neutral-50 font-inter font-medium mt-3">
                    {" "}
                    {/* Join today */}
                    Join today.
                </p>
            </div>
            {/* Create Account */}
            <a href="./step1.html">
                <div className="w-full">
                    <Button
                        varient="default"
                        text="Create Account"
                        size="medium"
                        textSize="bold"
                        textColor="default"
                    />
                </div>
            </a>
            {/* --or-- */}
            <div className="flex items-center">
                <hr className="w-43 h-0.25 border-neutral-700" />
                <p className="mx-1 text-neutral-50 font-chirp text-">or</p>
                <hr className="w-43 h-0.25 border-neutral-700" />
            </div>
            {/* Sign in */}
            <div className="flex flex-col">
                {/* Already have a account */}
                <div className="text-white mb-5">
                    <p className="text-neutral-50 font-inter text-sm">
                        Already have an account
                    </p>
                </div>
                {/* Sign in*/}
                <div className="w-full">
                    <Button
                        text="Sign in"
                        varient="outline"
                        size="medium"
                        textSize="bold"
                        textColor="blue"
                    />
                </div>
            </div>
        </div>
    );
}

export default function App() {
    return (
        <div className="bg-Neutral-1000 flex md:justify-center items-center h-screen md:gap-7 md:flex-row flex-col">
            <Header />
            <Main />
        </div>
    );
}
