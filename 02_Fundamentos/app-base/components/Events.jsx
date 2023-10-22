const Events = () => {
    const handleMyEvent = (e) => {
        console.log(e);
        console.log('Evento disparado!');
    }

    const renderSomething = (x) => {
        if (x) {
            return <div>Renderiza algo</div>
        } else {
            return <div>Não renderiza nada</div>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique Aqui!</button>
            </div>
            <div>
                <button onClick={() => handleMyEvent('Clicou')}>Clique Aqui! deferenciado</button>
            </div>
            <div>
                {renderSomething(true)} {/* exemplod efunçao com dederizaçaõd e componentes */}
                {renderSomething(false)}
            </div>
        </div>
    );
}

export default Events;