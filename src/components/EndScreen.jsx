const EndScreen = ({ points }) => {
    return (
        <div className="end-screen">
            <h1>Gra zakończona!</h1>
            <p>Liczba punktów: {points}</p>
        </div>
    );
};

export default EndScreen;
