export default function Footer({ isFocused } : { isFocused: boolean}) {
  return (
    <>
      <footer className={`grid place-items-center bg-slate-700 px-6 py-3 text-center text-slate-50 ${isFocused && 'blur-lg'}`}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
        quibusdam, culpa id sint quisquam minima sit beatae natus eaque.
        Consequatur atque expedita pariatur assumenda illum, delectus qui
        adipisci mollitia exercitationem?
      </footer>
    </>
  );
}
