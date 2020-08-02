export const appendScript = (scriptToAppend) => {
    const script = document.createElement("script");
    script.src = scriptToAppend;
    script.async = true;
    document.head.appendChild(script);
    script.onload = () => {
        console.log(script);
    };
}