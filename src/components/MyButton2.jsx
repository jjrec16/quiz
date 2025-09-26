function MyButton2({ count, onClick }) {
    return (
      <button onClick={onClick}>
        Kliknięto {count} razy
      </button>
    );
}

export default MyButton2;