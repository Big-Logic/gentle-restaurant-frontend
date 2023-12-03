function Button({ children, handleClick, customClass }) {
  return (
    <button onClick={handleClick} className={customClass}>
      {children}
    </button>
  );
}

export default Button;
