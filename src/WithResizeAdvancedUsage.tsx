import withResizeAdvanced from "./withResizeAdvanced";

const WithResizeUsage = ({name, windowInnerWidth}: {name: string, windowInnerWidth: number})=>{
    return (
        <div>Inner Width is {windowInnerWidth} and name is {name}</div>
    )
}

export default withResizeAdvanced({bumped: 5})(WithResizeUsage);