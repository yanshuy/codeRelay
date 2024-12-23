
export default function ScopeTest() {
  const css = String.raw
  const scopedStyle = css`
    @scope {
      .local-div {
        background: hsla(90, 80%, 90%, 20%);
        width: 200px;
        border: 2px solid rebeccapurple;
        animation: someComplexAnimation 3s infinite;
        /* see index.css for keyframes */
      }
    }
    `;

    
  return (
    <>
      <section className="mt-32 @container">
        <style>{scopedStyle}</style>
        <div className="local-div mx-auto auto-rows-[300px] @">ScopeTest text 1</div>
      </section>
      <section className="mt-32">
        <div className="local-div mx-auto">
          ScopeTest text 2 <i>this div also has the class local-div</i>
        </div>
      </section>
    </>
  );
}
