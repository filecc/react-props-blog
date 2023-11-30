export default function Header({ isFocused } : { isFocused: boolean}) {
  return (
    <>
      <header className={`py-4 text-center text-3xl font-bold ${isFocused && 'blur-lg'}`}>Il mio blog</header>
    </>
  );
}
