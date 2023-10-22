import MyComponent from "./MyComponent";

//Exemplo de componente funcional
const FirstComponent = ()=>  { // Poso criar como função ou como constante
    return(
        <div>
            <h1>First Component</h1>
            <MyComponent />
        </div>
    )
}

export default FirstComponent;