const TemplateExpressions = () => {
    const data = {
        name: 'Julio',
        age: 27
    }
    return (
        <div>
            <h1>Template Expressions</h1>
            <p>Meu nome é {data.name} e eu tenho {data.age} anos.</p> {/* Exemplo de interpolação de string */}
            <p>Eu {data.age >= 18 ? 'Sou Adulto' : 'Sou de Menor'}.</p> {/* Exemplo de operador ternário */}
        </div>
    )
}    
export default TemplateExpressions;