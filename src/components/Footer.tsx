export default function Footer() {
  return (
<footer className="wrap">
<a aria-label="Back to top" className="brand" href="#home">r<span>.</span>
</a>
<span>© <span>{new Date().getFullYear()}</span> Ramgopal Nannapaneni</span>
<span>Thoughtfully designed. Carefully engineered.</span>
<a href="#home">Back to top ↑</a>
</footer>
  );
}
